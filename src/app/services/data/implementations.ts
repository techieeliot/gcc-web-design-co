import { Laptop, BookOpen, Rocket, Heart, Users, Coffee } from 'lucide-react'
import type { Implementation } from '../types'

export const implementations: Implementation[] = [
  {
    title: 'Technical Excellence',
    icon: Laptop,
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
    icon: Coffee,
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
    icon: Heart,
    items: [
      'Mississippi-grown values',
      'Genuine relationships first',
      'Expert development team',
      'Down-to-earth approach',
      'Results you can trust',
    ],
  },
]
