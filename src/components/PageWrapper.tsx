import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface PageWrapperProps {
  children: ReactNode
  className?: string
}

export function PageWrapper({ children, className }: PageWrapperProps) {
  return <div className={cn('bg-transparent', className)}>{children}</div>
}
