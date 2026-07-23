export interface Benefit {
  title: string;
  description: string;
  icon: string;
}

export interface Module {
  number: number;
  title: string;
  description?: string;
  topics: string[];
  icon: string;
}

export interface Bonus {
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  originalPrice?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
}

export interface Problem {
  title: string;
  description: string;
  icon: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface BeforeAfter {
  before: string[];
  after: string[];
}
