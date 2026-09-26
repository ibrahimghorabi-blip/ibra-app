"use client";

import { useEffect, useState } from "react";
import { AUDIENCES, NEEDS } from "@/lib/site-config";

type Opportunity = { name: string; audience: string; need: string; when: string };

const SEED: Opportunity[] = [
  {
    name: "Ibra Team",
    audience: "Hiring",
    need: "We are hiring | Remote job | Sales Consultant. Competitive package. Apply by sending your CV to: example@example.com.",
    when: "Posted by us",
  },
  { name: "Ali R.", audience: "Startup", need: "SaaS company seeking a distribution partner across the GCC.", when: "Posted earlier" },
  { name: "Sara K.", audience: "Business owner restructuring", need: "Startup looking for a growth advisor ahead of a Series A raise.", when: "Posted earlier" },
];

const STORAGE_KEY = "ibra-opportunities-v2";

export default function Opportunities() {
  const [list, setList] = useState<Opportunity[]>(SEED);

  const [audience, setAudience] = useState("");
  const [need, setNeed] = useState("");
  const [haveNeed, setHaveNeed] = useState("");
  const [experience, setExperience] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [website, setWebsite] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setList(JSON.parse(raw));
    } catch {
      // fall back to seed data
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!audience || !need || !haveNeed || !name || !email) return;
    const next = [{ name, audience, need: haveNeed, when: "Just now" }, ...list];
    setList(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // this browser won't persist it — fine, still shows for this session
    }
    setSubmitted(true);
    setAudience("");
    setNeed("");
    setHaveNeed("");
    setExperience("");
    setName("");
    setEmail("");
    setPhone("");
    setAge("");
    setWebsite("");
  };

  const inputClass =
    "rounded border border-line bg-surface px-3 py-2.5 text-sm";
  const labelClass = "mt-3 text-xs font-semibold text-ink-soft";

  return (
    <main className="mx-auto max-w-[1080px] px-5 pb-24 pt-8">
      <div className="mb-5 flex flex-col gap-1 border-b border-line pb-3 sm:flex-row sm:items-baseline sm:justify-between">
        <h1 className="font-display text-2xl">Opportunities</h1>
        <span className="text-[13px] text-ink-soft">Tell us what you need</span>
      </div>
      <p className="mb-6 max-w-[60ch] text-sm leading-relaxed text-ink-soft">
        A couple of quick questions, then your details — we&rsquo;ll follow
        up directly. This space also carries opportunities we&rsquo;re
        sharing directly, like open roles.
      </p>

      <div className="grid gap-7 md:grid-cols-[1fr_1fr]">
        <div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-1">
            <label className={labelClass}>Who are you?</label>
            <select
              className={inputClass}
              value={audience}
              onChange={(e) => setAudience(e.target.value)}
              required
            >
              <option value="">Select one</option>
              {AUDIENCES.map((a) => (
                <option key={a} value={a}>{a}</option>
              ))}
            </select>

            <label className={labelClass}>What do you need?</label>
            <select
              className={inputClass}
              value={need}
              onChange={(e) => setNeed(e.target.value)}
              required
            >
              <option value="">Select one</option>
              {NEEDS.map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>

            <label className={labelClass}>What do you have, and what do you need?</label>
            <textarea
              className={inputClass + " min-h-[90px]"}
              value={haveNeed}
              onChange={(e) => setHaveNeed(e.target.value)}
              placeholder="e.g. We have an early product and a small team — we need a go-to-market plan and warm partner intros."
              required
            />

            <label className={labelClass}>Previous experience</label>
            <textarea
              className={inputClass + " min-h-[80px]"}
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              placeholder="Anything relevant you've already tried or built"
            />

            <label className={labelClass}>Name</label>
            <input className={inputClass} value={name} onChange={(e) => setName(e.target.value)} required />

            <label className={labelClass}>Email</label>
            <input type="email" className={inputClass} value={email} onChange={(e) => setEmail(e.target.value)} required />

            <label className={labelClass}>Phone number</label>
            <input type="tel" className={inputClass} value={phone} onChange={(e) => setPhone(e.target.value)} />

            <label className={labelClass}>Age</label>
            <input type="number" className={inputClass} value={age} onChange={(e) => setAge(e.target.value)} />

            <label className={labelClass}>Website</label>
            <input type="text" className={inputClass} value={website} onChange={(e) => setWebsite(e.target.value)} placeholder="Optional" />

            <button
              type="submit"
              className="mt-4 rounded bg-pine-deep px-5 py-3 text-sm font-semibold text-[#F4F2EA]"
            >
              Submit
            </button>
          </form>
          {submitted && (
            <div className="mt-3 rounded border border-line bg-bg p-3.5 text-[13px]">
              Thanks — your opportunity has been added, and we&rsquo;ll
              follow up by email or phone.
            </div>
          )}
        </div>

        <div className="flex flex-col gap-3">
          {list.map((o, i) => (
            <div key={i} className="rounded-md border border-line bg-surface p-4">
              <div className="mb-1 flex items-center justify-between gap-2">
                <span className="text-sm font-bold">{o.name}</span>
                <span className="rounded-full border border-line px-2 py-0.5 text-[10px] font-semibold uppercase text-ink-soft">
                  {o.audience}
                </span>
              </div>
              <div className="mb-1.5 text-[11px] text-ink-soft">{o.when}</div>
              <div className="text-[13px] leading-relaxed text-ink-soft">
                {o.need}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
