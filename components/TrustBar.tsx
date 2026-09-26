import { TRUST_METRICS } from "@/lib/site-config";

export default function TrustBar() {
  return (
    <div className="mt-8 grid grid-cols-1 gap-4 border-t border-line pt-6 sm:grid-cols-3">
      {TRUST_METRICS.map((m) => (
        <div key={m.label}>
          <div className="font-display text-lg text-ink">{m.value}</div>
          <div className="text-[12px] uppercase tracking-wide text-ink-soft">
            {m.label}
          </div>
        </div>
      ))}
    </div>
  );
}
