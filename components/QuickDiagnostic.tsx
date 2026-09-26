"use client";

import Link from "next/link";
import { useState } from "react";
import { DIAGNOSTIC } from "@/lib/site-config";

export default function QuickDiagnostic() {
  const [audience, setAudience] = useState("");
  const [bottleneck, setBottleneck] = useState("");
  const [result, setResult] = useState<{ text: string; href: string } | null>(null);

  const handleAssess = () => {
    if (!bottleneck) return;
    setResult(DIAGNOSTIC.recommendations[bottleneck] ?? null);
  };

  return (
    <div className="flex aspect-[4/3] flex-col justify-between rounded-md bg-gradient-to-br from-pine to-pine-deep p-6 text-[#F4F2EA]">
      <div>
        <h2 className="font-display text-xl">{DIAGNOSTIC.title}</h2>
        <p className="mt-1 text-[13px] text-[#F4F2EA]/80">{DIAGNOSTIC.blurb}</p>
      </div>

      {result ? (
        <div className="flex flex-col gap-3">
          <p className="text-sm leading-relaxed">{result.text}</p>
          <div className="flex gap-2">
            <Link
              href={result.href}
              className="rounded bg-[#F4F2EA] px-4 py-2 text-sm font-semibold text-pine-deep"
            >
              Continue
            </Link>
            <button
              onClick={() => {
                setResult(null);
                setAudience("");
                setBottleneck("");
              }}
              className="rounded border border-[#F4F2EA]/40 px-4 py-2 text-sm"
            >
              Start over
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          <div>
            <label className="mb-1 block text-xs text-[#F4F2EA]/70">I am a...</label>
            <select
              value={audience}
              onChange={(e) => setAudience(e.target.value)}
              className="w-full rounded border border-[#F4F2EA]/30 bg-white/10 px-3 py-2 text-sm text-[#F4F2EA]"
            >
              <option value="" className="text-ink">Select audience</option>
              {DIAGNOSTIC.audiences.map((a) => (
                <option key={a} value={a} className="text-ink">{a}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="mb-1 block text-xs text-[#F4F2EA]/70">Biggest bottleneck right now</label>
            <select
              value={bottleneck}
              onChange={(e) => setBottleneck(e.target.value)}
              className="w-full rounded border border-[#F4F2EA]/30 bg-white/10 px-3 py-2 text-sm text-[#F4F2EA]"
            >
              <option value="" className="text-ink">Select bottleneck</option>
              {DIAGNOSTIC.bottlenecks.map((b) => (
                <option key={b} value={b} className="text-ink">{b}</option>
              ))}
            </select>
          </div>
          <button
            onClick={handleAssess}
            disabled={!bottleneck}
            className="mt-1 rounded bg-[#F4F2EA] px-4 py-2.5 text-sm font-semibold text-pine-deep disabled:opacity-40"
          >
            Get Assessment
          </button>
        </div>
      )}
    </div>
  );
}
