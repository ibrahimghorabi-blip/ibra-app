"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { AUDIENCES, NEEDS, OPPORTUNITY_ANNOUNCEMENTS } from "@/lib/site-config";

type FormState = {
  audience: string;
  need: string;
  haveNeed: string;
  experience: string;
  name: string;
  email: string;
  phone: string;
  age: string;
  website: string;
};

const EMPTY: FormState = {
  audience: "",
  need: "",
  haveNeed: "",
  experience: "",
  name: "",
  email: "",
  phone: "",
  age: "",
  website: "",
};

const TOTAL_STEPS = 5;

function OpportunitiesContent() {
  const searchParams = useSearchParams();
  const segment = searchParams.get("segment");

  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>({
    ...EMPTY,
    audience: segment === "Startup" ? "Startup" : "",
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (patch: Partial<FormState>) => setForm((f) => ({ ...f, ...patch }));

  const canAdvance = () => {
    if (step === 0) return !!form.audience;
    if (step === 1) return !!form.need;
    if (step === 2) return !!form.haveNeed.trim();
    if (step === 3) return true; // experience is optional
    return true;
  };

  const handleSubmit = () => {
    if (!form.name || !form.email) return;
    // Demo only — this does not post to the public list below, which is
    // curated separately. Wire this to an email/database endpoint when ready.
    setSubmitted(true);
  };

  const inputClass =
    "w-full rounded border border-line bg-surface px-3 py-2.5 text-sm text-ink backdrop-blur-md";
  const labelClass = "mb-2 block text-sm font-semibold text-ink-soft";

  return (
    <main className="mx-auto max-w-[1080px] px-5 pb-24 pt-8">
      <div className="mb-5 flex flex-col gap-1 border-b border-line pb-3 sm:flex-row sm:items-baseline sm:justify-between">
        <h1 className="font-display text-2xl text-ink">Opportunities</h1>
              <p className="mb-8 max-w-[60ch] text-sm leading-relaxed text-ink-soft">
        A few quick questions, then your details — we&rsquo;ll follow up
        directly.
      </p>

      <div className="grid gap-10 md:grid-cols-[1fr_0.9fr]">
        {/* Wizard */}
        <div className="glow-card rounded-md border border-line bg-surface p-6 backdrop-blur-md">
          {submitted ? (
            <div className="flex flex-col items-center py-10 text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-pine-deep text-xl text-white">
                ✓
              </div>
              <h2 className="font-display text-xl text-ink">Thank you.</h2>
              <p className="mt-2 max-w-[40ch] text-sm text-ink-soft">
                We&rsquo;ve got what you shared — we&rsquo;ll follow up by
                email or phone.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-6 flex gap-1.5">
                {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
                  <div
                    key={i}
                    className={
                      "h-1 flex-1 rounded-full " +
                      (i <= step ? "bg-pine" : "bg-line")
                    }
                  />
                ))}
              </div>

              {step === 0 && (
                <div>
                  <label className={labelClass}>Who are you?</label>
                  <div className="flex flex-col gap-2">
                    {AUDIENCES.map((a) => (
                      <button
                        key={a}
                        onClick={() => update({ audience: a })}
                        className={
                          "rounded border px-3.5 py-2.5 text-left text-sm transition-colors " +
                          (form.audience === a
                            ? "border-pine bg-pine/10 text-ink"
                            : "border-line text-ink-soft hover:text-ink")
                        }
                      >
                        {a}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 1 && (
                <div>
                  <label className={labelClass}>What do you need?</label>
                  <div className="flex flex-col gap-2">
                    {NEEDS.map((n) => (
                      <button
                        key={n}
                        onClick={() => update({ need: n })}
                        className={
                          "rounded border px-3.5 py-2.5 text-left text-sm transition-colors " +
                          (form.need === n
                            ? "border-pine bg-pine/10 text-ink"
                            : "border-line text-ink-soft hover:text-ink")
                        }
                      >
                        {n}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <label className={labelClass}>
                    What do you have, and what do you need?
                  </label>
                  <textarea
                    className={inputClass + " min-h-[130px]"}
                    value={form.haveNeed}
                    onChange={(e) => update({ haveNeed: e.target.value })}
                    placeholder="e.g. We have an early product and a small team — we need a go-to-market plan and warm partner intros."
                  />
                </div>
              )}

              {step === 3 && (
                <div>
                  <label className={labelClass}>Previous experience</label>
                  <textarea
                    className={inputClass + " min-h-[110px]"}
                    value={form.experience}
                    onChange={(e) => update({ experience: e.target.value })}
                    placeholder="Anything relevant you've already tried or built (optional)"
                  />
                </div>
              )}

              {step === 4 && (
                <div className="flex flex-col gap-3">
                  <label className={labelClass + " mb-0"}>Your details</label>
                  <input
                    className={inputClass}
                    placeholder="Name"
                    value={form.name}
                    onChange={(e) => update({ name: e.target.value })}
                  />
                  <input
                    type="email"
                    className={inputClass}
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) => update({ email: e.target.value })}
                  />
                  <input
                    type="tel"
                    className={inputClass}
                    placeholder="Phone number"
                    value={form.phone}
                    onChange={(e) => update({ phone: e.target.value })}
                  />
                  <input
                    type="number"
                    className={inputClass}
                    placeholder="Age"
                    value={form.age}
                    onChange={(e) => update({ age: e.target.value })}
                  />
                  <input
                    className={inputClass}
                    placeholder="Website (optional)"
                    value={form.website}
                    onChange={(e) => update({ website: e.target.value })}
                  />
                </div>
              )}

              <div className="mt-8 flex justify-between">
                <button
                  onClick={() => setStep((s) => Math.max(0, s - 1))}
                  className={
                    "text-sm text-ink-soft " + (step === 0 ? "invisible" : "")
                  }
                >
                  ← Back
                </button>
                {step < TOTAL_STEPS - 1 ? (
                  <button
                    onClick={() => setStep((s) => s + 1)}
                    disabled={!canAdvance()}
                    className="rounded bg-pine-deep px-5 py-2.5 text-sm font-semibold text-[#F4F2EA] disabled:opacity-40"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={!form.name || !form.email}
                    className="rounded bg-pine-deep px-5 py-2.5 text-sm font-semibold text-[#F4F2EA] disabled:opacity-40"
                  >
                    Submit
                  </button>
                )}
              </div>
            </>
          )}
        </div>

        {/* Admin-curated announcements — not populated by the form above */}
        <div>
          <h2 className="mb-3 font-display text-lg text-ink">Opportunities we&rsquo;re sharing</h2>
          <div className="flex flex-col gap-3">
            {OPPORTUNITY_ANNOUNCEMENTS.map((a, i) => (
              <div
                key={i}
                className="glow-card rounded-md border border-line bg-surface p-4 backdrop-blur-md"
              >
                <div className="mb-1 flex items-center justify-between gap-2">
                  <span className="text-sm font-bold text-ink">{a.title}</span>
                  <span className="rounded-full border border-line px-2 py-0.5 text-[10px] font-semibold uppercase text-pine">
                    {a.tag}
                  </span>
                </div>
                <div className="mb-1.5 text-[11px] text-ink-soft">{a.when}</div>
                <div className="text-[13px] leading-relaxed text-ink-soft">
                  {a.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default function Opportunities() {
  return (
    <Suspense fallback={null}>
      <OpportunitiesContent />
    </Suspense>
  );
}
