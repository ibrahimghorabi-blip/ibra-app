import Link from "next/link";
import { BOOK } from "@/lib/site-config";

export default function BookSection() {
  return (
    <section id={BOOK.id} className="mt-14 rounded-md border border-line bg-surface p-7 md:p-9">
      <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div>
          <span className="mb-3 inline-block rounded-full border border-line px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-pine-deep">
            The Book
          </span>
          <h2 className="font-display text-2xl leading-snug md:text-3xl">
            {BOOK.title}
          </h2>
          <p className="mt-2 text-[15px] font-medium text-ink-soft">{BOOK.subtitle}</p>
          <p className="mt-4 max-w-[55ch] text-sm leading-relaxed text-ink-soft">
            {BOOK.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={BOOK.ctaPrimary.href}
              className="rounded bg-pine-deep px-5 py-3 text-sm font-semibold text-[#F4F2EA]"
            >
              {BOOK.ctaPrimary.label}
            </Link>
            <Link
              href={BOOK.ctaSecondary.href}
              className="rounded border border-ink px-5 py-3 text-sm font-semibold"
            >
              {BOOK.ctaSecondary.label}
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          {BOOK.highlights.map((h) => (
            <div
              key={h}
              className="rounded border border-line bg-bg px-4 py-3 text-sm font-medium"
            >
              {h}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
