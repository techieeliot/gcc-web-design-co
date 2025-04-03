'use client'

import { useState, useEffect } from 'react'
import { ThemeToggle } from './ui/theme-toggle'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { NavLink } from './ui/nav-link.client'
import { Menu, X, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Link } from './ui/link'
import { MobileNav } from './MobileNav'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      // Remove any logic that changes the background on scroll
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Enhanced animations
  const menuVariants = {
    closed: {
      x: '100%',
      opacity: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
  }

  const backdropVariants = {
    closed: {
      opacity: 0,
      transition: { duration: 0.2 },
    },
    open: {
      opacity: 1,
      transition: { duration: 0.2 },
    },
  }

  // Animation for mobile menu items
  const menuItemVariants = {
    closed: {
      x: -20,
      opacity: 0,
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  }

  // Animation for desktop nav links
  const desktopLinkVariants = {
    initial: {
      y: -10,
      opacity: 0,
    },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
    hover: {
      y: -2,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 20,
      },
    },
  }

  // Logo animation
  const logoVariants = {
    initial: {
      y: -20,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 25,
        delay: 0.1,
      },
    },
  }

  const navLinks = [
    { href: '/', label: 'Welcome' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Our Work' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <motion.div
        className={cn(
          'fixed top-0 left-0 right-0',
          'z-[100]',
          'transition-all duration-300 ease-in-out',
          'bg-slate-50 dark:bg-slate-900',
          'shadow-lg border-b border-slate-200 dark:border-slate-800',
          // Hide the header when mobile nav is open
          isOpen && 'opacity-0 pointer-events-none'
        )}
      >
        <header className="container mx-auto px-4">
          <div
            className={cn(
              'flex justify-between items-center h-14 sm:h-16 md:h-20',
              // Improve text contrast when scrolled
              isScrolled && 'text-slate-900 dark:text-white drop-shadow-sm'
            )}
          >
            {/* Logo Section - Enhanced with animation */}
            <motion.div
              whileTap={{ scale: 0.95 }}
              className="relative"
              tabIndex={-1}
            >
              <Link
                href="/"
                noButtonWrapper={true} // Use this to bypass the Button wrapper
                className={cn(
                  'no-underline flex items-center gap-2 sm:gap-3',
                  'rounded-md px-3 py-3',
                  'hover:bg-azure/10 transition-all duration-300',
                  'relative overflow-visible'
                )}
              >
                {/* Logo container with proper spacing and visibility */}
                <div className="relative flex items-center justify-center overflow-visible">
                  {/* Outer animated ring */}
                  <motion.div
                    className={cn(
                      'absolute rounded-full border-2 border-sky/20 dark:border-azure/20',
                      '-left-1 -top-1'
                    )}
                    animate={{
                      opacity: [0.4, 0.8, 0.4],
                      rotate: [0, 360],
                    }}
                    transition={{
                      opacity: {
                        duration: 3,
                        repeat: Infinity,
                        repeatType: 'mirror',
                      },
                      rotate: {
                        duration: 20,
                        repeat: Infinity,
                        ease: 'linear',
                      },
                    }}
                  />

                  {/* Logo circle */}
                  <motion.div
                    whileHover={{
                      scale: [1, 1.05, 1],
                      transition: {
                        duration: 0.8,
                        repeat: 0,
                        ease: 'easeInOut',
                      },
                    }}
                    className={cn(
                      'rounded-full bg-slate flex items-center justify-center',
                      'relative z-10',
                      'w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-14 lg:h-14'
                    )}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-sky/20 dark:border-azure/20"
                      whileHover={{
                        borderColor: [
                          'rgba(56, 189, 248, 0.2)',
                          'rgba(129, 140, 248, 0.3)',
                          'rgba(56, 189, 248, 0.2)',
                        ],
                      }}
                      transition={{ duration: 2, repeat: 0 }}
                    />

                    {/* Pulsing background */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-sky/10 dark:bg-azure/10"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{
                        duration: 3,
                        ease: 'easeInOut',
                        repeat: Infinity,
                        repeatType: 'mirror',
                      }}
                    />

                    {/* Logo image */}
                    <Image
                      src="/blueberry-atom.svg"
                      alt="SanforDEV Logo"
                      width={36}
                      height={36}
                      className={cn(
                        'w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9',
                        'object-contain',
                        'transform-gpu'
                      )}
                    />

                    {/* Hover effect */}
                    <motion.div
                      className="absolute inset-0 bg-azure/20 rounded-full"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.4 }}
                    />
                  </motion.div>
                </div>

                {/* Brand text */}
                <h1
                  className={cn(
                    'font-bold text-base sm:text-lg md:text-lg lg:text-xl leading-none whitespace-nowrap relative z-10',
                    isScrolled
                      ? 'text-slate-900 dark:text-white'
                      : 'text-slate-700 dark:text-powder'
                  )}
                >
                  Sanfor
                  <motion.span
                    className="text-sky relative inline-block"
                    animate={{
                      color: ['#38bdf8', '#818cf8', '#38bdf8'],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    DEV
                  </motion.span>
                  <span className="hidden sm:inline md:hidden xl:inline">
                    {' '}
                    Consulting
                  </span>
                </h1>
              </Link>
            </motion.div>

            {/* Desktop Nav - Enhanced with animations */}
            <motion.nav
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="hidden md:flex h-full items-center"
            >
              <ul className="flex items-center gap-1 md:gap-1 lg:gap-2 xl:gap-4">
                {navLinks.map(({ href, label }, i) => (
                  <motion.li
                    key={href}
                    custom={i}
                    variants={desktopLinkVariants}
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                  >
                    <NavLink href={href} label={label} custom={i} />
                  </motion.li>
                ))}
              </ul>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 15,
                  delay: 0.8,
                }}
                className="ml-2 lg:ml-4"
              >
                <ThemeToggle />
              </motion.div>
            </motion.nav>

            {/* Mobile Menu Button - Enhanced interaction */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="md:hidden flex items-center gap-2"
            >
              <ThemeToggle />
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                  'p-2 rounded-full',
                  isScrolled
                    ? 'text-slate-900 hover:text-sky dark:text-white dark:hover:text-azure'
                    : 'text-slate-700 hover:text-sky dark:text-powder dark:hover:text-azure',
                  'transition-colors hover:bg-slate-100 dark:hover:bg-slate-800'
                )}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isOpen}
              >
                <motion.div
                  initial={false}
                  animate={{ rotate: isOpen ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </motion.div>
              </motion.button>
            </motion.div>
          </div>
        </header>
      </motion.div>

      {/* Mobile Navigation */}
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} links={navLinks} />
    </>
  )
}
