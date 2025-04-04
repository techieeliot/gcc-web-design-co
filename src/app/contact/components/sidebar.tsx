"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Mail, MapPin, Phone } from "@/lib/icons";
import Link from "next/link";

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  content: string | React.ReactNode;
}

const ContactInfo = ({ icon, title, content }: ContactInfoProps) => (
  <div className="flex gap-4">
    <div className="flex-shrink-0">
      <div className="p-3 bg-sky/10 dark:bg-azure/10 rounded-lg">{icon}</div>
    </div>
    <div>
      <h3 className="font-medium mb-1">{title}</h3>
      <div className="text-slate-600 dark:text-slate-300">{content}</div>
    </div>
  </div>
);

export function ContactSidebar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn(
        "lg:col-span-4 h-fit",
        "bg-white dark:bg-slate-800",
        "p-6 lg:p-8 rounded-xl shadow-sm ",
      )}
    >
      <div className="space-y-6">
        <ContactInfo
          icon={<Mail className="w-6 h-6 text-sky dark:text-azure" />}
          title="Email"
          content={
            <Link href="mailto:devsouth@gmail.com">devsouth@gmail.com</Link>
          }
        />
        <ContactInfo
          icon={<Phone className="w-6 h-6 text-sky dark:text-azure" />}
          title="Phone"
          content={<Link href="tel:+16012979575">(601) 297-9575</Link>}
        />
        <ContactInfo
          icon={<MapPin className="w-6 h-6 text-sky dark:text-azure" />}
          title="Location"
          content="Jackson, Mississippi, USA"
        />
      </div>
    </motion.div>
  );
}
