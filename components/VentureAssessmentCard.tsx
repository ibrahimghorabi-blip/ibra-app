import Link from "next/link";
import { VENTURE_ASSESSMENT } from "@/lib/site-config";

export default function VentureAssessmentCard() {
  return (
    <div className="glow-card flex flex-col justify-center gap-5 rounded-md border border-line bg-surface p-8 backdrop-blur-md">
      <div>
        <h2 className="font-display text-xl text-ink">{VENTURE_ASSESSMENT.title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">
          {VENTURE_ASSESSMENT.blurb}
        </p>
      </div>
      <Link
        href={VENTURE_ASSESSMENT.href}
        className="w-full rounded bg-pine-deep px-5 py-3 text-center text-sm font-semibold text-[#F4F2EA]"
      >
        {VENTURE_ASSESSMENT.ctaLabel}
      </Link>
    </div>
  );
}
