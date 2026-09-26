"use client";

import { useState } from "react";
import Link from "next/link";
import { PILLARS, PROGRAMS } from "@/lib/site-config";
import InquiryModal from "@/components/InquiryModal";

export default function Programs() {
  const [inquiryFor, setInquiryFor] = useState<string | null>(null);

  return (
    <main className="mx-auto max-w-[1080px] px-5 pb-24 pt-8">
      <div className="mb-5 border-b border-line pb-3">
        <h1 className="font-display text-2xl text-ink">Milestone-Based Engagements</h1>
      </div>
      <p className="mb-6 max-w-[62ch] text-sm leading-relaxed text-ink-soft">
        Every venture requires a distinct technical architecture and
        go-to-market pipeline. We scope by milestone deliverables — not
        unpredictable billable hours.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        {PILLARS.map((pillar) => {
          const item = PROGRAMS.find((i) => i.pillar === pillar.key);
          if (!item) return null;
          return (
            <div key={pillar.key} className="glow-card flex flex-col rounded-md border border-line bg-surface p-5 backdrop-blur-md">
              <h2 className="mb-2 font-display text-lg text-ink">{item.title}</h2>
              <p className="text-[13px] leading-relaxed text-ink-soft">
                {item.overview}
              </p>

              <div className="mt-4 text-[11px] font-semibold uppercase tracking-wide text-ink-soft">
                What you leave with
              </div>
              <ul className="mt-2 flex flex-col gap-1.5">
                {item.deliverables.map((d) => (
                  <li
                    key={d}
                    className="flex items-start gap-1.5 text-[13px] text-ink-soft"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brass" />
                    {d}
                  </li>
                ))}
              </ul>

              <div className="mt-4 text-[11px] font-semibold uppercase tracking-wide text-ink-soft">
                Topics we cover
              </div>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {item.topics.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-line px-2.5 py-1 text-[11px] text-ink-soft"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setInquiryFor(item.title)}
                className="mt-5 rounded border border-line px-3 py-2 text-[13px] font-semibold text-ink hover:border-pine"
              >
                Book a Free Session
              </button>
            </div>
          );
        })}
      </div>

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

      {inquiryFor && (
        <InquiryModal
          programTitle={inquiryFor}
          onClose={() => setInquiryFor(null)}
        />
      )}
    </main>
  );
}
