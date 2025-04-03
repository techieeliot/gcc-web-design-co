import {
  Globe,
  ServerCog,
  Gauge,
  LayoutGrid,
  PenTool,
  MonitorSmartphone,
  Database,
  Shield,
  Cloud,
  FileCode,
  Terminal,
  GitCommit,
} from 'lucide-react'
import type { ServiceCategory } from '../types'

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
        icons: [Globe, ServerCog, Gauge],
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
        icons: [Database, Cloud, Shield],
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
        icons: [FileCode, GitCommit, Terminal],
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
        icons: [LayoutGrid, PenTool, MonitorSmartphone],
      },
    ],
  },
]
