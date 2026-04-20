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
    showcaseImages: ["/work/lettrblack-1.png", "/work/lettrblack-2.png", "/work/lettrblack-3.png"],
    liveUrl: "https://lettrblack.in",
    duration: "4 days",
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
    id: "growth-agency-refinement",
    slug: "growth-agency-redesign",
    type: "refinement",
    title: "The Growth Agency Website Redesign",
    shortDescription:
      "Transformed a cluttered, low-converting landing page into a high-impact, conversion-focused experience with clear messaging and stronger visual hierarchy.",
    fullDescription:
      "The original website lacked clarity, strong messaging, and visual hierarchy, leading to poor user engagement. We restructured the layout, simplified the copy, improved contrast, and introduced a more persuasive flow focused on conversions.",
    beforeImages: ["/work/before-1.png"],
    afterImages: ["/work/before-2.png"],
    showcaseImages: [],
    liveUrl: "https://digital-agency-five-phi.vercel.app/",
    duration: "3 days",
    // TODO: Replace this placeholder testimonial with the final approved client quote.
    testimonial: {
      quote:
        "The new website finally reflects our mission. Visitors now understand what we do within seconds.",
      clientName: "The Growth Agency Team",
      roleCompany: "Operations, The Growth Agency",
    },
    completionDate: "2026-04-02",
    featuredOnHome: true,
    thisMonthRefinement: true,
    tags: ["Refinement", "Digital Agency", "Conversion-focused"],
    outcomes: [
      "Clearer messaging and value proposition",
      "Improved visual hierarchy and trust perception",
      "Enhanced conversion rate by 25%",
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
