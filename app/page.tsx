import Link from "next/link";
import { HERO, PILLARS, WHO_WE_HELP } from "@/lib/site-config";
import VentureAssessmentCard from "@/components/VentureAssessmentCard";
import TrustBar from "@/components/TrustBar";
import BookShowcase from "@/components/BookShowcase";

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-[1080px] px-5 pb-4 pt-14 md:pt-16">
        <div className="grid gap-7 md:grid-cols-[1.1fr_0.9fr] md:items-start">
          <div>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.08em] text-ink-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-pine pulse-dot" />
              {HERO.eyebrow}
            </span>
            <h1 className="font-display text-[clamp(30px,5vw,46px)] leading-[1.12] text-ink">
              {HERO.headline}
            </h1>
            <p className="mt-4 max-w-[52ch] text-base leading-relaxed text-ink-soft">
              {HERO.subhead}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={HERO.primaryCta.href}
                className="rounded bg-pine-deep px-5 py-3 text-sm font-semibold text-[#F4F2EA]"
              >
                {HERO.primaryCta.label}
              </Link>
              <Link
                href={HERO.secondaryCta.href}
                className="rounded border border-line px-5 py-3 text-sm font-semibold text-ink"
              >
                {HERO.secondaryCta.label}
              </Link>
            </div>
            <TrustBar />
          </div>
          <VentureAssessmentCard />
        </div>
      </section>

      <div className="mx-auto max-w-[1080px] px-5 pt-10">
        <BookShowcase />
      </div>

      <main className="mx-auto max-w-[1080px] px-5 pb-24">
        <div
          id="what-we-do"
          className="mb-5 mt-4 scroll-mt-20 border-b border-line pb-3"
        >
          <h2 className="font-display text-2xl text-ink">What we do</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {PILLARS.map((p) => (
            <div
              key={p.key}
              className="glow-card rounded-md border border-line bg-surface p-5 backdrop-blur-md"
            >
              <h3 className="font-display text-lg text-ink">{p.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-ink-soft">
                {p.blurb}
              </p>
              <Link
                href="/programs"
                className="mt-3 inline-block rounded border border-line px-3 py-1.5 text-[13px] font-semibold text-ink hover:border-pine"
              >
                Learn more
              </Link>
            </div>
          ))}
        </div>

        <div
          id="who-we-help"
          className="mb-5 mt-14 scroll-mt-20 border-b border-line pb-3"
        >
          <h2 className="font-display text-2xl text-ink">Who we help</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {WHO_WE_HELP.map((w) => (
            <Link
              key={w.title}
              href={w.href}
              className="glow-card flex flex-col rounded-md border border-line bg-surface p-5 backdrop-blur-md"
            >
              <h3 className="font-display text-lg text-ink">{w.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-ink-soft">
                {w.blurb}
              </p>
              <p className="mt-3 text-[11px] font-medium uppercase tracking-wide text-brass">
                {w.bottleneck}
              </p>
              <span className="mt-4 text-[13px] font-semibold text-pine">
                Get in touch →
              </span>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
