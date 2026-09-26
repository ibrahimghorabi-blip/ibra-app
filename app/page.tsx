import Link from "next/link";
import { HERO, PILLARS, WHO_WE_HELP } from "@/lib/site-config";
import QuickDiagnostic from "@/components/QuickDiagnostic";

export default function Home() {
  return (
    <>
      <section className="mx-auto grid max-w-[1080px] gap-7 px-5 py-14 md:grid-cols-[1.1fr_0.9fr] md:items-center md:pt-16">
        <div>
          <span className="mb-4 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.1em] text-pine-deep">
            <span className="h-1.5 w-1.5 rounded-full bg-pine-deep" />
            {HERO.eyebrow}
          </span>
          <h1 className="font-display text-[clamp(32px,5.6vw,50px)] leading-[1.08]">
            {HERO.headline}
          </h1>
          <p className="mt-4 max-w-[46ch] text-base leading-relaxed text-ink-soft">
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
              className="rounded border border-ink px-5 py-3 text-sm font-semibold"
            >
              {HERO.secondaryCta.label}
            </Link>
          </div>
        </div>
        <QuickDiagnostic />
      </section>

      <main className="mx-auto max-w-[1080px] px-5 pb-24">
        <div className="mb-5 mt-10 flex items-baseline justify-between border-b border-line pb-3">
          <h2 className="font-display text-2xl">What we do</h2>
          <Link href="/programs" className="text-sm text-ink-soft">
            Programs, page →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {PILLARS.map((p) => (
            <div key={p.key} className="rounded-md border border-line bg-surface p-5">
              <h3 className="font-display text-lg">{p.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-ink-soft">
                {p.blurb}
              </p>
              <Link
                href="/programs"
                className="mt-3 inline-block rounded border border-ink px-3 py-1.5 text-[13px] font-semibold"
              >
                Learn more
              </Link>
            </div>
          ))}
        </div>

        <div
          id="who-we-help"
          className="mb-5 mt-14 flex items-baseline justify-between border-b border-line pb-3"
        >
          <h2 className="font-display text-2xl">Who we help</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {WHO_WE_HELP.map((w) => (
            <div key={w.title} className="rounded-md border border-line bg-surface p-5">
              <h3 className="font-display text-lg">{w.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-ink-soft">
                {w.blurb}
              </p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
