"use client";

import { useState } from "react";
import Link from "next/link";
import { PILLARS, PROGRAMS } from "@/lib/site-config";
import InquiryModal from "@/components/InquiryModal";

function availabilityStyle(status: string) {
  if (status === "Active Sprint") return "border-pine-deep text-pine-deep";
  if (status.includes("Slots")) return "border-brass text-brass";
  return "border-line text-ink-soft";
}

export default function Programs() {
  const [inquiryFor, setInquiryFor] = useState<string | null>(null);

  return (
    <main className="mx-auto max-w-[1080px] px-5 pb-24 pt-8">
      <div className="mb-5 flex items-baseline justify-between border-b border-line pb-3">
        <h1 className="font-display text-2xl">Programs</h1>
        <span className="text-[13px] text-ink-soft">
          Technical · Business dev · Media, Marketing &amp; Branding
        </span>
      </div>
      <p className="mb-6 max-w-[60ch] text-sm leading-relaxed text-ink-soft">
        A look at what&rsquo;s offered in each area. No cart, no pricing here
        — request a scope and we&rsquo;ll follow up directly.
      </p>

      {PILLARS.map((pillar) => {
        const items = PROGRAMS.filter((i) => i.pillar === pillar.key);
        return (
          <div key={pillar.key} className="mt-10">
            <h2 className="mb-3 font-display text-lg">{pillar.title}</h2>
            <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
              {items.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col rounded-md border border-line bg-surface p-4"
                >
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <span className="text-[11px] font-semibold uppercase tracking-wide text-ink-soft">
                      {item.category}
                    </span>
                    <span
                      className={
                        "rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase " +
                        availabilityStyle(item.availability)
                      }
                    >
                      {item.availability}
                    </span>
                  </div>
                  <h3 className="text-base">{item.title}</h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-ink-soft">
                    {item.overview}
                  </p>
                  <ul className="mt-3 flex flex-col gap-1">
                    {item.deliverables.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-1.5 text-[12px] text-ink-soft"
                      >
                        <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-brass" />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 text-[12px] text-ink-soft">
                    Duration: {item.duration}
                  </div>
                  <button
                    onClick={() => setInquiryFor(item.title)}
                    className="mt-4 rounded border border-ink px-3 py-2 text-[13px] font-semibold"
                  >
                    Request Scope / Inquire
                  </button>
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

      {inquiryFor && (
        <InquiryModal
          programTitle={inquiryFor}
          onClose={() => setInquiryFor(null)}
        />
      )}
    </main>
  );
}
