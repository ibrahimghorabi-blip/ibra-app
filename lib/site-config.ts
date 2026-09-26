// lib/site-config.ts
// Single source of truth for site copy, nav, and structured content.

export type NavItem = { label: string; href: string };

export const BRAND = {
  name: "Ibra",
  subtitle: "Market & Growth Advisory",
};

export const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/programs" },
  { label: "Products", href: "/products" },
  { label: "Opportunities", href: "/opportunities" },
  { label: "About", href: "/about" },
];

export const ANNOUNCEMENT = {
  enabled: true,
  badge: "Now Live",
  text: "\"Building Your Business Never Been Easier\" — Download Chapter 1",
  linkLabel: "Read Free →",
  link: "/products#book",
};

export const HERO = {
  eyebrow: "10+ YEARS IN TECH ARCHITECTURE, ENTERPRISE SALES & STRATEGIC BD",
  headline: "We build the systems and close the deals that move a business forward.",
  subhead:
    "From your first technical decision to your next commercial deal — the structure, strategy, and story to move with clarity, whatever stage you're at.",
  primaryCta: { label: "Explore what we do", href: "/#what-we-do" },
  secondaryCta: { label: "Who we help", href: "/#who-we-help" },
};

export const TRUST_METRICS = [
  { value: "10+ Years", label: "Enterprise Architecture" },
  { value: "End-to-End", label: "From Strategy to Execution" },
  { value: "Bespoke", label: "Venture Growth & Restructuring" },
];

// The hero's right-column card — no selectors, just a plain-language
// preview of what happens after someone reaches out. Fills the space
// with real information instead of an interactive picker.
export const HOW_WE_START = {
  title: "How we start",
  blurb: "No forms to guess at — here's exactly what happens.",
  steps: [
    { n: "1", text: "You tell us what you need — a couple of quick questions." },
    { n: "2", text: "We match it to the right service and pillar." },
    { n: "3", text: "You get a free session booked, or a clear next step." },
  ],
  ctaLabel: "Get Started",
  href: "/opportunities",
};

// Used on the Opportunities page's slide-by-slide intake form.
export const AUDIENCES = [
  "Startup",
  "Business owner restructuring",
  "Student",
  "Owner",
  "Employee",
];

export const NEEDS = [
  "Technical structure",
  "Business development",
  "Media, marketing & branding",
  "Not sure yet",
];

// 4 distinct commercial tiers covering who we help.
export const WHO_WE_HELP = [
  {
    title: "Early Startups",
    blurb: "Early-stage teams building the structure to move fast without breaking things.",
    bottleneck: "Bottleneck: no technical or commercial foundation yet",
    href: "/opportunities",
  },
  {
    title: "Established Firms",
    blurb: "Owners reworking a business model, offer, or operating structure to keep scaling.",
    bottleneck: "Bottleneck: the current model has stopped scaling",
    href: "/opportunities",
  },
  {
    title: "Emerging Talent & Students",
    blurb: "Building real-world knowledge in business, tech, or strategy.",
    bottleneck: "Bottleneck: theory without applied practice",
    href: "/opportunities",
  },
  {
    title: "Strategic Partners & Execs",
    blurb: "Owners and employees equipped with the tools and exposure to expand their pipeline and execute their strategy.",
    bottleneck: "Bottleneck: results depend on tools and opportunities they don't have yet",
    href: "/opportunities",
  },
];

export type ProgramItem = {
  pillar: "technical" | "bizdev" | "marketing" | "branding";
  title: string;
  overview: string;
  deliverables: string[];
  topics: string[];
  duration: string;
};

// 4 distinct commercial tiers — Technical Structure, Business
// Development, Media & Marketing, and Branding, each standing on its own.
export const PILLARS = [
  {
    key: "technical" as const,
    title: "Technical Structure",
    blurb: "The systems, stack, and workflows a business runs on — set up right.",
  },
  {
    key: "bizdev" as const,
    title: "Business Development",
    blurb: "Go-to-market and partnership work — from a full accelerator track to a single advisory session.",
  },
  {
    key: "marketing" as const,
    title: "Media & Marketing",
    blurb: "Content, channels, and campaign foundations to get your story in front of the right people.",
  },
  {
    key: "branding" as const,
    title: "Branding",
    blurb: "Positioning, voice, and visual identity — built to hold up as the business grows.",
  },
];

// One slot per pillar for now — add more entries (same pillar key) once
// each service area is ready to offer multiple formats.
export const PROGRAMS: ProgramItem[] = [
  {
    pillar: "technical",
    title: "Technical Structure",
    overview: "A working session to find where your technical foundation is costing you time or money — and what to fix first.",
    deliverables: ["Stack & systems audit", "Workflow recommendations", "Implementation roadmap"],
    topics: ["Tool & stack selection", "Workflow automation", "Data & reporting setup", "Team handoff & documentation"],
    duration: "Scoped per engagement",
  },
  {
    pillar: "bizdev",
    title: "Business Development",
    overview: "A working session on your specific partnership, growth, or go-to-market question — leaving with a clear next move.",
    deliverables: ["Partnership & GTM assessment", "Prioritized next-moves list", "Written action plan"],
    topics: ["Partnership structuring", "Market-entry planning", "Sales pipeline design", "Deal negotiation prep"],
    duration: "Scoped per engagement",
  },
  {
    pillar: "marketing",
    title: "Media & Marketing",
    overview: "A working session on the story and channels that get you in front of the right people — strategy, not just ideas.",
    deliverables: ["Positioning & channel audit", "Quick-win opportunities", "Direction & recommendation summary"],
    topics: ["Content strategy", "Channel selection", "Campaign planning", "Messaging & positioning"],
    duration: "Scoped per engagement",
  },
  {
    pillar: "branding",
    title: "Branding",
    overview: "A focused session on how the business looks, sounds, and is remembered — positioning through to visual direction.",
    deliverables: ["Brand positioning review", "Voice & tone direction", "Visual direction notes"],
    topics: ["Naming & positioning", "Visual identity direction", "Brand voice", "Rebrand & repositioning"],
    duration: "Scoped per engagement",
  },
];

export type Product = { id: string; name: string; cat: string; desc: string; price: number };

// Trimmed to a single item for now — add more back here as the catalog grows.
export const PRODUCTS: Product[] = [
  {
    id: "wk1",
    name: "Wellness Kit",
    cat: "Wellness",
    desc: "A structured kit for staying focused and steady while building or restructuring a business.",
    price: 99,
  },
];

export const BOOK = {
  id: "book",
  eyebrow: "The Book",
  headline: "The playbook for building without the guesswork.",
  title: "Building Your Business Never Been Easier",
  description:
    "Part playbook, part coaching companion. This book translates 10+ years of real-world deal-making and system building into a working framework — not theory, but the same structure behind our own programs, written so you can start applying it today and see exactly where a session with us could take it further.",
  highlights: [
    "Real frameworks from real deals — not theory",
    "Step-by-step guidance, like having a coach in the room",
    "A clear path into the right program when you're ready for more",
  ],
  ctaPrimary: { label: "Download Free Chapter 1", href: "/chapter-1.pdf" },
};

// Admin-curated announcements only — NOT populated by visitor form
// submissions. Add/edit entries here directly to post something new.
export type Announcement = { title: string; body: string; tag: string; when: string };

export const OPPORTUNITY_ANNOUNCEMENTS: Announcement[] = [
  {
    tag: "Hiring",
    title: "Remote — Sales Consultant",
    body: "Competitive package. Apply by sending your CV to: example@example.com.",
    when: "Posted by us",
  },
];

export function fmt(n: number) {
  return "AED " + n.toLocaleString();
}
