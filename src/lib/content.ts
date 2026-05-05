export const SITE = {
  name: "Marcus Electric",
  phone: "(416) 555-0123",
  phoneHref: "tel:+14165550123",
  email: "info@marcuselectric.ca",
  esa: "ECRA/ESA #7012345",
  region: "Toronto & Greater Toronto Area",
};

export const NAV = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const TRUST = [
  { label: "ESA Licensed", sub: "ECRA #7012345" },
  { label: "Fully Insured", sub: "$5M liability" },
  { label: "30-min Response", sub: "Toronto-wide" },
  { label: "200+ Projects", sub: "Since 2014" },
];

export const SERVICES = [
  {
    title: "Residential",
    blurb: "Safe fixes and clean installs for your home.",
    items: ["Panel upgrades", "EV chargers", "Lighting & outlets", "Home safety checks"],
  },
  {
    title: "Commercial",
    blurb: "Reliable electrical for shops, offices and busy spaces.",
    items: ["Office wiring", "Code compliance", "Backup power", "Maintenance"],
  },
  {
    title: "Landscape & Design",
    blurb: "Outdoor lighting that makes your space feel warm and useful.",
    items: ["Pathway lights", "Garden uplighting", "Patio wiring", "Pool & deck"],
  },
];

import portfolioRes from "@/assets/portfolio-residential.jpg";
import portfolioCom from "@/assets/portfolio-commercial.jpg";
import portfolioLand from "@/assets/portfolio-landscape.jpg";
import portfolioEV from "@/assets/portfolio-ev.png";
import portfolioOffice from "@/assets/portfolio-office.png";
import portfolioSmart from "@/assets/portfolio-smart.png";

export const PORTFOLIO = [
  { tag: "Residential", title: "Modern Kitchen Renovation", location: "Leslieville", image: portfolioRes },
  { tag: "Commercial", title: "Downtown Office Complex", location: "Financial District", image: portfolioCom },
  { tag: "Landscape", title: "Backyard Oasis Lighting", location: "Forest Hill", image: portfolioLand },
  { tag: "Residential", title: "EV Charger Installation", location: "Etobicoke", image: portfolioEV },
  { tag: "Commercial", title: "High-End Retail Lighting", location: "Yorkville", image: portfolioOffice },
  { tag: "Residential", title: "Smart Home Integration", location: "Bridle Path", image: portfolioSmart },
];

export const TESTIMONIALS = [
  {
    quote: "Marcus and his team did an incredible job rewiring our 1920s home. Professional, clean, and on budget. Couldn't be happier.",
    name: "Sarah Mitchell",
    location: "North York, Toronto",
    tag: "Residential Rewiring",
  },
  {
    quote: "Called for an emergency at 2 AM and Marcus was there within 30 minutes. Fixed the issue quickly and fairly priced. True professional.",
    name: "David Chen",
    location: "Scarborough, Toronto",
    tag: "Emergency Service",
  },
  {
    quote: "The landscape lighting transformed our backyard into a magical space. Marcus's design eye is exceptional. Highly recommend.",
    name: "Jennifer Okonkwo",
    location: "Etobicoke, Toronto",
    tag: "Landscape & Design",
  },
];

export const SERVICE_AREAS = [
  "Downtown Toronto",
  "North York",
  "Scarborough",
  "Etobicoke",
  "Mississauga",
  "Markham",
];
