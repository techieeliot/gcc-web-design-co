import { LucideIconComponent, LucideIcon } from "@/lib/icons";

export interface PolicyItem {
  id: string;
  title: string;
  icon: LucideIconComponent;
  content: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIconComponent;
}

export interface CaseStudyFeature {
  iconName: string;
  title: string;
  description: string;
}

export interface StatItem {
  iconName: string;
  value: string;
  label: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  image: string;
  iconNames: LucideIcon[];
  imageAlt: string;
}

export interface SocialLink
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  icon: LucideIconComponent;
  label: string;
  hoverColor: string;
}

export interface CompanyLink {
  href: string;
  icon: LucideIconComponent;
  label: string;
  color: string;
}

export interface Service {
  title: string;
  description: string;
  features: string[];
  icons: LucideIconComponent[];
}

export interface Implementation {
  title: string;
  icon: LucideIconComponent;
  items: string[];
}

export interface ServiceCategory {
  category: string;
  description: string;
  services: Service[];
}
