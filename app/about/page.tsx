export default function About() {
  const tags = [
    "Coaching",
    "Business development",
    "Technology services",
    "Corporate development",
    "Strategic sourcing",
  ];

  return (
    <main className="mx-auto max-w-[1080px] px-5 pb-24 pt-8">
      <div className="mb-5 border-b border-line pb-3">
        <h1 className="font-display text-2xl">About</h1>
      </div>
      <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr]">
        <div className="flex aspect-square items-center justify-center rounded-md bg-gradient-to-br from-pine to-pine-deep">
          <span className="font-display text-5xl text-[#F4F2EA]">I</span>
        </div>
        <div>
          <p className="mb-3.5 text-[15px] leading-relaxed text-ink-soft">
            <em>We&rsquo;re shaping the way business is done.</em> I&rsquo;m
            Ibra — 10+ years across tech, sales, and strategic business
            development, working across the GCC, EMEA, Europe, and China on
            business development, SaaS and tech market-entry partnerships,
            SME advisory, and corporate development.
          </p>
          <p className="mb-3.5 text-[15px] leading-relaxed text-ink-soft">
            Before this, I built a background across fitness solutions
            sales, mobile communications, running my own apparel business,
            strategic sourcing, and marketing and brand strategy — which is
            where a lot of the practical, cross-industry grounding behind
            these programs comes from.
          </p>
          <p className="mb-3.5 text-[15px] leading-relaxed text-ink-soft">
            I work in Arabic and English, with intermediate Spanish.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-line px-3 py-1.5 text-xs text-ink-soft"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
