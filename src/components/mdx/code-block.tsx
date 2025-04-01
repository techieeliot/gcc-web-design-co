import { cn } from '@/lib/utils'
import React from 'react'

export function CodeBlock({
  children,
  className,
  ...props
}: {
  children: React.ReactNode
  className?: string
  [key: string]: any
}) {
  return (
    <pre
      className={cn(
        'mb-4 mt-6 overflow-x-auto rounded-lg bg-slate-950 p-4 text-sm text-slate-50',
        className
      )}
      {...props}
    >
      {children}
    </pre>
  )
}
