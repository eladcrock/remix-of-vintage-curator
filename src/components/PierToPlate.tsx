/**
 * Pier-to-Plate education panel for Scoma's.
 * Covers: fish sourcing map, the Mr. Morgan boat & Steve Fitz, low-impact
 * Scottish-seine fishing for sand dabs & petrale, oyster education, plus
 * Scoma's / Fisherman's Wharf history. Hand-edit data below to refine.
 */

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type SourcePin = {
  id: string;
  name: string;
  /** Approx position in 0–100 viewBox coords on a simplified Pacific coast map. */
  x: number;
  y: number;
  species: string[];
  note: string;
};

// Simple Pacific-coast schematic. Points are hand-placed (not geo-accurate)
// to keep the visual readable on small screens.
const SOURCING: SourcePin[] = [
  {
    id: "alaska",
    name: "Alaska (Gulf & SE)",
    x: 28,
    y: 12,
    species: ["Halibut", "Wild King Salmon", "Black Cod / Sablefish", "Spot Prawns"],
    note: "Cold, clean Gulf of Alaska waters, line-caught halibut and troll-caught king salmon arrive whole on ice.",
  },
  {
    id: "bc",
    name: "British Columbia (Vancouver Island)",
    x: 38,
    y: 28,
    species: ["Sustainably Farmed King Salmon", "Sablefish", "Oysters"],
    note: "Creative Salmon out of Tofino raises our ocean-farmed king salmon to the highest sustainability standards (Ocean Wise, Best Aquaculture Practices). Most of our oysters also come from BC growers, joined by Hood Canal, Washington.",
  },
  {
    id: "wa-or",
    name: "Washington & Oregon Coast",
    x: 42,
    y: 42,
    species: ["Dungeness Crab", "Petrale Sole", "Rockfish", "Hood Canal Oysters"],
    note: "Pots and hook-and-line fisheries supplementing California's Dungeness season; Hood Canal (Puget Sound) is one of the world's great oyster nurseries and supplies many of our Pacific varieties.",
  },
  {
    id: "norcal",
    name: "Northern California (Bodega → Half Moon Bay)",
    x: 46,
    y: 55,
    species: ["Dungeness Crab", "Wild King Salmon", "Rockfish"],
    note: "The local Dungeness fleet. Pot-caught crab landed at Bodega Bay, Pillar Point, and Pier 45.",
  },
  {
    id: "sf",
    name: "Pier 47 · Scoma's Pier",
    x: 50,
    y: 62,
    species: ["Sand Dabs", "Petrale Sole", "Local Catch"],
    note: "Boats tie up steps from the kitchen door. Mr. Morgan unloads dabs and petrale here most mornings.",
  },
  {
    id: "monterey",
    name: "Monterey Bay",
    x: 50,
    y: 70,
    species: ["Squid (Calamari)", "Sardines", "Rockfish"],
    note: "Cold upwelling waters, California market squid and rockfish from the Monterey fleet.",
  },
  {
    id: "socal",
    name: "Southern California / Baja",
    x: 56,
    y: 82,
    species: ["Wild Gulf-style Shrimp", "Spiny Lobster (seasonal)"],
    note: "Warmer-water shellfish that round out the menu when local seasons close.",
  },
];

const STORIES: { id: string; title: string; body: string[] }[] = [
  {
    id: "mr-morgan",
    title: "The Mr. Morgan & Steve Fitz",
    body: [
      "Fisherman Steve Fitz has been selling Scoma's the freshest sand dabs and petrale sole for nearly 35 years. His boat, the F/V Mr. Morgan, docks right next to the restaurant on Pier 47.",
      "Most mornings the catch travels just a few dozen feet, off the deck of the Mr. Morgan, across the pier, and into Scoma's kitchen. That is the literal definition of 'pier to plate'.",
      "Steve is part of the California Groundfish Collective, a small group of West Coast fishermen committed to careful, accountable harvest of California's bottom-fish species.",
    ],
  },
  {
    id: "scottish-seine",
    title: "Low-impact fishing: Scottish seine, not bottom trawl",
    body: [
      "The Mr. Morgan fishes with a 'Scottish seine' (also called a Danish seine), a method that uses light ropes laid in a wide circle on the seabed and slowly drawn together. Fish are corralled into a small net at the center.",
      "Unlike conventional bottom trawls, the gear does not drag heavy doors or chains across the bottom. Bycatch is dramatically reduced and the seafloor habitat is left essentially undisturbed.",
      "It's slower and more skill-dependent than trawling, which is exactly why so few boats still do it. The trade-off shows up on the plate: cleaner, less bruised, more delicate fish.",
    ],
  },
  {
    id: "sand-dabs",
    title: "Why sand dabs are a San Francisco delicacy",
    body: [
      "Pacific sand dabs are a small left-eyed flatfish native to the California coast. They are sweet, delicate, and almost impossible to find outside the Bay Area, they don't ship or freeze well.",
      "At Scoma's they come in whole from the Mr. Morgan, are filleted in-house, and pan-finished simply with butter, lemon and capers so the fish itself does the talking.",
      "Sand dabs are managed under the federal Pacific Groundfish Plan and rated a 'Best Choice' by Monterey Bay Aquarium Seafood Watch when caught with low-impact gear, exactly the gear Steve uses.",
    ],
  },
  {
    id: "scomas-history",
    title: "Scoma's & Fisherman's Wharf, since 1965",
    body: [
      "In 1965, brothers Al and Joe Scoma bought a six-stool coffee shop on Pier 47, cooking their mother's recipes for the local fishermen who tied up out back.",
      "Sixty years later, Scoma's is the only restaurant on Fisherman's Wharf that still receives its catch directly from boats at its own pier. Fish is unloaded, cut, and cooked all within yards of the water.",
      "Scoma's is a registered San Francisco Legacy Business, recognized by the city for its longstanding contribution to the cultural fabric of the Wharf.",
      "The Lazy Man's Cioppino, Dungeness crab, scallops, shrimp, clams, mussels, calamari, and market fish in Mama Scoma's tomato broth, was born here and remains the dish most associated with the Wharf.",
    ],
  },
];

type OysterPin = {
  id: string;
  /** label drawn on the map */
  short: string;
  /** % x/y on a simplified world rectangle */
  x: number;
  y: number;
};

const OYSTER_PINS: OysterPin[] = [
  { id: "bc", short: "BC", x: 14, y: 30 },
  { id: "hood", short: "Hood Canal", x: 13, y: 35 },
  { id: "tomales", short: "Tomales", x: 14, y: 44 },
  { id: "humboldt", short: "Humboldt", x: 13, y: 41 },
  { id: "ne", short: "New England", x: 30, y: 38 },
  { id: "chesapeake", short: "Chesapeake", x: 29, y: 44 },
  { id: "gulf", short: "Gulf", x: 25, y: 52 },
  { id: "france", short: "France", x: 47, y: 36 },
  { id: "ireland", short: "Ireland", x: 45, y: 32 },
  { id: "japan", short: "Japan", x: 82, y: 42 },
];

type OysterFamily = {
  id: string;
  species: string; // latin
  name: string;
  origin: string;
  flavor: string;
  examples: string[];
  regions: string[]; // pin ids
};

const OYSTER_FAMILIES: OysterFamily[] = [
  {
    id: "pacific",
    species: "Crassostrea gigas",
    name: "Pacific (Miyagi)",
    origin: "Native to Japan; now the dominant farmed oyster on the U.S. West Coast.",
    flavor: "Plump, creamy body with cucumber and melon notes; salinity varies by bay.",
    examples: ["Kusshi (BC)", "Fanny Bay (BC)", "Hama Hama (Hood Canal)", "Totten Inlet (WA)"],
    regions: ["bc", "hood", "tomales"],
  },
  {
    id: "kumamoto",
    species: "Crassostrea sikamea",
    name: "Kumamoto",
    origin: "Originally from Kyushu, Japan; rescued from near-extinction by PNW farms.",
    flavor: "Small, deep-cupped, sweet with a honeydew finish and very mild brine.",
    examples: ["Humboldt Kumamoto (CA)", "Taylor Kumamoto (WA)"],
    regions: ["humboldt", "hood", "japan"],
  },
  {
    id: "virginica",
    species: "Crassostrea virginica",
    name: "Eastern / Atlantic",
    origin: "Native from the Gulf of Mexico up through the Canadian Maritimes.",
    flavor: "Firmer meat, brinier, often a clean mineral finish; flavor swings widely by estuary.",
    examples: ["Blue Point (NY)", "Wellfleet (MA)", "Beausoleil (NB)", "Malpeque (PEI)"],
    regions: ["ne", "chesapeake", "gulf"],
  },
  {
    id: "edulis",
    species: "Ostrea edulis",
    name: "European Flat (Belon)",
    origin: "Native to Europe; small populations cultivated in Maine.",
    flavor: "Flat, coin-shaped shell; intensely metallic, coppery, almost hazelnut finish.",
    examples: ["Belon (France)", "Galway Flat (Ireland)"],
    regions: ["france", "ireland"],
  },
  {
    id: "lurida",
    species: "Ostrea lurida",
    name: "Olympia",
    origin: "The only oyster native to the West Coast of North America.",
    flavor: "Tiny (often quarter-sized), strong celery-salt and copper finish.",
    examples: ["Olympia (Puget Sound)"],
    regions: ["hood"],
  },
];

export function PierToPlate() {

  return (
    <div className="space-y-6">
      <header className="rounded-lg border border-border bg-card p-4">
        <h2 className="text-lg font-semibold">Pier to Plate</h2>
        <p className="mt-1 text-xs text-muted-foreground">
          Where Scoma's fish comes from, who catches it, and how. Use this as
          your tableside reference when guests ask "is this local?"
        </p>
      </header>

      <section className="rounded-lg border border-border bg-card p-4">
        <h3 className="text-sm font-semibold">Where our fish comes from</h3>
        <p className="mt-1 text-[11px] text-muted-foreground">
          A schematic of the Pacific coast, tap a pin in the list to see what
          arrives from each region.
        </p>

        <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-[260px_minmax(0,1fr)]">
          <div className="rounded-md border border-border bg-background/40 p-2">
            <SourcingMap pins={SOURCING} />
          </div>
          <ul className="space-y-2">
            {SOURCING.map((p, i) => (
              <li
                key={p.id}
                className="rounded-md border border-border bg-background/40 p-3"
              >
                <div className="flex items-baseline justify-between gap-2">
                  <h4 className="text-sm font-semibold text-foreground">
                    <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-[10px] font-bold text-primary tabular-nums">
                      {i + 1}
                    </span>
                    {p.name}
                  </h4>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{p.note}</p>
                <div className="mt-2 flex flex-wrap gap-1">
                  {p.species.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border bg-card px-2 py-0.5 text-[10px] uppercase tracking-wide text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {STORIES.map((s) => (
          <article
            key={s.id}
            className="rounded-lg border border-border bg-card p-4"
          >
            <h3 className="text-sm font-semibold">{s.title}</h3>
            <div className="mt-2 space-y-2 text-xs leading-relaxed text-foreground/90">
              {s.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

function SourcingMap({ pins }: { pins: SourcePin[] }) {
  return (
    <svg
      viewBox="0 0 80 100"
      className="h-auto w-full"
      aria-label="Pacific coast sourcing map"
      role="img"
    >
      <rect x="0" y="0" width="80" height="100" fill="oklch(0.22 0.04 240)" />
      <path
        d="M22 4 L34 16 L40 26 L44 38 L46 50 L50 60 L48 70 L52 82 L58 92 L80 92 L80 0 L22 0 Z"
        fill="oklch(0.28 0.03 90)"
        stroke="oklch(0.35 0.04 90)"
        strokeWidth="0.4"
      />
      <path
        d="M48 60 L46 62 L48 64 Z"
        fill="oklch(0.22 0.04 240)"
      />

      {pins.map((p, i) => (
        <g key={p.id}>
          <circle
            cx={p.x}
            cy={p.y}
            r="1.8"
            fill="oklch(0.72 0.18 30)"
            stroke="oklch(0.98 0 0)"
            strokeWidth="0.5"
          />
          <text
            x={p.x}
            y={p.y + 0.7}
            textAnchor="middle"
            fontSize="2"
            fontWeight="700"
            fill="oklch(0.15 0 0)"
          >
            {i + 1}
          </text>
        </g>
      ))}

      <text x="3" y="8" fontSize="3" fill="oklch(0.85 0.02 240)" opacity="0.7">
        N
      </text>
      <text x="3" y="96" fontSize="3" fill="oklch(0.85 0.02 240)" opacity="0.7">
        S
      </text>
      <text
        x="40"
        y="98"
        textAnchor="middle"
        fontSize="2.4"
        fill="oklch(0.85 0.02 240)"
        opacity="0.7"
      >
        Pacific Ocean
      </text>
    </svg>
  );
}
