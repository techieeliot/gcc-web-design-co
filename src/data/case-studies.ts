import {
  CalendarClock,
  Receipt,
  MessageSquare,
  LayoutDashboard,
  Clock,
  Users,
  TrendingUp,
  Calendar,
  Smartphone,
  Youtube,
  FileCode2,
  PenTool,
  Sparkles,
  BookOpen,
  Bug,
  GitBranch,
  GitPullRequest,
  GraduationCap,
  Code2,
  Database,
  DollarSign,
  Heart,
  Users2,
  Scale,
  LifeBuoy,
  Code,
} from 'lucide-react'

export const fourthPartyFeatures = [
  {
    iconName: 'CalendarClock', // Changed from icon: CalendarClock
    title: 'Automated Scheduling & Reminders',
    description:
      'Customizable booking intake forms, client notifications, and automated reminders to improve scheduling efficiency.',
  },
  {
    iconName: 'Receipt', // Changed from icon: Receipt
    title: 'Streamlined Payments',
    description:
      'A simplified payment system that integrates invoicing and payment acceptance all in one place.',
  },
  {
    iconName: 'MessageSquare',
    title: 'Client Communication',
    description:
      'Easy-to-use chat systems and virtual mediation tools to enhance communication between mediators and clients.',
  },
  {
    iconName: 'LayoutDashboard',
    title: 'Comprehensive Dashboard',
    description:
      'A unified interface for managing appointments, payments, and client communication.',
  },
]

export const fourthPartyStats = [
  {
    iconName: 'Clock', // Changed from icon: Clock
    value: '75%',
    label: 'Less Admin Time',
  },
  {
    iconName: 'Users',
    value: '200+',
    label: 'Active Mediators',
  },
  {
    iconName: 'TrendingUp',
    value: '40%',
    label: 'Efficiency Increase',
  },
]

export const weedWarriorsFeatures = [
  {
    iconName: 'Calendar',
    title: 'Service Scheduling',
    description: 'Automated scheduling system for recurring lawn treatments',
  },
  {
    iconName: 'Receipt',
    title: 'Online Bill Pay',
    description: 'Secure payment portal for customers to manage their accounts',
  },
  {
    iconName: 'Smartphone',
    title: 'Mobile Friendly',
    description: 'Responsive design for easy access on any device',
  },
  {
    iconName: 'Youtube',
    title: 'Content Integration',
    description: 'YouTube channel integration for lawn care tips and updates',
  },
]

export const weedWarriorsStats = [
  {
    iconName: 'Users',
    value: '1000+',
    label: 'Active Customers',
  },
  {
    iconName: 'Clock',
    value: '50%',
    label: 'Reduced Admin Time',
  },
  {
    iconName: 'TrendingUp',
    value: '30%',
    label: 'Customer Growth',
  },
]

export const gorillaFundFeatures = [
  {
    iconName: 'FileCode2',
    title: 'CMS Optimization',
    description:
      "Enhanced content management workflows and documentation for the organization's team.",
  },
  {
    iconName: 'PenTool',
    title: 'CSS Styling',
    description:
      'Improved responsive design and visual consistency across the platform.',
  },
  {
    iconName: 'Sparkles',
    title: 'Interactive Features',
    description:
      'Implemented dynamic content loading and enhanced user interactions.',
  },
  {
    iconName: 'Users',
    title: 'Team Training',
    description:
      'Provided technical guidance and best practices for content management.',
  },
]

export const gorillaFundStats = [
  {
    iconName: 'PenTool',
    value: '25%',
    label: 'Faster Content Updates',
  },
  {
    iconName: 'Sparkles',
    value: '40%',
    label: 'Enhanced Interactivity',
  },
  {
    iconName: 'Users',
    value: '100%',
    label: 'Team Adoption',
  },
]

export const dareToShareFeatures = [
  {
    iconName: 'GitBranch',
    title: 'Version Control Setup',
    description:
      'Implemented Git workflow and Bitbucket best practices for the development team.',
  },
  {
    iconName: 'Bug',
    title: 'Critical Bug Fixes',
    description:
      'Resolved JavaScript functionality issues and CSS styling bugs on the homepage.',
  },
  {
    iconName: 'BookOpen',
    title: 'Documentation',
    description:
      'Created comprehensive Git workflow documentation and development guides.',
  },
  {
    iconName: 'GraduationCap',
    title: 'Team Training',
    description:
      'Provided hands-on Git/Bitbucket training for the development team.',
  },
]

export const dareToShareStats = [
  {
    iconName: 'Clock',
    value: '24h',
    label: 'Response Time',
  },
  {
    iconName: 'GitPullRequest',
    value: '12+',
    label: 'Critical Fixes',
  },
  {
    iconName: 'Users',
    value: '100%',
    label: 'Team Enabled',
  },
]

export const roomInTheInnFeatures = [
  {
    iconName: 'Users2',
    title: 'Collaborative Effort',
    description:
      'Part of a three-developer volunteer team working over one weekend at GiveCamp Memphis.',
  },
  {
    iconName: 'Database',
    title: 'Content Migration',
    description:
      'Assisted with CMS content transfer and management implementation.',
  },
  {
    iconName: 'Code2',
    title: 'Interactive Features',
    description:
      'Developed JavaScript functionality for dynamic website components.',
  },
  {
    iconName: 'Heart',
    title: 'Community Impact',
    description:
      'Helped reduce operational costs, allowing more resources for their mission.',
  },
]

export const roomInTheInnStats = [
  {
    iconName: 'Clock',
    value: '48h',
    label: 'Development Time',
  },
  {
    iconName: 'DollarSign',
    value: '$15k+',
    label: 'Value Delivered',
  },
  {
    iconName: 'Heart',
    value: '100%',
    label: 'Mission Support',
  },
]

export const caseStudies = [
  {
    id: 'fourth-party',
    title: 'Case Study: Fourth Party',
    description:
      'A web-based platform designed to streamline the mediation process, focusing on automation and efficiency.',
    image: '/images/pic03.webp',
    imageAlt: 'Modern mediation platform',
    iconNames: ['Scale', 'Users', 'MessageSquare'], // Use string names instead of component references
  },
  {
    id: 'weed-warriors',
    title: 'Case Study: Weed Warriors',
    description:
      'A comprehensive digital solution for a leading lawn care service provider, modernizing their business operations.',
    image: '/images/pic04.webp',
    imageAlt: 'Lawn care service platform',
    iconNames: ['Calendar', 'Users', 'Youtube'],
  },
  {
    id: 'gorilla-fund',
    title: 'Technical Consulting: Dian Fossey Gorilla Fund',
    description:
      'Technical expertise for the development of the Gorilla Fund website, focusing on CMS optimization and interactive features.',
    image: '/images/pic01.webp',
    imageAlt: 'Gorilla conservation website',
    iconNames: ['Code2', 'PenTool', 'Sparkles'],
  },
  {
    id: 'dare-to-share',
    title: 'Emergency Technical Support: Dare to Share',
    description:
      'Emergency technical support and Git workflow implementation for a critical platform transition.',
    image: '/images/pic05.webp',
    imageAlt: 'Emergency technical consulting',
    iconNames: ['GitBranch', 'LifeBuoy', 'Code'],
  },
  {
    id: 'room-in-the-inn-memphis',
    title: 'Nonprofit Impact: Room in the Inn Memphis',
    description:
      'Complete website redesign for a nonprofit organization providing shelter and support for homeless individuals.',
    image: '/images/pic06.webp',
    imageAlt: 'Room in the Inn Memphis website',
    iconNames: ['Heart', 'Users', 'Database'],
  },
]
