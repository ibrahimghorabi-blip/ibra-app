import Link from "next/link";
import { PILLARS, WHO_WE_HELP } from "@/lib/data";

export default function Home() {
  return (
    <>
      <section className="mx-auto grid max-w-[1080px] gap-7 px-5 py-14 md:grid-cols-[1.1fr_0.9fr] md:items-center md:pt-16">
        <div>
          <h1 className="font-display text-[clamp(32px,5.6vw,50px)] leading-[1.08]">
            We&rsquo;re shaping the way
            <br />
            business is done.
          </h1>
          <p className="mt-4 max-w-[46ch] text-base leading-relaxed text-ink-soft">
            Technical structure, business development consultation, media
            &amp; marketing, and branding — brought together to help you
            build, restructure, or grow with clarity.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {["10+ years · Tech", "Sales", "Strategic Business Development"].map(
              (t) => (
                <span
                  key={t}
                  className="rounded-full border border-line bg-surface px-3 py-1 text-xs font-semibold text-pine-deep"
                >
                  {t}
                </span>
              )
            )}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/programs"
              className="rounded bg-pine-deep px-5 py-3 text-sm font-semibold text-[#F4F2EA]"
            >
              Explore what we do
            </Link>
            <Link
              href="/products"
              className="rounded border border-ink px-5 py-3 text-sm font-semibold"
            >
              Get the Ebook
            </Link>
          </div>
        </div>
        <div className="aspect-[4/3] rounded-md bg-gradient-to-br from-pine to-pine-deep" />
      </section>

      <main className="mx-auto max-w-[1080px] px-5 pb-24">
        <div className="mb-5 mt-10 flex items-baseline justify-between border-b border-line pb-3">
          <h2 className="font-display text-2xl">What we do</h2>
          <Link href="/programs" className="text-sm text-ink-soft">
            Programs, page →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
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

        <div className="mb-5 mt-12 flex items-baseline justify-between border-b border-line pb-3">
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

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-md border border-line bg-surface p-6">
          <div>
            <h2 className="font-display text-xl">The Ebook</h2>
            <p className="mt-1 max-w-[50ch] text-sm text-ink-soft">
              GCC Market-Entry Playbook — a practical guide to entering GCC
              markets. One book, one place to get it.
            </p>
          </div>
          <Link
            href="/products"
            className="rounded bg-pine-deep px-5 py-3 text-sm font-semibold text-[#F4F2EA]"
          >
            Get the Ebook
          </Link>
        </div>
      </main>
    </>
  );
}
