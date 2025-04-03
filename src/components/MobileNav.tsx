'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NavLink } from './ui/nav-link.client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

interface MobileNavProps {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
  links: Array<{ href: string; label: string }>
}

export function MobileNav({ isOpen, setIsOpen, links }: MobileNavProps) {
  const pathname = usePathname()

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, setIsOpen])

  // Close on route change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname, setIsOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className={cn(
              'fixed top-0 right-0 h-full w-[280px] z-50',
              'bg-white dark:bg-slate-900', // Always solid
              'border-l border-slate-200 dark:border-slate-800',
              'shadow-xl'
            )}
          >
            <div className="flex flex-col h-full">
              {/* Nav links */}
              <nav className="flex-1 overflow-y-auto p-4">
                <motion.ul
                  className="space-y-2"
                  initial="closed"
                  animate="open"
                  variants={{
                    open: {
                      transition: { staggerChildren: 0.1 },
                    },
                    closed: {},
                  }}
                >
                  {links.map((link, i) => (
                    <motion.li
                      key={link.href}
                      variants={{
                        open: {
                          opacity: 1,
                          x: 0,
                          transition: {
                            type: 'spring',
                            damping: 20,
                          },
                        },
                        closed: { opacity: 0, x: 20 },
                      }}
                    >
                      <NavLink
                        {...link}
                        onClick={() => setIsOpen(false)}
                        custom={i}
                      />
                    </motion.li>
                  ))}
                </motion.ul>
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
