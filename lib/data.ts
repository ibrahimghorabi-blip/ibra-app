export type ProgramItem = {
  pillar: "technical" | "bizdev" | "marketing" | "branding";
  tag: string;
  name: string;
  cat: string;
  desc: string;
  price: number;
};

export type Product = {
  id: string;
  name: string;
  cat: string;
  desc: string;
  price: number;
};

export const PILLARS = [
  {
    key: "technical",
    title: "Technical Structure",
    blurb:
      "The systems, stack, and workflows a business runs on — set up right.",
  },
  {
    key: "bizdev",
    title: "Business Development Consultation",
    blurb:
      "Go-to-market and partnership work — from a full accelerator track to a single advisory session.",
  },
  {
    key: "marketing",
    title: "Media & Marketing Services",
    blurb:
      "Content, channels, and campaign foundations to get your story in front of the right people.",
  },
  {
    key: "branding",
    title: "Branding",
    blurb: "Positioning, voice, and visual identity — built to hold up as the business grows.",
  },
] as const;

export const WHO_WE_HELP = [
  { title: "Startups", blurb: "Early-stage teams building the structure to move fast without breaking things." },
  { title: "Business owners restructuring", blurb: "Owners reworking a business model, offer, or operating structure." },
  { title: "Students", blurb: "Building real-world knowledge in business, tech, or strategy." },
  { title: "Owners & employees", blurb: "Anyone seeking consultation on a specific market or business topic." },
] as const;

export const PROGRAM_ITEMS: ProgramItem[] = [
  { pillar: "technical", tag: "Program", name: "Technical Foundation Build", cat: "Technical Structure", desc: "Setting up the core technical structure — stack, systems, and workflows — your business runs on.", price: 1200 },
  { pillar: "technical", tag: "Consultation", name: "Technical Structure Consultation", cat: "Technical Structure", desc: "A focused session to assess and plan your technical foundation.", price: 450 },
  { pillar: "bizdev", tag: "Program", name: "Business Development Accelerator", cat: "Business Development", desc: "A structured track for building partnerships and a go-to-market plan.", price: 1200 },
  { pillar: "bizdev", tag: "Consultation", name: "Business Development Consultation", cat: "Business Development", desc: "A direct session on one specific business development challenge.", price: 450 },
  { pillar: "marketing", tag: "Program", name: "Media & Marketing Launch Package", cat: "Media & Marketing", desc: "A structured media and marketing setup — content, channels, and campaign foundations.", price: 950 },
  { pillar: "marketing", tag: "Marketing Advisory", name: "Marketing Advisory Session", cat: "Media & Marketing", desc: "A direct session on marketing strategy or channel planning.", price: 450 },
  { pillar: "branding", tag: "Program", name: "Brand Identity Package", cat: "Branding", desc: "Full brand identity development — positioning, voice, and visual direction.", price: 1100 },
  { pillar: "branding", tag: "Consultation", name: "Branding Consultation", cat: "Branding", desc: "A focused session on brand positioning or visual direction.", price: 450 },
];

export const PRODUCTS: Product[] = [
  { id: "e1", name: "GCC Market-Entry Playbook (Ebook)", cat: "Ebook", desc: "A step-by-step guide to entering GCC markets: partners, licensing, and pricing.", price: 149 },
  { id: "pr1", name: "Business Plan Canvas Kit", cat: "Productivity", desc: "A structured template set for building and pressure-testing a business plan.", price: 79 },
  { id: "pr2", name: "Market-Entry Checklist Bundle", cat: "Productivity", desc: "Printable checklists covering licensing, banking, and hiring for new markets.", price: 59 },
  { id: "pr3", name: "Pitch Deck Template", cat: "Productivity", desc: "An editable deck structure used for SME and partnership pitches.", price: 89 },
  { id: "pr4", name: "Daily Focus Journal", cat: "Wellness", desc: "A structured daily planner for balancing focus and energy while building a business.", price: 69 },
  { id: "pr5", name: "Founder Wellness Reset Guide", cat: "Wellness", desc: "Short routines for sustainable energy while under pressure.", price: 49 },
  { id: "pr6", name: "Deep Work Timer Kit", cat: "Wellness", desc: "A printable timer and ritual kit for protecting deep-work blocks.", price: 59 },
];

export function fmt(n: number) {
  return "AED " + n.toLocaleString();
}
