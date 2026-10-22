/** Case-study tiles in scroll order. Flattened into a single column. */
export const work: string[] = Array.from(
  { length: 31 },
  (_, index) => `/images/work-${String(index + 1).padStart(2, "0")}.png`,
);

export type Brand = {
  name: string;
  image: string;
  href: string;
  width: number;
  height: number;
};

/** Two-column logo wall in the sticky hero rail. */
export const brands: Brand[] = [
  { name: "Ramp", image: "/images/brand-1.png", href: "/#ramp", width: 106, height: 36 },
  { name: "Jeep", image: "/images/brand-4.png", href: "/#jeep", width: 76, height: 27 },
  { name: "StockX", image: "/images/brand-2.png", href: "/#stockx", width: 110, height: 37 },
  { name: "ROI", image: "/images/brand-5.png", href: "/#roi-2", width: 87, height: 33 },
  { name: "Whop", image: "/images/brand-3.png", href: "/#whop", width: 125, height: 42 },
  { name: "Tandem", image: "/images/brand-6.png", href: "/#tandem", width: 87, height: 28 },
];

export type Testimonial = {
  id: string;
  logo: string;
  quote: string;
  author: string;
  avatar: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "ramble",
    logo: "/images/testimonial-1.png",
    quote:
      "Incredible design skill, super quick responses to messages, great with taking feedback.\nHit important deadlines when we're being stressed out, needy clients. Overall have a ton of deep design knowledge that is helping us learn about what is even possible and exceeding expectations.",
    author: "Alex Pundyk, Co-Founder @ RAMBLE",
    avatar: "/images/avatar-1.png",
  },
  {
    id: "whop",
    logo: "/images/testimonial-2.png",
    quote: "Very talented and the work they have done for us has been amazing!",
    author: "Steven Schwartz, CEO @ WHOP",
    avatar: "/images/avatar-2.png",
  },
  {
    id: "y-combinator",
    logo: "/images/testimonial-3.png",
    quote:
      "The proactivity in design decisions–I found myself struggling with coming up with a specific feature set and their guidance based on their experience really helped converge to a well-designed solution",
    author: "Mohammed Nasir, STEALTH STARTUP",
    avatar: "/images/avatar-3.png",
  },
  {
    id: "roi",
    logo: "/images/testimonial-4.png",
    quote: "Fluidity, easy to communicate feedback, fast iterations.",
    author: "Sujith Vishwajith, Co-Founder @ ROI",
    avatar: "/images/avatar-4.png",
  },
];

/** Lines that light up one after another while the manifesto scrolls past. */
export const manifesto = [
  "Users have higher expectations than ever",
  "Design makes or breaks adoption",
  "That's where most founders get stuck",
  "We transform great ideas into products people want to use",
  "We have experience designing products that scaled to millions",
  "Now we do it for founders like you",
];

export const supportPoints = [
  "Transform concepts into high-fidelity designs",
  "Create intuitive user experiences that drive adoption",
  "Ship faster with confident product decisions",
];

export const footerNav = [
  {
    title: "Follow us",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/company/turbo-design-co/" },
      { label: "Twitter/X", href: "https://x.com/turbodesignco" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Contact Us", href: "https://turbodesign.co/contact" },
      { label: "Fulfillment Policy", href: "https://turbodesign.co/fulfillment-policy" },
      { label: "Privacy Policy", href: "https://turbodesign.co/privacy-policy" },
      { label: "Terms and Conditions", href: "https://turbodesign.co/terms-and-conditions" },
    ],
  },
] as const;

export const bookingUrl =
  "https://app.cal.com/shane-levine-7bnfdw/30min/embed?embedType=inline&embed=";
