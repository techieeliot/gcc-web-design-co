import { cn } from '@/lib/utils'

export const componentStyles = {
  card: cn(
    'rounded-xl p-8 shadow-lg backdrop-blur-md',
    'bg-white dark:bg-slate-900',
    'border border-slate-200 dark:border-slate-800',
    'text-slate-900 dark:text-powder'
  ),
  container: cn(
    'rounded-lg shadow-md',
    'bg-white dark:bg-slate-900',
    'border border-slate-200 dark:border-slate-800',
    'text-slate-900 dark:text-powder'
  ),
  input: cn(
    'rounded-md border',
    'bg-white dark:bg-slate-800',
    'border-slate-300 dark:border-slate-700',
    'text-slate-900 dark:text-powder',
    'placeholder:text-slate-400 dark:placeholder:text-slate-500',
    'focus:ring-2 focus:ring-sky dark:focus:ring-azure'
  ),
  button: cn(
    'rounded-md transition-colors',
    'bg-sky hover:bg-sky/90 dark:bg-azure dark:hover:bg-azure/90',
    'text-white'
  ),
  // For image overlays
  imageOverlay: cn(
    'absolute inset-0',
    'bg-azure/30',
    'flex items-center justify-center gap-4'
  ),

  // For stat cards
  statCard: cn(
    'text-center p-4',
    'bg-gray-50 dark:bg-slate-800/50',
    'text-slate-900 dark:text-powder',
    'rounded-lg'
  ),

  // For feature cards
  featureCard: cn(
    'flex flex-col p-4',
    'border border-slate-200 dark:border-slate-700',
    'rounded-lg',
    'bg-white/50 dark:bg-slate-800/50',
    'text-slate-900 dark:text-powder'
  ),

  // For icons
  icon: {
    primary: 'w-6 h-6 text-sky dark:text-azure',
    large: 'w-12 h-12 text-white',
    stats: 'w-8 h-8 text-azure dark:text-sky mx-auto mb-2',
  },
}
