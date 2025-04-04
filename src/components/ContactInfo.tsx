"use client";
import * as LucideIcon from "lucide-react";

import { textStyles } from "@/lib/styles";
import { cn } from "@/lib/utils";
import { Link } from "./ui/link";
import { motion } from "@/lib/animations";
import { socialLinks } from "@/data";
import { MapPin, Phone } from "@/lib/icons";

export default function ContactInfo() {
  return (
    <div className="lg:col-span-2">
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          textStyles.h4,
          "text-white mb-5 pb-2 border-b border-white/20",
        )}
      >
        Contact Us
      </motion.h3>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.2,
          staggerChildren: 0.1,
          delayChildren: 0.3,
        }}
        className="flex gap-3 mb-6"
      >
        {socialLinks.map(({ href, icon: Icon, label, hoverColor }, index) => (
          <motion.div
            key={href}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 15,
              delay: 0.2 + index * 0.1,
            }}
            whileHover={{ y: -3 }}
          >
            <Link
              href={href}
              aria-label={label}
              className={cn(
                "group p-2 bg-white/10 rounded-full",
                "hover:bg-white/20 transition-all duration-200",
                "flex items-center justify-center",
                "backdrop-blur-sm",
              )}
            >
              <Icon
                className={cn(
                  "w-5 h-5 text-white transition-all duration-200",
                  hoverColor,
                )}
              />
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <motion.address
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="not-italic text-white/90 text-sm space-y-3"
      >
        <motion.div
          className="flex items-start gap-2"
          whileHover={{ x: 3 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <MapPin className="w-4 h-4 text-white/70 mt-0.5 flex-shrink-0" />
          <div>
            110 Lake Forest Ln
            <br />
            Clinton, MS 39056
          </div>
        </motion.div>

        <motion.div
          className="flex items-center gap-2"
          whileHover={{ x: 3 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <Phone className="w-4 h-4 text-white/70 flex-shrink-0" />
          <Link href="tel:+16623126815">+1 (662) 312-6815</Link>
        </motion.div>
      </motion.address>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-6 text-white/70 text-xs"
      >
        <p>© {new Date().getFullYear()} SanforDEV Consulting LLC</p>
      </motion.div>
    </div>
  );
}
