'use client'

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { Link } from './link'

interface NavLinkProps {
  href: string
  label: string
  onClick?: () => void
  custom?: number
  className?: string
}

const linkVariants = {
  closed: { x: 20, opacity: 0 },
  open: (i: number) => ({
    x: 0,
    opacity: 1,
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
  return (
    <Link
      variant="nav"
      size="nav"
      href={href}
      data-active={pathname === href}
      onClick={onClick}
      className={className}
    >
      <motion.span
        variants={linkVariants}
        custom={custom}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-block"
        tabIndex={-1}
      >
        {label}
      </motion.span>
    </Link>
  )
}
