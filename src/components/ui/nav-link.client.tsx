'use client'

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { Link } from './link'
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface NavLinkProps {
  href: string
  label: string
  onClick?: () => void
  custom?: number
  className?: string
}

const linkVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      type: 'spring',
      stiffness: 300,
      damping: 30,
    },
  }),
  closed: { opacity: 0, x: 20 },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      type: 'spring',
      stiffness: 300,
      damping: 30,
    },
  }),
}

export function NavLink({
  href,
  label,
  onClick,
  custom,
  className,
}: NavLinkProps) {
  const pathname = usePathname()
  const isScrolled = useScrollPosition(10)

  return (
    <Link
      variant="nav"
      size="nav"
      href={href}
      data-active={pathname === href}
      onClick={onClick}
      className={cn(
        className,
        'relative transition-colors duration-200',
        isScrolled
          ? 'text-slate-900 hover:text-sky dark:text-white dark:hover:text-azure font-medium'
          : 'text-slate-700 hover:text-sky dark:text-powder dark:hover:text-azure',
        pathname === href && 'text-sky dark:text-azure font-medium'
        // Removed any drop-shadow or opacity changes on scroll
      )}
    >
      <motion.span
        variants={linkVariants}
        custom={custom}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-block relative z-10"
        tabIndex={-1}
      >
        {label}
      </motion.span>
    </Link>
  )
}

// Add this custom hook in the same file
function useScrollPosition(threshold = 0) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Use requestAnimationFrame for smoother updates
      requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > threshold)
      })
    }

    // Debounce scroll events
    let timeoutId: number
    const debouncedHandleScroll = () => {
      if (timeoutId) {
        window.cancelAnimationFrame(timeoutId)
      }
      timeoutId = window.requestAnimationFrame(handleScroll)
    }

    window.addEventListener('scroll', debouncedHandleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll)
      if (timeoutId) {
        window.cancelAnimationFrame(timeoutId)
      }
    }
  }, [threshold])

  return isScrolled
}
