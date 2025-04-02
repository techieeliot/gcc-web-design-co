interface LoadingFallbackProps {
  height?: string
}

export function LoadingFallback({
  height = 'h-[400px]',
}: LoadingFallbackProps) {
  return (
    <div
      className={`${height} bg-slate-100 dark:bg-slate-800 animate-pulse rounded-lg`}
    />
  )
}
