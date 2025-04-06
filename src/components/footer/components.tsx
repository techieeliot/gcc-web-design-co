"use client";

import { cn } from "@/lib/utils";
import { Link } from "@/components/ui/link";
import { companySocialLinks } from "@/data";
import {
  footerFadeIn,
  motion,
  quickLinkContainerVariants,
  quickLinkItemVariants,
} from "@/lib/animations";
import {
  ChevronRight,
  Home,
  Info,
  LayoutGrid,
  Settings,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  Heart,
} from "@/lib/icons";

export function QuickLinks({ showHeading = false }) {
  const links = [
    {
      href: "/",
      label: "Home",
      icon: Home,
      description: "Back to our homepage",
    },
    {
      href: "/about",
      label: "About",
      icon: Info,
      description: "Learn more about us",
    },
    {
      href: "/services",
      label: "Services",
      icon: Settings,
      description: "What we can do for you",
    },
    {
      href: "/portfolio",
      label: "Portfolio",
      icon: LayoutGrid,
      description: "See our past work",
    },
    // {
    //   href: '/blog',
    //   label: 'Blog',
    //   icon: FileCode,
    //   description: 'Latest tech insights',
    // },
    {
      href: "/contact",
      label: "Contact",
      icon: Mail,
      description: "Get in touch with us",
    },
  ];

  return (
    <div
      className={cn(
        "text-center sm:text-left w-full",
        showHeading ? "mb-4" : "mb-0",
      )}
    >
      {showHeading && (
        <motion.h3
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-slate-800 dark:text-powder text-lg font-semibold mb-3"
        >
          Quick Links
        </motion.h3>
      )}

      <motion.ul
        initial="hidden"
        animate="visible"
        variants={quickLinkContainerVariants}
        className={cn("space-y-1.5", "grid grid-cols-2 gap-4 ")}
      >
        {links.map(({ href, label, icon: Icon, description }) => (
          <motion.li
            key={href}
            variants={quickLinkItemVariants}
            whileHover={{ x: 3 }}
            className="w-full"
          >
            <Link
              href={href}
              variant="standaloneLink"
              className={cn(
                "group flex items-center gap-2",
                "py-1 px-2 rounded-md",
                "hover:bg-sky/5 dark:hover:bg-azure/5",
                "transition-colors duration-200",
                "text-slate-700 dark:text-slate-300",
                "hover:text-sky dark:hover:text-azure",
              )}
            >
              <Icon className="w-4 h-4 text-slate-400 dark:text-slate-500 group-hover:text-sky dark:group-hover:text-azure transition-colors" />

              <span className="font-medium">{label}</span>

              <ChevronRight className="w-3 h-3 text-slate-300 dark:text-slate-600 group-hover:text-sky dark:group-hover:text-azure opacity-0 group-hover:opacity-100 transition-all ml-1" />
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}

interface ContactItemProps {
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  children: React.ReactNode;
  variant?: "nav" | "default";
  showExternalIcon?: boolean;
}

function ContactItem({
  icon: Icon,
  href,
  children,
  variant = "nav",
  showExternalIcon = true,
}: ContactItemProps) {
  return (
    <motion.div
      whileHover={{ x: 5 }}
      transition={{ type: "spring", stiffness: 300 }}
      transformTemplate={(props, transform) => `translateZ(0) ${transform}`}
      className="flex items-center justify-start gap-3 md:gap-4 lg:gap-5 max-w-[300px] mx-auto sm:mx-0"
    >
      <div className="p-2 rounded-full bg-sky/10 dark:bg-azure/10 shrink-0">
        <Icon className="w-5 h-5 text-sky dark:text-azure" />
      </div>
      <Link
        href={href}
        variant={variant}
        className={cn(
          "text-slate-600 dark:text-powder/80",
          "hover:text-sky dark:hover:text-azure",
          "group flex items-center gap-1",
        )}
      >
        {children}
        {showExternalIcon && (
          <motion.span
            initial={{ opacity: 0, x: -5 }}
            whileHover={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className="inline-flex"
          >
            <ExternalLink className="w-3 h-3" />
          </motion.span>
        )}
      </Link>
    </motion.div>
  );
}

export function Contact() {
  return (
    <motion.section
      custom={2}
      variants={footerFadeIn}
      className="widget contact text-center sm:text-left lg:col-span-5"
    >
      <h3 className="text-slate-800 dark:text-powder text-xl font-semibold mb-4">
        Contact Us
      </h3>
      <div className="space-y-4">
        <ContactItem icon={Mail} href="mailto:devsouth.us@gmail.com">
          devsouth.us@gmail.com
        </ContactItem>
        <ContactItem icon={Phone} href="tel:+16623126815">
          +1 (662) 312-6815
        </ContactItem>
        <ContactItem
          icon={MapPin}
          href="https://www.google.com/maps/place/110+Lake+Forest+Ln,+Clinton,+MS+39056"
          showExternalIcon={false}
        >
          <address className="text-slate-600 dark:text-powder/80 not-italic">
            110 Lake Forest Ln
            <br />
            Clinton, MS 39056
          </address>
        </ContactItem>
      </div>
    </motion.section>
  );
}

export function CompanyInfo() {
  return (
    <motion.div
      custom={0}
      variants={footerFadeIn}
      className="text-center sm:text-left lg:col-span-4"
    >
      <h3 className="text-slate-800 dark:text-powder text-xl font-semibold mb-4">
        About SanforDEV
      </h3>
      {/* ... Logo and company description ... */}
      <SocialLinks />
    </motion.div>
  );
}

export function SocialLinks() {
  return (
    <div className="flex items-center justify-center sm:justify-start gap-3 mt-5">
      {companySocialLinks.map(({ href, icon: Icon, label, color }, index) => (
        <motion.div
          key={href}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * (index + 3) }}
          whileHover={{ y: -3 }}
          transformTemplate={(props, transform) => `translateZ(0) ${transform}`}
        >
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex items-center justify-center",
              "w-10 h-10 rounded-full",
              "transition-all duration-300",
              color,
              "dark:text-powder/90",
            )}
            aria-label={label}
          >
            <Icon className="w-5 h-5" />
          </Link>
        </motion.div>
      ))}
    </div>
  );
}

export function FooterBackground() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      viewport={{ once: true }}
      className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden"
    >
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-sky/5 dark:bg-azure/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-48 -left-32 w-96 h-96 bg-sky/5 dark:bg-azure/5 rounded-full blur-3xl" />
    </motion.div>
  );
}

export function Copyright({ currentYear }: { currentYear: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5 }}
      className={cn(
        "border-t border-slate-200 dark:border-slate-800",
        "mt-12 pt-8 pb-8",
      )}
    >
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-600 dark:text-powder/80 flex items-center">
          &copy; {currentYear} SanforDEV Consulting. All rights reserved.
        </p>
        <MadeWithLove />
      </div>
    </motion.div>
  );
}

function MadeWithLove() {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.7 }}
      className="text-sm text-slate-500 dark:text-powder/70 flex items-center"
    >
      Made with
      <motion.span
        animate={{ scale: [1, 1.2, 1] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
        }}
        transformTemplate={(props, transform) => `translateZ(0) ${transform}`}
        className="inline-block mx-1 text-red-500"
      >
        <Heart className="w-4 h-4 fill-current" />
      </motion.span>
      in Mississippi
    </motion.p>
  );
}
