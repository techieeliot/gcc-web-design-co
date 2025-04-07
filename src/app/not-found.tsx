"use client";

import { Icon } from "@/components/ui/icon";
import { motion } from "@/lib/animations";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Prevents hydration mismatch
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-xl"
      >
        <div className="mb-8 flex justify-center text-9xl">🫐</div>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          404 - Page Not Found
        </h1>
        <p className="text-base leading-relaxed mb-8">
          Whoops! It seems you've wandered off the beaten path and landed in our
          blueberry patch. Don't fret—sometimes the best adventures are
          unplanned. Let's get you back home and back on track.
        </p>

        <Link
          href="/"
          className={cn(
            "inline-flex items-center gap-2",
            "px-6 py-3 rounded-lg",
            "bg-sky hover:bg-sky/90 dark:bg-azure dark:hover:bg-azure/90",
            "text-white font-medium",
            "transition-colors",
          )}
        >
          <Icon name="ArrowLeft" className="w-4 h-4" />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
