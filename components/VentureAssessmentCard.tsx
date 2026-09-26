"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { VENTURE_ASSESSMENT } from "@/lib/site-config";

export default function VentureAssessmentCard() {
  const [segment, setSegment] = useState<string | null>(null);
  const router = useRouter();

  const handleRun = () => {
    const query = segment ? `?segment=${encodeURIComponent(segment)}` : "";
    router.push(`${VENTURE_ASSESSMENT.href}${query}`);
  };

  return (
    <div className="glow-card flex aspect-[4/3] flex-col justify-between rounded-md border border-line bg-surface p-6 backdrop-blur-md">
      <div>
        <h2 className="font-display text-xl text-ink">{VENTURE_ASSESSMENT.title}</h2>
        <p className="mt-1 text-[13px] text-ink-soft">{VENTURE_ASSESSMENT.blurb}</p>
      </div>

      <div>
        <div className="mb-4 flex flex-wrap gap-2">
          {VENTURE_ASSESSMENT.segments.map((s) => (
            <button
              key={s}
              onClick={() => setSegment(s)}
              className={
                "rounded-full border px-3.5 py-1.5 text-[13px] font-medium transition-colors " +
                (segment === s
                  ? "border-pine bg-pine/15 text-pine"
                  : "border-line text-ink-soft hover:text-ink")
              }
            >
              {s}
            </button>
          ))}
        </div>
        <button
          onClick={handleRun}
          className="w-full rounded bg-pine-deep px-5 py-3 text-sm font-semibold text-[#F4F2EA]"
        >
          {VENTURE_ASSESSMENT.ctaLabel}
        </button>
      </div>
    </div>
  );
}
