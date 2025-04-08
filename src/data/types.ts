import { IconName } from '@/components/ui/icon';

export interface PolicyItem {
  id: string;
  title: string;
  icon: IconName;
  content: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: IconName;
}

export interface CaseStudyFeature {
  icon: string;
  title: string;
  description: string;
}

export interface StatItem {
  icon: string;
  value: string;
  label: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  icons: IconName[];
  features: Array<{
    icon: IconName;
    title: string;
    description: string;
  }>;
  stats: Array<{
    icon: IconName;
    value: string;
    label: string;
  }>;
}

export interface AnchorLink
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  label: string;
  icon: IconName;
}
export interface QuickLink extends AnchorLink {
  description: string;
}

export interface SocialLink extends AnchorLink {
  hoverColor: string;
}

export interface CompanyLink extends AnchorLink {
  color: string;
}

export interface Service {
  title: string;
  description: string;
  features: string[];
  icons: IconName[];
}

export interface Implementation {
  title: string;
  icon: IconName;
  items: string[];
}

export interface ServiceCategory {
  category: string;
  description: string;
  services: Service[];
}

export interface Fact {
  label: string;
  value: string;
  icon: IconName;
}
[];
