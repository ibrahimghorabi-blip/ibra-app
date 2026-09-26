import Link from "next/link";
import { BOOK } from "@/lib/site-config";

export default function BookShowcase() {
  return (
    <section id={BOOK.id} className="mb-14 rounded-md border border-line bg-surface p-7 backdrop-blur-md md:p-9">
      <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">
        <div className="glow-card flex aspect-[3/4] items-center justify-center rounded-md border border-line bg-bg">
          <span className="font-display text-center text-2xl leading-snug text-ink-soft">
            {BOOK.title}
          </span>
        </div>
        <div>
          <span className="mb-3 inline-block rounded-full border border-line px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-pine">
            {BOOK.eyebrow}
          </span>
          <h2 className="font-display text-2xl leading-snug text-ink md:text-3xl">
            {BOOK.headline}
          </h2>
          <p className="mt-4 max-w-[55ch] text-sm leading-relaxed text-ink-soft">
            {BOOK.description}
          </p>
          <div className="mt-5 flex flex-col gap-2.5">
            {BOOK.highlights.map((h) => (
              <div key={h} className="flex items-center gap-2 text-sm text-ink">
                <span className="h-1 w-1 shrink-0 rounded-full bg-pine" />
                {h}
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={BOOK.ctaPrimary.href}
              className="rounded bg-pine-deep px-5 py-3 text-sm font-semibold text-[#F4F2EA]"
            >
              {BOOK.ctaPrimary.label}
            </Link>
            <Link
              href={BOOK.ctaSecondary.href}
              className="rounded border border-line px-5 py-3 text-sm font-semibold text-ink"
            >
              {BOOK.ctaSecondary.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
