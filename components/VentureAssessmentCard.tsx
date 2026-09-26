import Link from "next/link";
import { HOW_WE_START } from "@/lib/site-config";

export default function VentureAssessmentCard() {
  return (
    <div className="glow-card flex flex-col justify-between gap-6 rounded-md border border-line bg-surface p-8 backdrop-blur-md">
      <div>
        <h2 className="font-display text-xl text-ink">{HOW_WE_START.title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">
          {HOW_WE_START.blurb}
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {HOW_WE_START.steps.map((s) => (
          <div key={s.n} className="flex items-start gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-pine text-[12px] font-bold text-pine">
              {s.n}
            </span>
            <p className="text-[13px] leading-relaxed text-ink-soft">{s.text}</p>
          </div>
        ))}
      </div>

      <Link
        href={HOW_WE_START.href}
        className="w-full rounded bg-pine-deep px-5 py-3 text-center text-sm font-semibold text-[#F4F2EA]"
      >
        {HOW_WE_START.ctaLabel}
      </Link>
    </div>
  );
}
