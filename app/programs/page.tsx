"use client";

import { useState } from "react";
import Link from "next/link";
import { PILLARS, PROGRAMS } from "@/lib/site-config";
import InquiryModal from "@/components/InquiryModal";

export default function Programs() {
  const [inquiryFor, setInquiryFor] = useState<string | null>(null);

  return (
    <main className="mx-auto max-w-[1080px] px-5 pb-24 pt-8">
      <div className="mb-5 flex flex-col gap-1 border-b border-line pb-3 sm:flex-row sm:items-baseline sm:justify-between">
        <h1 className="font-display text-2xl text-ink">Programs</h1>
        <span className="text-[13px] text-ink-soft">
          Technical · Business dev · Media, Marketing &amp; Branding
        </span>
      </div>
      <p className="mb-6 max-w-[60ch] text-sm leading-relaxed text-ink-soft">
        A look at what&rsquo;s offered in each area right now. No cart, no
        pricing here — request a scope and we&rsquo;ll follow up directly.
      </p>

      {PILLARS.map((pillar) => {
        const item = PROGRAMS.find((i) => i.pillar === pillar.key);
        if (!item) return null;
        return (
          <div key={pillar.key} className="mt-10">
            <h2 className="mb-3 font-display text-lg text-ink">{pillar.title}</h2>
            <div className="glow-card max-w-[520px] rounded-md border border-line bg-surface p-5 backdrop-blur-md">
              <p className="text-[13px] leading-relaxed text-ink-soft">
                {item.overview}
              </p>
              <ul className="mt-3 flex flex-col gap-1.5">
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
              <button
                onClick={() => setInquiryFor(item.title)}
                className="mt-4 rounded border border-line px-3 py-2 text-[13px] font-semibold text-ink hover:border-pine"
              >
                Request Scope / Inquire
              </button>
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

      {inquiryFor && (
        <InquiryModal
          programTitle={inquiryFor}
          onClose={() => setInquiryFor(null)}
        />
      )}
    </main>
  );
}
