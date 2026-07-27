/**
 * Accurate country/state maps with clickable region pins.
 * Uses real-world GeoJSON outlines (Natural Earth) projected via d3-geo,
 * with pins placed at each region's true [lng, lat] from REGION_COORDS.
 */
import type { Region, Country } from "@/data/education";
import { REGION_COORDS } from "@/data/regionCoords";
import { zoneColor } from "@/lib/education";
import { geoMercator, geoPath, type GeoProjection } from "d3-geo";
import { useEffect, useMemo, useRef, useState } from "react";

import italyGeo from "@/data/geo/italy.json";
import franceGeo from "@/data/geo/france.json";
import californiaGeo from "@/data/geo/california.json";

const GEO: Record<Country, GeoJSON.Feature> = {
  Italy: italyGeo as GeoJSON.Feature,
  France: franceGeo as GeoJSON.Feature,
  California: californiaGeo as GeoJSON.Feature,
};

/** Project the country into a 0..100 x 0..100 SVG viewport with a small margin. */
function buildProjection(country: Country): { projection: GeoProjection; outline: string } {
  const feature = GEO[country];
  const projection = geoMercator().fitExtent(
    [[4, 4], [96, 96]],
    feature as GeoJSON.GeoJsonObject,
  );
  const path = geoPath(projection);
  const outline = path(feature as GeoJSON.GeoJsonObject) ?? "";
  return { projection, outline };
}

export function RegionMap({
  country,
  regions,
  selectedId,
  onSelect,
}: {
  country: Country;
  regions: Region[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}) {
  const items = regions.filter((r) => r.country === country);

  const { projection, outline } = useMemo(() => buildProjection(country), [country]);

  // Project each region's [lng, lat] into the 0..100 map space.
  const pins = useMemo(() => {
    return items
      .map((r) => {
        const ll = REGION_COORDS[r.id];
        if (!ll) return null;
        const p = projection(ll);
        if (!p) return null;
        return { r, x: p[0], y: p[1] };
      })
      .filter((v): v is { r: Region; x: number; y: number } => v !== null);
  }, [items, projection]);

  const DEFAULT_VB = { x: 0, y: 0, w: 100, h: 100 };
  const [vb, setVb] = useState(DEFAULT_VB);
  const dragRef = useRef<{ x: number; y: number; vb: typeof vb } | null>(null);
  const movedRef = useRef(false);

  useEffect(() => { setVb(DEFAULT_VB); /* reset on country switch */
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [country]);

  const zoomPct = Math.round((100 / vb.w) * 100);

  const zoom = (factor: number) => {
    setVb((cur) => {
      const nw = Math.max(15, Math.min(100, cur.w * factor));
      const nh = Math.max(15, Math.min(100, cur.h * factor));
      const cx = cur.x + cur.w / 2;
      const cy = cur.y + cur.h / 2;
      return { x: cx - nw / 2, y: cy - nh / 2, w: nw, h: nh };
    });
  };
  const reset = () => setVb(DEFAULT_VB);

  return (
    <div className="relative overflow-hidden rounded-xl ring-1 ring-border/60 shadow-sm">
      <svg
        viewBox={`${vb.x} ${vb.y} ${vb.w} ${vb.h}`}
        className="block w-full h-auto max-h-[60vh] sm:max-h-[420px] select-none cursor-grab active:cursor-grabbing touch-pan-y"
        role="img"
        aria-label={`${country} wine regions map`}
        onWheel={(e) => {
          if (!(e.ctrlKey || e.metaKey)) return;
          e.preventDefault();
          zoom(e.deltaY > 0 ? 1.15 : 0.87);
        }}
        onPointerDown={(e) => {
          (e.target as Element).setPointerCapture?.(e.pointerId);
          dragRef.current = { x: e.clientX, y: e.clientY, vb };
          movedRef.current = false;
        }}
        onPointerMove={(e) => {
          if (!dragRef.current) return;
          if (Math.abs(e.clientX - dragRef.current.x) + Math.abs(e.clientY - dragRef.current.y) > 4) {
            movedRef.current = true;
          }
          const svg = e.currentTarget;
          const rect = svg.getBoundingClientRect();
          const scaleX = dragRef.current.vb.w / rect.width;
          const scaleY = dragRef.current.vb.h / rect.height;
          const dx = (e.clientX - dragRef.current.x) * scaleX;
          const dy = (e.clientY - dragRef.current.y) * scaleY;
          setVb({ ...dragRef.current.vb, x: dragRef.current.vb.x - dx, y: dragRef.current.vb.y - dy });
        }}
        onPointerUp={() => { dragRef.current = null; }}
        onPointerLeave={() => { dragRef.current = null; }}
      >
        <defs>
          <linearGradient id="seaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"  stopColor="oklch(0.98 0.012 230)" />
            <stop offset="100%" stopColor="oklch(0.94 0.022 230)" />
          </linearGradient>
          <radialGradient id="vignette" cx="50%" cy="50%" r="70%">
            <stop offset="60%" stopColor="oklch(0 0 0 / 0)" />
            <stop offset="100%" stopColor="oklch(0 0 0 / 0.12)" />
          </radialGradient>
          <filter id="pinShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="0.3" stdDeviation="0.4" floodOpacity="0.35" />
          </filter>
        </defs>

        {/* Sea */}
        <rect x="-10" y="-10" width="120" height="120" fill="url(#seaGrad)" />

        {/* Country outline */}
        <path
          d={outline}
          fill="oklch(0.985 0.01 95)"
          stroke="oklch(0.30 0.05 250)"
          strokeWidth={Math.max(0.2, vb.w * 0.004)}
          strokeLinejoin="round"
          strokeLinecap="round"
        />

        {pins.map(({ r, x, y }) => {
          const active = r.id === selectedId;
          const color = zoneColor(r.zone);
          const fontSize = Math.max(1.4, Math.min(3.6, vb.w * 0.028));
          const radius = Math.max(1.0, Math.min(2.8, vb.w * 0.022));
          return (
            <g
              key={r.id}
              className="cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                if (movedRef.current) { movedRef.current = false; return; }
                onSelect(r.id);
              }}
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onSelect(r.id); }}
            >
              {active && (
                <circle cx={x} cy={y} r={radius * 2.2}
                  fill="none" stroke={color} strokeWidth={fontSize * 0.10} opacity="0.35" />
              )}
              <circle
                cx={x} cy={y}
                r={active ? radius * 1.4 : radius}
                fill={color}
                stroke={active ? "oklch(0.15 0 0)" : "oklch(1 0 0)"}
                strokeWidth={active ? fontSize * 0.18 : fontSize * 0.11}
                filter="url(#pinShadow)"
              />
              <text
                x={x + radius + 0.6} y={y + fontSize * 0.35}
                fontSize={fontSize}
                fill="oklch(0.15 0 0)"
                stroke="oklch(1 0 0)"
                strokeWidth={fontSize * 0.22}
                paintOrder="stroke"
                className="pointer-events-none select-none"
                fontWeight={active ? 700 : 500}
              >
                {r.name}
              </text>
            </g>
          );
        })}

        <rect x="0" y="0" width="100" height="100" fill="url(#vignette)" pointerEvents="none" />
      </svg>

      <div className="pointer-events-none absolute left-2 top-2 flex items-center gap-1.5 rounded-full bg-background/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-foreground/80 backdrop-blur ring-1 ring-border/60 shadow-sm">
        <span aria-hidden>🍷</span>
        <span>{country}</span>
        <span className="text-muted-foreground">· {zoomPct}%</span>
      </div>

      <div className="absolute bottom-3 right-3 flex items-center divide-x divide-border/60 overflow-hidden rounded-full bg-background/90 ring-1 ring-border/60 shadow-md backdrop-blur">
        <button
          type="button" onClick={() => zoom(0.8)} aria-label="Zoom in"
          className="flex h-8 w-9 items-center justify-center text-sm font-semibold text-foreground/80 hover:bg-muted hover:text-foreground transition-colors"
        >＋</button>
        <button
          type="button" onClick={() => zoom(1.25)} aria-label="Zoom out"
          className="flex h-8 w-9 items-center justify-center text-sm font-semibold text-foreground/80 hover:bg-muted hover:text-foreground transition-colors"
        >－</button>
        <button
          type="button" onClick={reset} aria-label="Reset view"
          className="flex h-8 px-2.5 items-center justify-center text-[10px] font-semibold uppercase tracking-wider text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
        >Reset</button>
      </div>

      <div className="pointer-events-none absolute bottom-3 left-3 hidden sm:block rounded-full bg-background/70 px-2.5 py-1 text-[10px] text-muted-foreground backdrop-blur ring-1 ring-border/40">
        drag to pan · ⌘/Ctrl + scroll to zoom
      </div>
    </div>
  );
}
