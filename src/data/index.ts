import { IconProps } from '@/components/ui/icon';
import {
  AnchorLink,
  CaseStudy,
  CompanyLink,
  CompanyValue,
  Fact,
  Feature,
  Implementation,
  PolicyItem,
  QuickLink,
  ServiceCategory,
  SiteMapRoute,
  SocialLink,
} from './types';

// TODO: all of these should come from a database or CMS

export const socialLinks: SocialLink[] = [
  {
    href: 'mailto:hey@sanfor.dev',
    icon: 'Mail',
    label: 'Email',
    hoverColor: 'group-hover:text-sky dark:group-hover:text-indigo',
  },
  {
    href: 'https://x.com/sanfordev32857',
    icon: 'Twitter',
    label: 'Twitter/X',
    hoverColor: 'group-hover:text-sky dark:group-hover:text-indigo',
  },
  {
    href: 'https://www.linkedin.com/company/sanfordev/',
    icon: 'Linkedin',
    label: 'LinkedIn',
    hoverColor: 'group-hover:text-sky dark:group-hover:text-indigo',
  },
];

export const benefits = [
  'React & Next.js expertise that drives performance',
  'Hands-on solutions for responsive, accessible web apps',
  'Deep technical insight with modern, scalable approaches',
  'Curated talent and trusted partners on every project',
  'Design finesse paired with robust back-end skills',
];

export const features: Feature[] = [
  {
    title: 'React & Next.js Mastery',
    description:
      "We build high-performing digital solutions with React's power and Next.js innovation. Our approach is precise and thoughtfully cultivated.",
    icon: 'CodeXml',
  },
  {
    title: 'Responsive Experiences',
    description:
      'Our designs flow seamlessly across devices—just like nurturing a blueberry crop, our work ensures every touchpoint is naturally engaging.',
    icon: 'Layers',
  },
  {
    title: 'SEO & Visibility',
    description:
      'We boost your digital presence with smart, sustainable SEO strategies, ensuring your projects grow organically and capture attention.',
    icon: 'Globe',
  },
  {
    title: 'Intuitive UX/UI',
    description:
      'Merging creative flair with user-first design, we craft experiences that feel as genuine as the first taste of a freshly picked blueberry.',
    icon: 'PenTool',
  },
  {
    title: 'Performance Optimization',
    description:
      'Through careful refinement and modern techniques, we make sure your site runs smoothly—harvesting peak performance at every stage.',
    icon: 'Sparkles',
  },
  {
    title: 'Accessible Solutions',
    description:
      'We design for everyone. Our commitment to accessibility ensures your digital product welcomes all users with open arms.',
    icon: 'UserCheck',
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: 'fourth-party',
    title: 'Case Study: Fourth Party',
    description:
      'A web-based platform designed to streamline the mediation process, focusing on automation and efficiency.',
    image: '/images/pic03.webp',
    imageAlt: 'Modern mediation platform',
    icons: ['Scale', 'Users', 'MessageSquare'],
    features: [
      {
        icon: 'Calendar',
        title: 'Automated Scheduling & Reminders',
        description:
          'Customizable booking intake forms, client notifications, and automated reminders to improve scheduling efficiency.',
      },
      {
        icon: 'Receipt',
        title: 'Streamlined Payments',
        description:
          'A simplified payment system that integrates invoicing and payment acceptance all in one place.',
      },
      {
        icon: 'MessageSquare',
        title: 'Client Communication',
        description:
          'Easy-to-use chat systems and virtual mediation tools to enhance communication between mediators and clients.',
      },
      {
        icon: 'LayoutDashboard',
        title: 'Comprehensive Dashboard',
        description:
          'A unified interface for managing appointments, payments, and client communication.',
      },
    ],
    stats: [
      {
        icon: 'Clock',
        value: '75%',
        label: 'Less Admin Time',
      },
      {
        icon: 'Users',
        value: '200+',
        label: 'Active Mediators',
      },
      {
        icon: 'TrendingUp',
        value: '40%',
        label: 'Efficiency Increase',
      },
    ],
    caseStudyUrlLabel:
      'Fourth Party is a web-based platform designed to streamline the mediation process. The platform focuses on automating scheduling, payments, and client communication, significantly reducing administrative time and enhancing efficiency for mediators. The comprehensive dashboard allows mediators to manage appointments, payments, and client interactions seamlessly. Check out the website to learn more about how Fourth Party is transforming the mediation process.',
    caseStudyUrl: 'https://fourthparty.app',
  },
  {
    id: 'weed-warriors',
    title: 'Case Study: Weed Warriors',
    description:
      'A comprehensive digital solution for a leading lawn care service provider, modernizing their business operations.',
    image: '/images/pic04.webp',
    imageAlt: 'Lawn care service platform',
    icons: ['Calendar', 'Users', 'Youtube'],
    features: [
      {
        icon: 'Calendar',
        title: 'Service Scheduling',
        description:
          'Automated scheduling system for recurring lawn treatments',
      },
      {
        icon: 'Receipt',
        title: 'Online Bill Pay',
        description:
          'Secure payment portal for customers to manage their accounts',
      },
      {
        icon: 'Smartphone',
        title: 'Mobile Friendly',
        description: 'Responsive design for easy access on any device',
      },
      {
        icon: 'Youtube',
        title: 'Content Integration',
        description:
          'YouTube channel integration for lawn care tips and updates',
      },
    ],
    stats: [
      {
        icon: 'Users',
        value: '1000+',
        label: 'Active Customers',
      },
      {
        icon: 'Clock',
        value: '50%',
        label: 'Reduced Admin Time',
      },
      {
        icon: 'TrendingUp',
        value: '30%',
        label: 'Customer Growth',
      },
    ],
    caseStudyUrlLabel:
      'We helped Weed Warriors create their first website ever, and it has proven to tremenously improve the bottomline of the business. Check out the website to learn more about their services and how they can help you maintain a beautiful lawn.',
    caseStudyUrl: 'https://weedwarriorsjackson.com',
  },
  {
    id: 'gorilla-fund',
    title: 'Technical Consulting: Dian Fossey Gorilla Fund',
    description:
      'Technical expertise for the development of the Gorilla Fund website, focusing on CMS optimization and interactive features.',
    image: '/images/pic01.webp',
    imageAlt: 'Gorilla conservation website',
    icons: ['Code2', 'PenTool', 'Sparkles'],
    features: [
      {
        icon: 'FileCode2',
        title: 'CMS Optimization',
        description:
          "Enhanced content management workflows and documentation for the organization's team.",
      },
      {
        icon: 'PenTool',
        title: 'CSS Styling',
        description:
          'Improved responsive design and visual consistency across the platform.',
      },
      {
        icon: 'Sparkles',
        title: 'Interactive Features',
        description:
          'Implemented dynamic content loading and enhanced user interactions.',
      },
      {
        icon: 'Users',
        title: 'Team Training',
        description:
          'Provided technical guidance and best practices for content management.',
      },
    ],
    stats: [
      {
        icon: 'PenTool',
        value: '25%',
        label: 'Faster Content Updates',
      },
      {
        icon: 'Sparkles',
        value: '40%',
        label: 'Enhanced Interactivity',
      },
      {
        icon: 'Users',
        value: '100%',
        label: 'Team Adoption',
      },
    ],
    caseStudyUrlLabel:
      'The Dian Fossey Gorilla Fund is dedicated to protecting and studying endangered mountain gorillas. Visit their website to learn more about their crucial conservation work and how technology supports their mission.',
    caseStudyUrl: 'https://gorillafund.org',
  },
  {
    id: 'dare-to-share',
    title: 'Emergency Technical Support: Dare to Share',
    description:
      'Emergency technical support and Git workflow implementation for a critical platform transition.',
    image: '/images/pic05.webp',
    imageAlt: 'Emergency technical consulting',
    icons: ['GitBranch', 'LifeBuoy', 'Code'],
    features: [
      {
        icon: 'GitBranch',
        title: 'Version Control Setup',
        description:
          'Implemented Git workflow and Bitbucket best practices for the development team.',
      },
      {
        icon: 'Bug',
        title: 'Critical Bug Fixes',
        description:
          'Resolved JavaScript functionality issues and CSS styling bugs on the homepage.',
      },
      {
        icon: 'BookOpen',
        title: 'Documentation',
        description:
          'Created comprehensive Git workflow documentation and development guides.',
      },
      {
        icon: 'GraduationCap',
        title: 'Team Training',
        description:
          'Provided hands-on Git/Bitbucket training for the development team.',
      },
    ],
    stats: [
      {
        icon: 'Clock',
        value: '24h',
        label: 'Response Time',
      },
      {
        icon: 'GitPullRequest',
        value: '12+',
        label: 'Critical Fixes',
      },
      {
        icon: 'Users',
        value: '100%',
        label: 'Team Enabled',
      },
    ],
    caseStudyUrlLabel:
      'The Dare to Share organization is a national initiative that mobilizes Christian youth to share the Gospel. The website serves as a platform for information, resources, and community engagement. Check out the website to learn more about their mission and how you can get involved.',
    caseStudyUrl: 'https://daretoshare.org',
  },
  {
    id: 'room-in-the-inn-memphis',
    title: 'Nonprofit Impact: Room in the Inn Memphis',
    description:
      'Complete website redesign for a nonprofit organization providing shelter and support for homeless individuals.',
    image: '/images/pic06.webp',
    imageAlt: 'Room in the Inn Memphis website',
    icons: ['Heart', 'Users', 'Database'],
    features: [
      {
        icon: 'Users2',
        title: 'Collaborative Effort',
        description:
          'Part of a three-developer volunteer team working over one weekend at GiveCamp Memphis.',
      },
      {
        icon: 'Database',
        title: 'Content Migration',
        description:
          'Assisted with CMS content transfer and management implementation.',
      },
      {
        icon: 'Code2',
        title: 'Interactive Features',
        description:
          'Developed JavaScript functionality for dynamic website components.',
      },
      {
        icon: 'Heart',
        title: 'Community Impact',
        description:
          'Helped reduce operational costs, allowing more resources for their mission.',
      },
    ],
    stats: [
      {
        icon: 'Clock',
        value: '48h',
        label: 'Development Time',
      },
      {
        icon: 'DollarSign',
        value: '$15k+',
        label: 'Value Delivered',
      },
      {
        icon: 'Heart',
        value: '100%',
        label: 'Mission Support',
      },
    ],
    caseStudyUrlLabel:
      'Room in the Inn Memphis is a nonprofit organization that provides shelter and support for homeless individuals in Memphis, TN. They work to connect people with resources and services to help them get back on their feet. If you want to learn more about their mission and how you can help, check out their website.',
    caseStudyUrl: 'https://roomintheinn-memphis.org',
  },
] as const;

export const validatedCaseStudies = caseStudies;

export const policyItems: PolicyItem[] = [
  {
    id: 'information',
    title: 'Information We Collect',
    icon: 'Eye',
    content: `We collect information you provide directly to us when you fill out contact forms, subscribe to newsletters, or communicate with us. This information may include:
      
• Name, email address, and phone number
• Company name and job title
• Project requirements and business needs
• IP address and device information
• Any other information you choose to provide`,
  },
  {
    id: 'usage',
    title: 'How We Use Your Information',
    icon: 'FileText',
    content: `We use the information we collect to:
      
• Provide and improve our services
• Process and complete transactions
• Send technical notices and support messages
• Respond to your comments and requests
• Share updates about products, services, and events
• Analyze trends and personalize your experience`,
  },
  {
    id: 'sharing',
    title: 'Information Sharing',
    icon: 'Users',
    content: `We may share your information with:
      
• Service providers who support our operations
• Professional advisors like lawyers, accountants, and insurers
• Regulatory authorities, government agencies, and law enforcement
      
We do not sell your personal information.`,
  },
  {
    id: 'security',
    title: 'Data Security',
    icon: 'Lock',
    content: `We take reasonable measures to protect your information from unauthorized access or mishandling. Our measures include:
      
• Data encryption in transit using SSL
• Regular security assessments
• Strict access controls and authentication
• Server-side data protection mechanisms`,
  },
  {
    id: 'cookies',
    title: 'Cookies & Tracking',
    icon: 'Cookie',
    content: `We use cookies and similar technologies to track activity on our website and retain certain data. Cookies are small pieces of data that may include an anonymous unique identifier.
      
You can instruct your browser to refuse cookies, though some parts of our website might not function properly.`,
  },
  {
    id: 'rights',
    title: 'Your Rights',
    icon: 'Shield',
    content: `Depending on your location, you may have rights regarding your personal information, including:
      
• Access, correction, or deletion
• Restricting processing or objecting to certain uses
• Data portability
      
Contact us to exercise any rights you have.`,
  },
  {
    id: 'updates',
    title: 'Updates to this Policy',
    icon: 'Bell',
    content: `We may update this Privacy Policy from time to time. Any changes will be posted on this page along with a revised "Last Updated" date.
      
We will also provide notice via email and/or a prominent notice on our website before changes take effect.`,
  },
  {
    id: 'legal',
    title: 'Contractual Provisions',
    icon: 'FileText',
    content:
      'Our engagements are supported by a comprehensive framework—including a Statement of Work (SOW) and corresponding legal agreements—that outlines scope, deliverables, payment terms, and confidentiality requirements. These provisions ensure mutual accountability and clarity at every stage. Please note that any changes outside the agreed scope may incur additional fees, and all legal matters are governed by the laws of Mississippi. Our standard NDA template is available upon request.',
  },
];

export const quickLinks: QuickLink[] = [
  {
    href: '/',
    label: 'Home',
    icon: 'Home',
    description: 'Back to our homepage',
  },
  {
    href: '/about',
    label: 'About',
    icon: 'Info',
    description: 'Learn more about us',
  },
  {
    href: '/services',
    label: 'Services',
    icon: 'Briefcase',
    description: 'What we can do for you',
  },
  {
    href: '/portfolio',
    label: 'Case Studies',
    icon: 'Folder',
    description: 'See our past work',
  },
  {
    href: '/blog',
    label: 'Blog',
    icon: 'FileCode',
    description: 'Latest tech insights',
  },
  {
    href: '/contact',
    label: 'Contact',
    icon: 'Mail',
    description: 'Get in touch with us',
  },
];

export const companySocialLinks: CompanyLink[] = [
  {
    href: 'https://www.linkedin.com/company/sanfordev/',
    icon: 'Linkedin',
    label: 'LinkedIn',
    color: 'bg-[#0077B5]/20 hover:bg-[#0077B5]/30 text-[#0077B5]',
  },
  {
    href: 'https://x.com/sanfordev32857',
    icon: 'Twitter',
    label: 'Twitter',
    color: 'bg-[#1DA1F2]/20 hover:bg-[#1DA1F2]/30 text-[#1DA1F2]',
  },
  {
    href: 'https://github.com/sanfordev/site',
    icon: 'Github',
    label: 'GitHub',
    color:
      'bg-slate-500/20 hover:bg-slate-500/30 text-slate-500 dark:text-slate-400',
  },
];

export const implementations: Implementation[] = [
  {
    title: 'Technical Excellence',
    icon: 'Laptop',
    items: [
      'Server & Client Components',
      'Dynamic Routing & SSR',
      'Image & Performance Optimization',
      'API Integration',
      'Responsive Design',
    ],
  },
  {
    title: 'Our Process',
    icon: 'Coffee',
    items: [
      'Discovery & Planning',
      'Collaborative Design',
      'Agile Development',
      'Quality Assurance',
      'Continuous Support',
    ],
  },
  {
    title: 'Why Choose Us',
    icon: 'Heart',
    items: [
      'Mississippi-grown values',
      'Genuine relationships first',
      'Expert development team',
      'Down-to-earth approach',
      'Results you can trust',
    ],
  },
];

export const serviceCategories: ServiceCategory[] = [
  {
    category: 'Development',
    description: 'Cultivating robust solutions with care and precision.',
    services: [
      {
        title: 'Next.js Application Development',
        description:
          'Modern web applications nurtured with the latest Next.js features:',
        features: [
          'Server-side rendering for optimal performance',
          'Static site generation for blazing fast pages',
          'API routes for backend functionality',
          'Image optimization and responsive design',
          'Advanced routing with dynamic segments',
        ],
        icons: ['Globe', 'ServerCog', 'Gauge'],
      },
      {
        title: 'Backend Development',
        description: 'Strong foundations rooted in reliable technologies:',
        features: [
          'Scalable API design and implementation',
          'Database architecture and optimization',
          'Security-first development practices',
          'Cloud infrastructure management',
          'Performance monitoring and optimization',
        ],
        icons: ['Database', 'Cloud', 'Shield'],
      },
    ],
  },
  {
    category: 'Technical Consulting',
    description: 'Growing your vision with grounded, practical solutions.',
    services: [
      {
        title: 'Architecture Design',
        description: 'Planning your digital garden for sustainable growth:',
        features: [
          'System architecture planning',
          'Technology stack recommendations',
          'Scalability and performance strategies',
          'Security assessment and planning',
          'Infrastructure cost optimization',
        ],
        icons: ['FileCode', 'GitCommit', 'Terminal'],
      },
      {
        title: 'Team Augmentation',
        description: 'Cultivating success with experienced developers:',
        features: [
          'Skilled React/Next.js developers',
          'Project management expertise',
          'Code quality maintenance',
          'Knowledge transfer and documentation',
          'Agile development practices',
        ],
        icons: ['LayoutGrid', 'PenTool', 'MonitorSmartphone'],
      },
    ],
  },
];

export const downToEarthValues = [
  {
    title: 'Genuine Relationships',
    description:
      'Building trust through authentic connections and open communication',
  },
  {
    title: 'Technical Excellence',
    description: 'Delivering robust solutions with modern best practices',
  },
  {
    title: 'Southern Hospitality',
    description: 'Bringing warmth and care to every interaction and project',
  },
];

export const missionStatement = {
  quote:
    'Building remarkable applications that empower people through functional, delightful, and accessible experiences.',
  person: 'Eliot Sanford',
  title: 'Founder & Team Lead',
};

export const volunteerActivities = [
  'Founding freeCodeCamp Jackson, MS',
  'Mentoring at Base Camp Coding Academy',
  'Teaching web development to underrepresented youth',
  'Contributing to open source education',
  'Supporting nonprofits through GiveCamp',
];

export const companyValues: CompanyValue[] = [
  {
    iconName: 'Hammer',
    title: 'Build',
    description:
      "We build high-performance, accessible applications that don't just work—they inspire and connect.",
  },
  {
    iconName: 'Users',
    title: 'Empower',
    description:
      'We simplify technology to empower you—making every interaction intuitive and impactful.',
  },
  {
    iconName: 'Goal',
    title: 'Innovate',
    description:
      'We lead with creativity and adaptability—constantly exploring new horizons in tech innovation.',
  },
  {
    iconName: 'Heart',
    title: 'Support',
    description:
      'We stand together—nurturing a community that values diversity, collaboration, and heart.',
  },
];

export const facts: Fact[] = [
  { label: 'Founded', value: 'December 2018', icon: 'Rocket' },
  {
    label: 'Location',
    value: 'Clinton, Mississippi (Remote-first)',
    icon: 'Laptop',
  },
  { label: 'Focus', value: 'React Ecosystem Development', icon: 'Code2' },
  { label: 'Clients Served', value: 'Startups to Enterprise', icon: 'Users' },
];

export const connectWithUs: AnchorLink[] = [
  {
    href: 'https://www.linkedin.com/company/sanfordev/',
    label: 'LinkedIn',
    icon: 'LinkedinIcon',
  },
  {
    href: 'https://github.com/sanfordev/site',
    label: 'GitHub',
    icon: 'Github',
  },
];

export const staticRoutes: Array<Partial<SiteMapRoute>> = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/blog', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/services', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/blog/all', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/privacy-policy', priority: 0.5, changeFrequency: 'yearly' },
];

export const caseStudyRoutes = caseStudies.map(
  (study): Partial<SiteMapRoute> => ({
    path: `/portfolio/${study.id}`,
    priority: 0.6,
    changeFrequency: 'monthly',
  })
);
