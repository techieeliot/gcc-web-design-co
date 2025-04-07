"use client";

import React from "react";
import { motion } from "@/lib/animations";

interface BlueberryIconProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const BlueberryIcon: React.FC<BlueberryIconProps> = ({
  className = "",
  size = "md",
}) => {
  const sizeClasses = {
    sm: "text-6xl",
    md: "text-7xl",
    lg: "text-8xl",
    xl: "text-9xl",
  };

  return (
    <motion.div
      initial={{ scale: 0.95, rotate: -2 }}
      animate={{
        scale: [0.95, 1.02, 0.95],
        rotate: [-2, 2, -2],
      }}
      transition={{
        repeat: Infinity,
        duration: 8,
        ease: "easeInOut",
      }}
      className={`flex items-center justify-center ${sizeClasses[size]} ${className}`}
      style={{ display: "inline-block" }}
    >
      <span className="filter drop-shadow-lg" role="img" aria-label="blueberry">
        🫐
      </span>
    </motion.div>
  );
};

export default BlueberryIcon;
