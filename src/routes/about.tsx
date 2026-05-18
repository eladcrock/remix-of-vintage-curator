/**
 * About Scoma's — story, history timeline, awards, press, philosophy, media.
 * Data lives in src/data/story.ts (hand-edit to update or add images).
 */
import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import {
  AWARDS,
  FACTS,
  MEDIA,
  PHILOSOPHY,
  PRESS,
  TIMELINE,
  VIDEOS,
} from "@/data/story";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Scoma's Pro · About Scoma's" },
      {
        name: "description",
        content:
          "Sixty years on Pier 47 — Scoma's history, philosophy, awards, and press. Sourced from scomas.com, SF Chronicle, Newsweek, GGRA Saucy Awards, and SF Legacy Business Registry.",
      },
      { property: "og:title", content: "Scoma's Pro · About Scoma's" },
      {
        property: "og:description",
        content:
          "The story behind the only restaurant on Fisherman's Wharf that still receives its catch at its own pier.",
      },
      { property: "og:image", content: MEDIA[0]?.src },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav title="Scoma's Pro" subtitle="About Scoma's" />
      <main className="mx-auto max-w-5xl px-4 pb-24 pt-5 space-y-8">

        {/* Hero */}
        <section className="grid grid-cols-1 gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
          <div className="space-y-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
              Pier 47 · Fisherman's Wharf · Since {FACTS.founded}
            </p>
            <h2 className="text-2xl font-semibold leading-tight">
              {PHILOSOPHY.tagline}
            </h2>
            <p className="text-xs italic text-muted-foreground">
              {PHILOSOPHY.motto}
            </p>
            <div className="space-y-2 text-sm leading-relaxed text-foreground/90">
              {PHILOSOPHY.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <ul className="mt-3 grid grid-cols-2 gap-2 text-[11px]">
              <FactCard label="Founded" value={FACTS.founded} />
              <FactCard label="Generations" value={FACTS.generations} />
              <FactCard label="Waste diverted" value={FACTS.wasteDiversion} />
              <FactCard label="Bottles saved / yr" value={FACTS.bottlesSaved} />
            </ul>
          </div>
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <img
              src={MEDIA[0].src}
              alt={MEDIA[0].caption}
              loading="eager"
              className="aspect-[5/4] w-full object-cover"
            />
            <figcaption className="px-3 py-2 text-[11px] text-muted-foreground">
              {MEDIA[0].caption}
            </figcaption>
          </figure>
        </section>

        {/* Awards */}
        <section className="rounded-lg border border-border bg-card p-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
            Awards & Recognition
          </h3>
          <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {AWARDS.map((a, i) => (
              <li
                key={i}
                className="rounded-md border border-border bg-background/50 p-3"
              >
                <div className="flex items-baseline justify-between gap-2">
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                    {a.org}
                  </p>
                  {a.year && (
                    <span className="text-[10px] font-semibold tabular-nums text-primary">
                      {a.year}
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm font-semibold text-foreground">
                  {a.title}
                </p>
                {a.note && (
                  <p className="mt-1 text-xs text-muted-foreground">{a.note}</p>
                )}
              </li>
            ))}
          </ul>
        </section>

        {/* Timeline */}
        <section>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
            Six Decades on the Wharf
          </h3>
          <ol className="mt-3 space-y-3 border-l-2 border-primary/30 pl-4">
            {TIMELINE.map((t) => (
              <li key={t.year + t.title} className="relative">
                <span
                  aria-hidden
                  className="absolute -left-[21px] top-1 inline-block h-3 w-3 rounded-full border-2 border-background bg-primary"
                />
                <p className="text-[10px] font-semibold uppercase tracking-wider text-primary">
                  {t.year}
                </p>
                <p className="text-sm font-semibold text-foreground">
                  {t.title}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {t.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* Press */}
        <section className="rounded-lg border border-border bg-card p-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
            In Their Words
          </h3>
          <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
            {PRESS.map((p, i) => (
              <blockquote
                key={i}
                className="rounded-md border-l-2 border-primary/60 bg-background/50 p-3"
              >
                <p className="text-sm italic leading-relaxed text-foreground/90">
                  &ldquo;{p.quote}&rdquo;
                </p>
                <footer className="mt-2 text-[10px] uppercase tracking-wider text-muted-foreground">
                  — {p.outlet}
                  {p.context ? ` · ${p.context}` : ""}
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        {/* Video */}
        <section>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
            Pier to Plate in Action
          </h3>
          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {VIDEOS.map((v) => (
              <figure
                key={v.youtubeId}
                className="overflow-hidden rounded-lg border border-border bg-card"
              >
                <div className="aspect-video w-full">
                  <iframe
                    src={`https://www.youtube.com/embed/${v.youtubeId}`}
                    title={v.title}
                    loading="lazy"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                  />
                </div>
                <figcaption className="px-3 py-2 text-[11px] text-muted-foreground">
                  {v.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Gallery */}
        <section>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
            Inside Scoma's
          </h3>
          <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
            {MEDIA.slice(1).map((m, i) => (
              <figure
                key={i}
                className="overflow-hidden rounded-md border border-border bg-card"
              >
                <img
                  src={m.src}
                  alt={m.caption}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition-transform hover:scale-105"
                />
                <figcaption className="px-2 py-1.5 text-[10px] leading-tight text-muted-foreground">
                  {m.caption}
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-3 text-[10px] text-muted-foreground">
            Photography courtesy of Scoma's Restaurant (scomas.com) and Carly Hackbarth.
          </p>
        </section>

        {/* Contact */}
        <section className="rounded-lg border border-border bg-card p-4 text-xs">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
            Visit
          </h3>
          <dl className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
            <div>
              <dt className="text-[10px] uppercase tracking-wider text-muted-foreground">
                Address
              </dt>
              <dd className="mt-0.5 font-medium">{FACTS.address}</dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-wider text-muted-foreground">
                Phone
              </dt>
              <dd className="mt-0.5 font-medium">
                <a href={`tel:${FACTS.phone.replace(/[^\d+]/g, "")}`} className="hover:text-primary">
                  {FACTS.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-wider text-muted-foreground">
                Email
              </dt>
              <dd className="mt-0.5 font-medium">
                <a href={`mailto:${FACTS.email}`} className="hover:text-primary">
                  {FACTS.email}
                </a>
              </dd>
            </div>
          </dl>
        </section>

      </main>
    </div>
  );
}

function FactCard({ label, value }: { label: string; value: string }) {
  return (
    <li className="rounded-md border border-border bg-card px-2.5 py-1.5">
      <p className="text-[9px] uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
      <p className="mt-0.5 text-[11px] font-semibold text-foreground">
        {value}
      </p>
    </li>
  );
}
