"use client";

import { useState } from "react";

export default function InquiryModal({
  programTitle,
  onClose,
}: {
  programTitle: string;
  onClose: () => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    // TODO: wire to a real endpoint (email service or database) once ready
    setSent(true);
  };

  const inputClass =
    "rounded border border-line bg-bg px-3 py-2.5 text-sm text-ink";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative w-full max-w-[420px] rounded-md border border-line bg-surface p-6 backdrop-blur-md">
        <div className="mb-4 flex items-start justify-between">
          <div>
            <div className="text-xs text-ink-soft">Book a free session</div>
            <h2 className="font-display text-lg text-ink">{programTitle}</h2>
          </div>
          <button onClick={onClose} aria-label="Close" className="text-ink">✕</button>
        </div>

        {sent ? (
          <div className="rounded border border-line bg-bg p-4 text-sm text-ink-soft">
            Thanks — this is a demo form, but this is where the booking
            request would be sent. We&rsquo;ll follow up by email.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-1">
            <label className="mt-2 text-xs font-semibold text-ink-soft">Name</label>
            <input
              className={inputClass}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label className="mt-2 text-xs font-semibold text-ink-soft">Email</label>
            <input
              type="email"
              className={inputClass}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label className="mt-2 text-xs font-semibold text-ink-soft">
              Anything to share before the session?
            </label>
            <textarea
              className={inputClass + " min-h-[90px]"}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              type="submit"
              className="mt-4 rounded bg-pine-deep px-5 py-2.5 text-sm font-semibold text-[#F4F2EA]"
            >
              Book session
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
