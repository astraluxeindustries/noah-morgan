import { Review, NavLink, ServiceItem } from './types';

export const BUSINESS_INFO = {
  name: "Noah Morgan",
  title: "Mortgage Consultant",
  nmls: "1695255",
  company: "Patriot Home Mortgage",
  companyNmls: "715386",
  address: "619 S Bluff St Tower 2 Suite 1B, St. George, UT 84770",
  phone: "(425) 876-3025",
  email: "noah@patriothomemortgage.com",
  hours: "Open 24 hours",
  bio: `Noah Morgan believes the mortgage process should feel clear, strategic, and personal. As a Mortgage Consultant, he focuses on building real relationships with his clients and guiding them through one of the most important financial decisions they will make.

Known for his steady communication and genuine approach, Noah takes time to understand each client’s goals before recommending a solution. Whether you are purchasing your first home, refinancing, or investing in property, he works to simplify the process and remove unnecessary stress. His priority is making sure you feel informed, confident, and supported from application to closing.

Outside of work, Noah is a devoted husband and father who values time spent with family above all else. He enjoys staying active through golf and mountain biking, and he appreciates the balance that comes from both outdoor adventure and personal wellness. His grounded, authentic nature carries into his professional life, where clients consistently value his honesty and calm presence.

For Noah, mortgage advising is not just about rates and paperwork. It is about helping families create stability, opportunity, and a place to build lasting memories."`,
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    author: "Local Resident",
    rating: 5,
    text: "He is very genuine and truly cared about my family.",
    source: "Google"
  },
  {
    id: 2,
    author: "Happy Homebuyer",
    rating: 5,
    text: "He went above and beyond in helping them get prepared to purchase a home!!!",
    source: "Google"
  },
  {
    id: 3,
    author: "Southern Texas Client",
    rating: 5,
    text: "Professional, knowledgeable, and always available to answer our questions. Highly recommended.",
    source: "Google"
  }
];

export const SERVICES: ServiceItem[] = [
  {
    title: "Home Purchase Loans",
    description: "Guiding you through every step of buying your dream home with competitive rates and personalized support."
  },
  {
    title: "Refinancing",
    description: "Lower your monthly payments or access your home's equity with our tailored refinancing solutions."
  },
  {
    title: "Investment Property",
    description: "Strategic financing options for real estate investors looking to expand their portfolio in Southern Utah."
  },
  {
    title: "Construction Loans",
    description: "Building your custom home? We offer specialized financing to help you build from the ground up."
  }
];
