"use client";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Link } from "../ui/link";
import { desktopLinkVariants, motion, AnimatePresence } from "@/lib/animations";
import { NavLink } from "../ui/nav-link";
import { Shimmer } from "../ui/shimmer";
import { usePathname } from "next/navigation";
import { Icon } from "../ui/icon";

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const links: { href: string; label: string }[] = [
  { href: "/", label: "Welcome" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Our Work" },
  // { href: '/blog', label: 'Blog' },
  { href: "/contact", label: "Contact" },
];

export function ClientHeader() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <MainNav isOpen={isOpen} setIsOpen={setIsOpen} />
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export function MainNav({ isOpen, setIsOpen }: MobileNavProps) {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      // Remove any logic that changes the background on scroll
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <motion.div
        className={cn(
          "fixed top-0 left-0 right-0",
          "z-[100]",
          "bg-background dark:bg-background", // Changed to solid background
          "border-b border-border",
          "shadow-sm",
          isOpen && "opacity-0 pointer-events-none",
        )}
      >
        <header className="fixed top-0 left-0 right-0 z-50 bg-slate-50 dark:bg-slate-900 shadow-sm">
          <div className="container max-w-7xl mx-auto px-4">
            <div
              className={cn(
                "flex justify-between items-center h-14 sm:h-16 md:h-20",
                // Improve text contrast when scrolled
                isScrolled && "text-slate-900 dark:text-white",
              )}
            >
              {/* Logo Section with Shimmer fallback */}
              <motion.div
                whileTap={{ scale: 0.95 }}
                className="relative"
                tabIndex={-1}
                transformTemplate={(props, transform) =>
                  `translateZ(0) ${transform}`
                }
              >
                <Link
                  href="/"
                  noButtonWrapper={true} // Use this to bypass the Button wrapper
                  className={cn(
                    "no-underline flex items-center gap-2 sm:gap-3",
                    "rounded-md px-3 py-3",
                    "hover:bg-azure/10 transition-all duration-300",
                    "relative overflow-visible",
                  )}
                >
                  {/* Logo container with proper spacing and visibility */}
                  <div className="relative flex items-center justify-center overflow-visible">
                    {/* Outer animated ring */}
                    <motion.div
                      className={cn(
                        "absolute rounded-full border-2 border-sky/20 dark:border-azure/20",
                        "-left-1 -top-1",
                      )}
                      animate={{
                        opacity: [0.4, 0.8, 0.4],
                        rotate: [0, 360],
                      }}
                      transition={{
                        opacity: {
                          duration: 3,
                          repeat: Infinity,
                          repeatType: "mirror",
                        },
                        rotate: {
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
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
                          ease: "easeInOut",
                        },
                      }}
                      className={cn(
                        "rounded-full bg-slate flex items-center justify-center",
                        "relative z-10",
                        "w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-14 lg:h-14",
                      )}
                    >
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-sky/20 dark:border-azure/20"
                        whileHover={{
                          borderColor: [
                            "rgba(56, 189, 248, 0.2)",
                            "rgba(129, 140, 248, 0.3)",
                            "rgba(56, 189, 248, 0.2)",
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
                          ease: "easeInOut",
                          repeat: Infinity,
                          repeatType: "mirror",
                        }}
                      />

                      {/* Add Shimmer while image loads */}
                      <div className="relative w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-14 lg:h-14">
                        <Shimmer className="absolute inset-0 rounded-full" />
                        <Image
                          src="/blueberry-atom.svg"
                          alt="SanforDEV Logo"
                          width={36}
                          height={36}
                          className={cn(
                            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2", // Add this line for centering
                            "w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9",
                            "object-contain",
                            "transform-gpu",
                            "relative z-10",
                          )}
                          onLoadingComplete={(img) => {
                            img.classList.add("opacity-100");
                            img.previousElementSibling?.classList.add(
                              "opacity-0",
                            );
                          }}
                        />
                      </div>

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
                  <span
                    className={cn(
                      "font-bold text-base sm:text-lg md:text-lg lg:text-xl leading-none whitespace-nowrap relative z-10",
                      isScrolled
                        ? "text-slate-900 dark:text-white"
                        : "text-slate-700 dark:text-powder",
                    )}
                  >
                    Sanfor
                    <motion.span
                      className="text-sky relative inline-block"
                      animate={{
                        color: ["#38bdf8", "#818cf8", "#38bdf8"],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      DEV
                    </motion.span>
                    <span className="hidden sm:inline md:hidden xl:inline">
                      {" "}
                      Consulting
                    </span>
                  </span>
                </Link>
              </motion.div>

              {/* Desktop Nav - Enhanced with animations */}
              <motion.nav
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="hidden md:flex h-full items-center space-x-4"
              >
                <ul className="flex items-center gap-1 md:gap-1 lg:gap-2 xl:gap-4">
                  {links.map(({ href, label }, i) => (
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
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                    delay: 0.8,
                  }}
                  className="ml-2 lg:ml-4"
                >
                  {/* <ThemeToggle /> */}
                </motion.div>
              </motion.nav>

              {/* Mobile Menu Button - Enhanced interaction */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="md:hidden flex items-center gap-2"
              >
                {/* <ThemeToggle /> */}
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(!isOpen)}
                  className={cn(
                    "p-2 rounded-full",
                    isScrolled
                      ? "text-slate-900 hover:text-sky dark:text-white dark:hover:text-azure"
                      : "text-slate-700 hover:text-sky dark:text-powder dark:hover:text-azure",
                    "transition-colors hover:bg-slate-100 dark:hover:bg-slate-800",
                  )}
                  aria-label={isOpen ? "Close menu" : "Open menu"}
                  aria-expanded={isOpen}
                >
                  <motion.div
                    initial={false}
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isOpen ? (
                      <Icon name="X" className="w-6 h-6" />
                    ) : (
                      <Icon name="Menu" className="w-6 h-6" />
                    )}
                  </motion.div>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </header>
      </motion.div>

      {/* Mobile Navigation */}
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export function MobileNav({ isOpen, setIsOpen }: MobileNavProps) {
  const pathname = usePathname();

  // Close on Escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, setIsOpen]);

  // Close on route change
  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname, setIsOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-50 dark:bg-slate-900 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className={cn(
              "fixed top-0 right-0 h-full w-[280px] z-50",
              "bg-slate-50 dark:bg-slate-900", // Solid backgrounds here as well
              "border-l border-slate-200 dark:border-slate-800",
              "shadow-xl",
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
                            type: "spring",
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
  );
}
