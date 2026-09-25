import Link from "next/link";
import { PILLARS, PROGRAM_ITEMS, fmt } from "@/lib/data";

export default function Programs() {
  return (
    <main className="mx-auto max-w-[1080px] px-5 pb-24 pt-8">
      <div className="mb-5 flex items-baseline justify-between border-b border-line pb-3">
        <h1 className="font-display text-2xl">Programs</h1>
        <span className="text-[13px] text-ink-soft">
          Technical · Business dev · Marketing · Branding
        </span>
      </div>
      <p className="mb-6 max-w-[60ch] text-sm leading-relaxed text-ink-soft">
        A look at what&rsquo;s offered in each area. These aren&rsquo;t added
        to a cart — tell us what you need and we&rsquo;ll follow up directly.
      </p>

      {PILLARS.map((pillar) => {
        const items = PROGRAM_ITEMS.filter((i) => i.pillar === pillar.key);
        return (
          <div key={pillar.key} className="mt-10">
            <div className="mb-3 flex items-baseline gap-2">
              <h2 className="font-display text-lg">{pillar.title}</h2>
              <span className="rounded-full border border-line px-2.5 py-0.5 text-xs text-ink-soft">
                Program + Consultation
              </span>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {items.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col rounded-md border border-line bg-surface p-4"
                >
                  <span className="mb-2 w-fit rounded-full border border-line px-2 py-0.5 text-[10px] font-bold uppercase text-pine-deep">
                    {item.tag}
                  </span>
                  <h3 className="text-base">{item.name}</h3>
                  <p className="mt-1 flex-1 text-[13px] leading-relaxed text-ink-soft">
                    {item.desc}
                  </p>
                  <div className="mt-3 text-sm font-bold">{fmt(item.price)}</div>
                </div>
              ))}
            </div>
          </div>
        );
      })}

      <div className="mt-12 rounded-md border border-dashed border-line p-6 text-center">
        <p className="mb-3 text-sm text-ink-soft">
          Don&rsquo;t see the exact fit? Tell us what you&rsquo;re working on
          and we&rsquo;ll follow up.
        </p>
        <Link
          href="/opportunities"
          className="inline-block rounded bg-pine-deep px-5 py-3 text-sm font-semibold text-[#F4F2EA]"
        >
          Share what you need
        </Link>
      </div>
    </main>
  );
}
