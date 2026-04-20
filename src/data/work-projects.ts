export type ProjectType = "refinement" | "from-scratch";

export type Testimonial = {
  quote: string;
  clientName: string;
  roleCompany: string;
};

export type WorkProject = {
  id: string;
  slug: string;
  type: ProjectType;
  title: string;
  shortDescription: string;
  fullDescription: string;
  beforeImages: string[];
  afterImages: string[];
  showcaseImages: string[];
  liveUrl: string;
  duration: string;
  testimonial?: Testimonial;
  completionDate: string;
  featuredOnHome: boolean;
  thisMonthRefinement: boolean;
  tags: string[];
  outcomes: string[];
};

export const workProjects: WorkProject[] = [
  // TODO: Replace placeholder image paths with real project screenshots from /public/work.
  {
    id: "lettrblack-edtech",
    slug: "lettrblack-edtech-website",
    type: "from-scratch",
    title: "LettrBlack Edtech Website",
    shortDescription:
      "Designed and built a launch-ready education website with a clear conversion funnel for student inquiries.",
    fullDescription:
      "The client needed a fast launch with premium visuals and simple content flow. We delivered a conversion-focused structure, clean UI components, and deployment-ready pages.",
    beforeImages: [],
    afterImages: [],
    showcaseImages: ["/team/team-members.jpg", "/team/founder.jpg", "/team/cofounder.jpg"],
    liveUrl: "https://lettrblack.in",
    duration: "7 days",
    completionDate: "2026-03-12",
    featuredOnHome: true,
    thisMonthRefinement: false,
    tags: ["Built from Scratch", "Edtech", "Website"],
    outcomes: [
      "Launch-ready in one week",
      "Improved clarity in offer messaging",
      "Mobile-first and lightweight layout",
    ],
  },
  {
    id: "rnyb-refinement",
    slug: "rnyb-ngo-refinement",
    type: "refinement",
    title: "RNYB NGO Website Refinement",
    shortDescription:
      "Refined an outdated NGO website into a modern, trust-focused experience with better readability and structure.",
    fullDescription:
      "The existing website had weak visual hierarchy and low trust perception. We reworked layout flow, updated typography, improved section clarity, and shipped a cleaner, faster experience.",
    beforeImages: ["/team/founder.jpg"],
    afterImages: ["/team/team-members.jpg"],
    showcaseImages: [],
    liveUrl: "https://rnyb.in",
    duration: "3 days",
    // TODO: Replace this placeholder testimonial with the final approved client quote.
    testimonial: {
      quote:
        "The new website finally reflects our mission. Visitors now understand what we do within seconds.",
      clientName: "RNYB Team",
      roleCompany: "Operations, RNYB NGO",
    },
    completionDate: "2026-04-02",
    featuredOnHome: true,
    thisMonthRefinement: true,
    tags: ["Refinement", "NGO", "Trust-first UX"],
    outcomes: [
      "Premium visual upgrade",
      "Better content structure and scannability",
      "Improved confidence for first-time visitors",
    ],
  },
  {
    id: "founder-landing",
    slug: "founder-service-landing",
    type: "from-scratch",
    title: "Founder Service Landing Page",
    shortDescription:
      "Created a high-conversion landing page from scratch for an early-stage founder-led service business.",
    fullDescription:
      "We built a focused page architecture around offer clarity, objection handling, and simple CTAs to increase inquiry quality.",
    beforeImages: [],
    afterImages: [],
    showcaseImages: ["/team/cofounder.jpg", "/team/founder.jpg"],
    liveUrl: "https://example.com",
    duration: "5 days",
    completionDate: "2026-04-10",
    featuredOnHome: true,
    thisMonthRefinement: false,
    tags: ["Built from Scratch", "Landing Page", "Conversion"],
    outcomes: [
      "Clear value proposition above the fold",
      "Structured social proof placement",
      "Faster path to contact form submission",
    ],
  },
];

export const thisMonthRefinementProject =
  workProjects.find((project) => project.thisMonthRefinement) ?? null;

export const featuredHomeProjects = workProjects.filter(
  (project) => project.featuredOnHome,
);
