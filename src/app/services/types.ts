import { LucideIcon } from 'lucide-react'

export interface Service {
  title: string
  description: string
  features: string[]
  icons: LucideIcon[]
}

export interface Implementation {
  title: string
  icon: LucideIcon
  items: string[]
}

export interface ServiceCategory {
  category: string
  description: string
  services: Service[]
}
