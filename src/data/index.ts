import {
  Mail,
  Twitter,
  Linkedin,
  CodeXml,
  Globe,
  Layers,
  PenTool,
  Sparkles,
  UserCheck,
  Bell,
  Cookie,
  Eye,
  FileText,
  Shield,
  Users,
  Github,
  Lock,
  Cloud,
  Coffee,
  Database,
  FileCode,
  Gauge,
  GitCommit,
  Heart,
  LayoutGrid,
  MonitorSmartphone,
  ServerCog,
  Terminal,
  Laptop,
} from "@/lib/icons";
import {
  CaseStudy,
  CaseStudyFeature,
  CompanyLink,
  Feature,
  Implementation,
  PolicyItem,
  ServiceCategory,
  SocialLink,
  StatItem,
} from "./types";

// TODO: all of these should come from a database or CMS

export const socialLinks: SocialLink[] = [
  {
    href: "mailto:devsouth.us@gmail.com",
    icon: Mail,
    label: "Email",
    hoverColor: "group-hover:text-sky dark:group-hover:text-azure",
  },
  {
    href: "https://twitter.com/devsouthdotus",
    icon: Twitter,
    label: "Twitter/X",
    hoverColor: "group-hover:text-sky dark:group-hover:text-azure",
  },
  {
    href: "https://www.linkedin.com/company/devsouth-consulting-llc/",
    icon: Linkedin,
    label: "LinkedIn",
    hoverColor: "group-hover:text-sky dark:group-hover:text-azure",
  },
];

export const features: Feature[] = [
  {
    title: "React & Next.js Mastery",
    description:
      "We build high-performing digital solutions with React's power and Next.js innovation. Our approach is precise and thoughtfully cultivated.",
    icon: CodeXml,
  },
  {
    title: "Responsive Experiences",
    description:
      "Our designs flow seamlessly across devices—just like nurturing a blueberry crop, our work ensures every touchpoint is naturally engaging.",
    icon: Layers,
  },
  {
    title: "SEO & Visibility",
    description:
      "We boost your digital presence with smart, sustainable SEO strategies, ensuring your projects grow organically and capture attention.",
    icon: Globe,
  },
  {
    title: "Intuitive UX/UI",
    description:
      "Merging creative flair with user-first design, we craft experiences that feel as genuine as the first taste of a freshly picked blueberry.",
    icon: PenTool,
  },
  {
    title: "Performance Optimization",
    description:
      "Through careful refinement and modern techniques, we make sure your site runs smoothly—harvesting peak performance at every stage.",
    icon: Sparkles,
  },
  {
    title: "Accessible Solutions",
    description:
      "We design for everyone. Our commitment to accessibility ensures your digital product welcomes all users with open arms.",
    icon: UserCheck,
  },
];

export const fourthPartyFeatures: CaseStudyFeature[] = [
  {
    iconName: "CalendarClock", // Changed from icon: CalendarClock
    title: "Automated Scheduling & Reminders",
    description:
      "Customizable booking intake forms, client notifications, and automated reminders to improve scheduling efficiency.",
  },
  {
    iconName: "Receipt", // Changed from icon: Receipt
    title: "Streamlined Payments",
    description:
      "A simplified payment system that integrates invoicing and payment acceptance all in one place.",
  },
  {
    iconName: "MessageSquare",
    title: "Client Communication",
    description:
      "Easy-to-use chat systems and virtual mediation tools to enhance communication between mediators and clients.",
  },
  {
    iconName: "LayoutDashboard",
    title: "Comprehensive Dashboard",
    description:
      "A unified interface for managing appointments, payments, and client communication.",
  },
];

export const fourthPartyStats = [
  {
    iconName: "Clock",
    value: "75%",
    label: "Less Admin Time",
  },
  {
    iconName: "Users",
    value: "200+",
    label: "Active Mediators",
  },
  {
    iconName: "TrendingUp",
    value: "40%",
    label: "Efficiency Increase",
  },
];

export const weedWarriorsFeatures = [
  {
    iconName: "Calendar",
    title: "Service Scheduling",
    description: "Automated scheduling system for recurring lawn treatments",
  },
  {
    iconName: "Receipt",
    title: "Online Bill Pay",
    description: "Secure payment portal for customers to manage their accounts",
  },
  {
    iconName: "Smartphone",
    title: "Mobile Friendly",
    description: "Responsive design for easy access on any device",
  },
  {
    iconName: "Youtube",
    title: "Content Integration",
    description: "YouTube channel integration for lawn care tips and updates",
  },
];

export const weedWarriorsStats: StatItem[] = [
  {
    iconName: "Users",
    value: "1000+",
    label: "Active Customers",
  },
  {
    iconName: "Clock",
    value: "50%",
    label: "Reduced Admin Time",
  },
  {
    iconName: "TrendingUp",
    value: "30%",
    label: "Customer Growth",
  },
];

export const gorillaFundFeatures: CaseStudyFeature[] = [
  {
    iconName: "FileCode2",
    title: "CMS Optimization",
    description:
      "Enhanced content management workflows and documentation for the organization's team.",
  },
  {
    iconName: "PenTool",
    title: "CSS Styling",
    description:
      "Improved responsive design and visual consistency across the platform.",
  },
  {
    iconName: "Sparkles",
    title: "Interactive Features",
    description:
      "Implemented dynamic content loading and enhanced user interactions.",
  },
  {
    iconName: "Users",
    title: "Team Training",
    description:
      "Provided technical guidance and best practices for content management.",
  },
];

export const gorillaFundStats: StatItem[] = [
  {
    iconName: "PenTool",
    value: "25%",
    label: "Faster Content Updates",
  },
  {
    iconName: "Sparkles",
    value: "40%",
    label: "Enhanced Interactivity",
  },
  {
    iconName: "Users",
    value: "100%",
    label: "Team Adoption",
  },
];

export const dareToShareFeatures: CaseStudyFeature[] = [
  {
    iconName: "GitBranch",
    title: "Version Control Setup",
    description:
      "Implemented Git workflow and Bitbucket best practices for the development team.",
  },
  {
    iconName: "Bug",
    title: "Critical Bug Fixes",
    description:
      "Resolved JavaScript functionality issues and CSS styling bugs on the homepage.",
  },
  {
    iconName: "BookOpen",
    title: "Documentation",
    description:
      "Created comprehensive Git workflow documentation and development guides.",
  },
  {
    iconName: "GraduationCap",
    title: "Team Training",
    description:
      "Provided hands-on Git/Bitbucket training for the development team.",
  },
];

export const dareToShareStats: StatItem[] = [
  {
    iconName: "Clock",
    value: "24h",
    label: "Response Time",
  },
  {
    iconName: "GitPullRequest",
    value: "12+",
    label: "Critical Fixes",
  },
  {
    iconName: "Users",
    value: "100%",
    label: "Team Enabled",
  },
];

export const roomInTheInnFeatures: CaseStudyFeature[] = [
  {
    iconName: "Users2",
    title: "Collaborative Effort",
    description:
      "Part of a three-developer volunteer team working over one weekend at GiveCamp Memphis.",
  },
  {
    iconName: "Database",
    title: "Content Migration",
    description:
      "Assisted with CMS content transfer and management implementation.",
  },
  {
    iconName: "Code2",
    title: "Interactive Features",
    description:
      "Developed JavaScript functionality for dynamic website components.",
  },
  {
    iconName: "Heart",
    title: "Community Impact",
    description:
      "Helped reduce operational costs, allowing more resources for their mission.",
  },
];

export const roomInTheInnStats: StatItem[] = [
  {
    iconName: "Clock",
    value: "48h",
    label: "Development Time",
  },
  {
    iconName: "DollarSign",
    value: "$15k+",
    label: "Value Delivered",
  },
  {
    iconName: "Heart",
    value: "100%",
    label: "Mission Support",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: "fourth-party",
    title: "Case Study: Fourth Party",
    description:
      "A web-based platform designed to streamline the mediation process, focusing on automation and efficiency.",
    image: "/images/pic03.webp",
    imageAlt: "Modern mediation platform",
    iconNames: ["Scale", "Users", "MessageSquare"],
  },
  {
    id: "weed-warriors",
    title: "Case Study: Weed Warriors",
    description:
      "A comprehensive digital solution for a leading lawn care service provider, modernizing their business operations.",
    image: "/images/pic04.webp",
    imageAlt: "Lawn care service platform",
    iconNames: ["Calendar", "Users", "Youtube"],
  },
  {
    id: "gorilla-fund",
    title: "Technical Consulting: Dian Fossey Gorilla Fund",
    description:
      "Technical expertise for the development of the Gorilla Fund website, focusing on CMS optimization and interactive features.",
    image: "/images/pic01.webp",
    imageAlt: "Gorilla conservation website",
    iconNames: ["Code2", "PenTool", "Sparkles"],
  },
  {
    id: "dare-to-share",
    title: "Emergency Technical Support: Dare to Share",
    description:
      "Emergency technical support and Git workflow implementation for a critical platform transition.",
    image: "/images/pic05.webp",
    imageAlt: "Emergency technical consulting",
    iconNames: ["GitBranch", "LifeBuoy", "Code"],
  },
  {
    id: "room-in-the-inn-memphis",
    title: "Nonprofit Impact: Room in the Inn Memphis",
    description:
      "Complete website redesign for a nonprofit organization providing shelter and support for homeless individuals.",
    image: "/images/pic06.webp",
    imageAlt: "Room in the Inn Memphis website",
    iconNames: ["Heart", "Users", "Database"],
  },
];

// export const blogEntries: BlogPostWithSlug[] = [
//   {
//     slug: "getting-started-with-nextjs",
//     title: "Getting Started with Next.js: A Practical Guide",
//     description:
//       "Learn how to set up and structure a Next.js project from scratch, with best practices for file organization, routing, and performance.",
//     date: "March 28, 2025",
//     author: "Eliot Sanford",
//     authorImage: "/authors/eliot.webp",
//     category: "Development",
//     readTime: "8 min read",
//     image: "/blog/nextjs-guide.webp",
//     tags: ["Next.js", "React", "Web Development"],
//     featured: true,
//   },
//   {
//     slug: "tailwind-best-practices",
//     title: "Tailwind CSS Best Practices for Enterprise Projects",
//     description:
//       "Discover how to effectively scale Tailwind CSS in large projects while maintaining code quality, performance, and team collaboration.",
//     date: "March 15, 2025",
//     author: "Eliot Sanford",
//     authorImage: "/authors/eliot.webp",
//     category: "Design",
//     readTime: "6 min read",
//     image: "/blog/tailwind-best-practices.webp",
//     tags: ["Tailwind CSS", "CSS", "Design Systems"],
//     featured: false,
//   },
//   {
//     slug: "framer-motion-animations",
//     title: "Creating Fluid Animations with Framer Motion",
//     description:
//       "Explore the power of Framer Motion for creating smooth, physics-based animations in React applications with minimal code.",
//     date: "February 22, 2025",
//     author: "Eliot Sanford",
//     authorImage: "/authors/eliot.webp",
//     category: "Design",
//     readTime: "5 min read",
//     image: "/blog/framer-motion.webp",
//     tags: ["Framer Motion", "Animation", "React"],
//     featured: false,
//   },
//   {
//     slug: "deploying-nextjs-netlify",
//     title: "Deploying Your Next.js App to Netlify: A Step-by-Step Guide",
//     description:
//       "Learn how to efficiently deploy your Next.js applications on Netlify with proper environment configuration and performance optimization.",
//     date: "February 10, 2025",
//     author: "Eliot Sanford",
//     authorImage: "/authors/eliot.webp",
//     category: "DevOps",
//     readTime: "7 min read",
//     image: "/blog/netlify-guide.webp",
//     tags: ["Next.js", "Netlify", "Deployment"],
//     featured: false,
//   },
// ];

// export const articlesDatabase: ArticlesDatabase = {
//   "getting-started-with-nextjs": {
//     title: "Getting Started with Next.js: A Practical Guide",
//     description:
//       "Learn how to set up and structure a Next.js project from scratch, with best practices for file organization, routing, and performance.",
//     date: "March 28, 2025",
//     author: "Eliot Sanford",
//     authorImage: "/authors/eliot.webp",
//     category: "Development",
//     readTime: "8 min read",
//     image: "/blog/nextjs-guide.webp",
//     tags: ["Next.js", "React", "Web Development"],
//   },
//   "tailwind-best-practices": {
//     title: "Tailwind CSS Best Practices for Enterprise Projects",
//     description:
//       "Discover how to effectively scale Tailwind CSS in large projects while maintaining code quality, performance, and team collaboration.",
//     date: "March 15, 2025",
//     author: "Eliot Sanford",
//     authorImage: "/authors/eliot.webp",
//     category: "Design",
//     readTime: "6 min read",
//     image: "/blog/tailwind-best-practices.webp",
//     tags: ["Tailwind CSS", "CSS", "Design Systems"],
//   },
//   "framer-motion-animations": {
//     title: "Creating Fluid Animations with Framer Motion",
//     description:
//       "Explore the power of Framer Motion for creating smooth, physics-based animations in React applications with minimal code.",
//     date: "February 22, 2025",
//     author: "Eliot Sanford",
//     authorImage: "/authors/eliot.webp",
//     category: "Design",
//     readTime: "5 min read",
//     image: "/blog/framer-motion.webp",
//     tags: ["Framer Motion", "Animation", "React"],
//   },
//   "deploying-nextjs-netlify": {
//     title: "Deploying Your Next.js App to Netlify: A Step-by-Step Guide",
//     description:
//       "Learn how to efficiently deploy your Next.js applications on Netlify with proper environment configuration and performance optimization.",
//     date: "February 10, 2025",
//     author: "Eliot Sanford",
//     authorImage: "/authors/eliot.webp",
//     category: "DevOps",
//     readTime: "7 min read",
//     image: "/blog/netlify-ship.webp",
//     tags: ["Next.js", "Netlify", "Deployment"],
//   },
// };

export const policyItems: PolicyItem[] = [
  {
    id: "information",
    title: "Information We Collect",
    icon: Eye,
    content: `We collect information you provide directly to us when you fill out contact forms, subscribe to newsletters, or communicate with us. This information may include:
      
• Name, email address, and phone number
• Company name and job title
• Project requirements and business needs
• IP address and device information
• Any other information you choose to provide`,
  },
  {
    id: "usage",
    title: "How We Use Your Information",
    icon: FileText,
    content: `We use the information we collect to:
      
• Provide and improve our services
• Process and complete transactions
• Send technical notices and support messages
• Respond to your comments and requests
• Share updates about products, services, and events
• Analyze trends and personalize your experience`,
  },
  {
    id: "sharing",
    title: "Information Sharing",
    icon: Users,
    content: `We may share your information with:
      
• Service providers who support our operations
• Professional advisors like lawyers, accountants, and insurers
• Regulatory authorities, government agencies, and law enforcement
      
We do not sell your personal information.`,
  },
  {
    id: "security",
    title: "Data Security",
    icon: Lock,
    content: `We take reasonable measures to protect your information from unauthorized access or mishandling. Our measures include:
      
• Data encryption in transit using SSL
• Regular security assessments
• Strict access controls and authentication
• Server-side data protection mechanisms`,
  },
  {
    id: "cookies",
    title: "Cookies & Tracking",
    icon: Cookie,
    content: `We use cookies and similar technologies to track activity on our website and retain certain data. Cookies are small pieces of data that may include an anonymous unique identifier.
      
You can instruct your browser to refuse cookies, though some parts of our website might not function properly.`,
  },
  {
    id: "rights",
    title: "Your Rights",
    icon: Shield,
    content: `Depending on your location, you may have rights regarding your personal information, including:
      
• Access, correction, or deletion
• Restricting processing or objecting to certain uses
• Data portability
      
Contact us to exercise any rights you have.`,
  },
  {
    id: "updates",
    title: "Updates to this Policy",
    icon: Bell,
    content: `We may update this Privacy Policy from time to time. Any changes will be posted on this page along with a revised "Last Updated" date.
      
We will also provide notice via email and/or a prominent notice on our website before changes take effect.`,
  },
  {
    id: "legal",
    title: "Contractual Provisions",
    icon: FileText,
    content: `Our engagements are supported by a comprehensive framework—including a Statement of Work (SOW) and corresponding legal agreements—that outlines scope, deliverables, payment terms, and confidentiality requirements. These provisions ensure mutual accountability and clarity at every stage. Please note that any changes outside the agreed scope may incur additional fees, and all legal matters are governed by the laws of Mississippi. Our standard NDA template is available upon request.`,
  },
];

export const companySocialLinks: CompanyLink[] = [
  {
    href: "https://www.linkedin.com/company/devsouth-consulting-llc/",
    icon: Linkedin,
    label: "LinkedIn",
    color: "bg-[#0077B5]/20 hover:bg-[#0077B5]/30 text-[#0077B5]",
  },
  {
    href: "https://twitter.com/devsouthdotus",
    icon: Twitter,
    label: "Twitter",
    color: "bg-[#1DA1F2]/20 hover:bg-[#1DA1F2]/30 text-[#1DA1F2]",
  },
  {
    href: "https://github.com/techieeliot/gcc-web-design-co",
    icon: Github,
    label: "GitHub",
    color:
      "bg-slate-500/20 hover:bg-slate-500/30 text-slate-500 dark:text-slate-400",
  },
];

export const implementations: Implementation[] = [
  {
    title: "Technical Excellence",
    icon: Laptop,
    items: [
      "Server & Client Components",
      "Dynamic Routing & SSR",
      "Image & Performance Optimization",
      "API Integration",
      "Responsive Design",
    ],
  },
  {
    title: "Our Process",
    icon: Coffee,
    items: [
      "Discovery & Planning",
      "Collaborative Design",
      "Agile Development",
      "Quality Assurance",
      "Continuous Support",
    ],
  },
  {
    title: "Why Choose Us",
    icon: Heart,
    items: [
      "Mississippi-grown values",
      "Genuine relationships first",
      "Expert development team",
      "Down-to-earth approach",
      "Results you can trust",
    ],
  },
];

export const serviceCategories: ServiceCategory[] = [
  {
    category: "Development",
    description: "Cultivating robust solutions with care and precision.",
    services: [
      {
        title: "Next.js Application Development",
        description:
          "Modern web applications nurtured with the latest Next.js features:",
        features: [
          "Server-side rendering for optimal performance",
          "Static site generation for blazing fast pages",
          "API routes for backend functionality",
          "Image optimization and responsive design",
          "Advanced routing with dynamic segments",
        ],
        icons: [Globe, ServerCog, Gauge],
      },
      {
        title: "Backend Development",
        description: "Strong foundations rooted in reliable technologies:",
        features: [
          "Scalable API design and implementation",
          "Database architecture and optimization",
          "Security-first development practices",
          "Cloud infrastructure management",
          "Performance monitoring and optimization",
        ],
        icons: [Database, Cloud, Shield],
      },
    ],
  },
  {
    category: "Technical Consulting",
    description: "Growing your vision with grounded, practical solutions.",
    services: [
      {
        title: "Architecture Design",
        description: "Planning your digital garden for sustainable growth:",
        features: [
          "System architecture planning",
          "Technology stack recommendations",
          "Scalability and performance strategies",
          "Security assessment and planning",
          "Infrastructure cost optimization",
        ],
        icons: [FileCode, GitCommit, Terminal],
      },
      {
        title: "Team Augmentation",
        description: "Cultivating success with experienced developers:",
        features: [
          "Skilled React/Next.js developers",
          "Project management expertise",
          "Code quality maintenance",
          "Knowledge transfer and documentation",
          "Agile development practices",
        ],
        icons: [LayoutGrid, PenTool, MonitorSmartphone],
      },
    ],
  },
];
