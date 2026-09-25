"use client";

import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !msg) return;
    // TODO: wire up to a real email/form service (e.g. Resend, Formspree)
    setSent(true);
  };

  return (
    <main className="mx-auto max-w-[1080px] px-5 pb-24 pt-8">
      <div className="mb-5 border-b border-line pb-3">
        <h1 className="font-display text-2xl">Contact</h1>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-1">
            <label className="mt-3 text-xs font-semibold text-ink-soft">Name</label>
            <input
              className="rounded border border-line bg-surface px-3 py-2.5 text-sm"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label className="mt-3 text-xs font-semibold text-ink-soft">Email</label>
            <input
              type="email"
              className="rounded border border-line bg-surface px-3 py-2.5 text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label className="mt-3 text-xs font-semibold text-ink-soft">Message</label>
            <textarea
              className="min-h-[110px] rounded border border-line bg-surface px-3 py-2.5 text-sm"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              required
            />
            <button
              type="submit"
              className="mt-4 rounded bg-pine-deep px-5 py-3 text-sm font-semibold text-[#F4F2EA]"
            >
              Send message
            </button>
          </form>
          {sent && (
            <div className="mt-3 rounded border border-line bg-bg p-3.5 text-[13px]">
              Thanks — this form isn&rsquo;t wired to send yet, but this is
              where your message would go.
            </div>
          )}
        </div>
        <div className="h-fit rounded-md border border-line bg-surface p-5 text-sm leading-[2] text-ink-soft">
          <div>
            <b className="text-ink">Email</b>
            <br />
            hello@example.com
          </div>
          <br />
          <div>
            <b className="text-ink">Based in</b>
            <br />
            GCC region
          </div>
          <br />
          <div>
            <b className="text-ink">Languages</b>
            <br />
            Arabic · English · Spanish
          </div>
        </div>
      </div>
    </main>
  );
}
