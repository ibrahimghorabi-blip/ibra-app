import Link from "next/link";
import { DIAGNOSTIC_PROMO } from "@/lib/site-config";

export default function DiagnosticPromo() {
  return (
    <div className="flex aspect-[4/3] flex-col justify-between rounded-md bg-gradient-to-br from-pine to-pine-deep p-6 text-[#F4F2EA]">
      <div>
        <h2 className="font-display text-xl">{DIAGNOSTIC_PROMO.title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-[#F4F2EA]/80">
          {DIAGNOSTIC_PROMO.blurb}
        </p>
      </div>
      <Link
        href={DIAGNOSTIC_PROMO.href}
        className="inline-block w-fit rounded bg-[#F4F2EA] px-5 py-3 text-sm font-semibold text-pine-deep"
      >
        {DIAGNOSTIC_PROMO.ctaLabel}
      </Link>
    </div>
  );
}
