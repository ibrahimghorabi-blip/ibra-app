// lib/site-config.ts
// Single source of truth for site copy, nav, and structured content.
// Edit values here — component files should not need to change for content updates.

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
  { label: "Contact", href: "/contact" },
];

export const ANNOUNCEMENT = {
  enabled: true,
  badge: "Announcement",
  text: "New: \"The Opportunities Engine\" Playbook is live",
  link: "/products",
};

export const HERO = {
  eyebrow: "10+ YEARS IN TECH ARCHITECTURE, SALES & STRATEGIC BD",
  headline: "We're shaping the way business is done.",
  subhead:
    "Technical structure, business development consultation, media & marketing, and branding — equipping you with the tools and data to upgrade your business.",
  primaryCta: { label: "Explore what we do", href: "/programs" },
  secondaryCta: { label: "Who we help", href: "/#who-we-help" },
};

export const DIAGNOSTIC = {
  title: "Quick Venture Diagnostic",
  blurb: "Two questions, one direction to start from.",
  audiences: [
    "Startup",
    "Business owner restructuring",
    "Student",
    "Owner or employee",
  ],
  bottlenecks: [
    "Technical structure",
    "Business development",
    "Media, marketing & branding",
    "Not sure yet",
  ],
  recommendations: {
    "Technical structure": {
      text: "Start with a Technical Structure consultation — a focused session to assess the foundation before committing to a build.",
      href: "/programs",
    },
    "Business development": {
      text: "Start with a Business Development consultation — one session on the specific partnership or go-to-market question.",
      href: "/programs",
    },
    "Media, marketing & branding": {
      text: "Start with a Marketing Advisory or Branding consultation, depending on whether the gap is visibility or identity.",
      href: "/programs",
    },
    "Not sure yet": {
      text: "Share what you're working on directly — that's the fastest way to get pointed at the right starting point.",
      href: "/opportunities",
    },
  } as Record<string, { text: string; href: string }>,
};

// Not currently rendered on the homepage — kept here for a future
// dedicated book page or Products page feature.
export const BOOK = {
  id: "book",
  title: "The Opportunities Engine",
  subtitle:
    "The playbook translating 10+ years of tech and commercial deal-making into step-by-step frameworks.",
  description:
    "Not theory — a working system for finding, evaluating, and acting on the opportunities already in front of a business, built from real deals across tech, sales, and strategic BD.",
  highlights: [
    "Real case teardowns",
    "Tactical execution blueprints",
    "Direct entry points to advisory sprints",
  ],
  ctaPrimary: { label: "Download Free Preview", href: "/products" },
  ctaSecondary: { label: "Request Full Copy", href: "/opportunities" },
};

export const WHO_WE_HELP = [
  { title: "Startups", blurb: "Early-stage teams building the structure to move fast without breaking things." },
  { title: "Business owners restructuring", blurb: "Owners reworking a business model, offer, or operating structure." },
  { title: "Students", blurb: "Building real-world knowledge in business, tech, or strategy." },
  { title: "Owners & employees", blurb: "Anyone seeking consultation on a specific market or business topic." },
];

export type ProgramItem = {
  pillar: "technical" | "bizdev" | "marketing";
  category: string;
  title: string;
  overview: string;
  deliverables: string[];
  duration: string;
  availability: string;
};

export const PILLARS = [
  {
    key: "technical" as const,
    title: "Technical Structure",
    blurb: "The systems, stack, and workflows a business runs on — set up right.",
  },
  {
    key: "bizdev" as const,
    title: "Business Development Consultation",
    blurb: "Go-to-market and partnership work — from a full accelerator track to a single advisory session.",
  },
  {
    key: "marketing" as const,
    title: "Media, Marketing & Branding",
    blurb: "Content, channels, campaign foundations, and brand identity — the story and the look that carries it.",
  },
];

export const PROGRAMS: ProgramItem[] = [
  {
    pillar: "technical",
    category: "Technical Structure",
    title: "Technical Foundation Build",
    overview: "Setting up the core technical structure — stack, systems, and workflows — a business runs on.",
    deliverables: ["Stack & systems audit", "Workflow architecture", "Implementation roadmap"],
    duration: "3–4 weeks",
    availability: "Intake Open",
  },
  {
    pillar: "technical",
    category: "Technical Structure",
    title: "Technical Structure Consultation",
    overview: "A focused session to assess and plan your technical foundation.",
    deliverables: ["90-minute working session", "Written recommendation summary"],
    duration: "1 session",
    availability: "2 Slots Left",
  },
  {
    pillar: "bizdev",
    category: "Business Development",
    title: "Business Development Accelerator",
    overview: "A structured track for building partnerships and a go-to-market plan.",
    deliverables: ["Partnership target list", "GTM plan", "Weekly working sessions"],
    duration: "6 weeks",
    availability: "Active Sprint",
  },
  {
    pillar: "bizdev",
    category: "Business Development",
    title: "Business Development Consultation",
    overview: "A direct session on one specific business development challenge.",
    deliverables: ["90-minute working session", "Action plan"],
    duration: "1 session",
    availability: "Intake Open",
  },
  {
    pillar: "marketing",
    category: "Media & Marketing",
    title: "Media & Marketing Launch Package",
    overview: "A structured media and marketing setup — content, channels, and campaign foundations.",
    deliverables: ["Channel strategy", "Content foundations", "Campaign launch plan"],
    duration: "4 weeks",
    availability: "Intake Open",
  },
  {
    pillar: "marketing",
    category: "Media & Marketing",
    title: "Marketing Advisory Session",
    overview: "A direct session on marketing strategy or channel planning.",
    deliverables: ["90-minute working session", "Channel recommendation"],
    duration: "1 session",
    availability: "2 Slots Left",
  },
  {
    pillar: "marketing",
    category: "Branding",
    title: "Brand Identity Package",
    overview: "Full brand identity development — positioning, voice, and visual direction.",
    deliverables: ["Positioning statement", "Voice guide", "Visual direction"],
    duration: "3–5 weeks",
    availability: "Intake Open",
  },
  {
    pillar: "marketing",
    category: "Branding",
    title: "Branding Consultation",
    overview: "A focused session on brand positioning or visual direction.",
    deliverables: ["90-minute working session", "Direction summary"],
    duration: "1 session",
    availability: "Active Sprint",
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

export function fmt(n: number) {
  return "AED " + n.toLocaleString();
}
