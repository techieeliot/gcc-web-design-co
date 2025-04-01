import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface PageWrapperProps {
  children: ReactNode
  className?: string
}

export function PageWrapper({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={cn('bg-transparent', className)}>{children}</div>
}
