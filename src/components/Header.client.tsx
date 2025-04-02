'use client'

import { useState, useEffect } from 'react'
import { ThemeToggle } from './ui/theme-toggle'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { NavLink } from './ui/nav-link.client'
import { Menu, X, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Link } from './ui/link'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Enhanced animations
  const menuVariants = {
    closed: {
      x: '100%',
      opacity: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        when: 'afterChildren',
      },
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
  }

  const backdropVariants = {
    closed: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
    open: {
      opacity: 1,
      transition: { duration: 0.3 },
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
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 30,
      }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50',
        'transition-all duration-500 ease-in-out',
        isScrolled
          ? 'bg-background/85 backdrop-blur-md shadow-lg'
          : 'bg-background'
      )}
    >
      <header className="container mx-auto px-4">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
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
                    transition: { duration: 0.8, repeat: 0, ease: 'easeInOut' },
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
                    alt="SanforDev Logo"
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
              <h1 className="text-slate-700 dark:text-powder font-bold text-base sm:text-lg md:text-lg lg:text-xl leading-none whitespace-nowrap relative z-10">
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
                  Dev
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
                'text-slate-700 hover:text-sky',
                'dark:text-powder dark:hover:text-azure',
                'transition-colors hover:bg-slate-100 dark:hover:bg-slate-800'
              )}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.div>

          {/* Mobile Nav Drawer - Enhanced animations */}
          <AnimatePresence>
            {isOpen && (
              <>
                <motion.div
                  className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-50 md:hidden"
                  variants={backdropVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  onClick={() => setIsOpen(false)}
                />
                <motion.nav
                  className={cn(
                    'fixed right-0 top-0 bottom-0 w-72 z-50 md:hidden',
                    'bg-background/95 backdrop-blur-md shadow-xl',
                    'p-6 overflow-y-auto'
                  )}
                  variants={menuVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex justify-between items-center mb-8">
                      {/* Mobile Menu Header */}
                      <motion.h2
                        variants={menuItemVariants}
                        className="text-lg font-semibold text-slate-700 dark:text-powder"
                      >
                        Navigation
                      </motion.h2>
                      <motion.button
                        variants={menuItemVariants}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          'p-2 rounded-full',
                          'text-slate-700 hover:text-sky',
                          'dark:text-powder dark:hover:text-azure',
                          'transition-colors hover:bg-slate-100 dark:hover:bg-slate-800'
                        )}
                        aria-label="Close menu"
                      >
                        <X className="w-5 h-5" />
                      </motion.button>
                    </div>
                    <ul className="space-y-4 flex-1">
                      {navLinks.map(({ href, label }, i) => (
                        <motion.li
                          key={href}
                          variants={menuItemVariants}
                          custom={i}
                          className="transform-gpu"
                        >
                          <div className="flex items-center w-full group">
                            <NavLink
                              href={href}
                              label={label}
                              onClick={handleLinkClick}
                              custom={i}
                            />
                            <motion.div
                              animate={{ x: [0, 4, 0] }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                repeatType: 'mirror',
                                ease: 'easeInOut',
                              }}
                              className="ml-2"
                            >
                              <ChevronRight className="w-4 h-4 text-sky/70 dark:text-azure/70 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </motion.div>
                          </div>
                        </motion.li>
                      ))}
                    </ul>
                    <motion.div
                      variants={menuItemVariants}
                      className={cn('pt-8 border-t border-border', 'mt-auto')}
                    >
                      <div className="flex items-center justify-between">
                        {/* Theme Toggle Text */}
                        <span className="text-sm text-slate-600 dark:text-powder/80">
                          Switch theme
                        </span>
                        <ThemeToggle />
                      </div>
                    </motion.div>
                  </div>
                </motion.nav>
              </>
            )}
          </AnimatePresence>
        </div>
      </header>
    </motion.div>
  )
}
