import * as LucideIcons from "lucide-react";
import { cn } from "@/lib/utils";
import { AlertCircle } from "lucide-react";

export type IconName = keyof typeof LucideIcons;

interface IconProps {
  name: IconName;
  className?: string;
  size?: number;
  strokeWidth?: number;
  fallback?: boolean;
}

export function Icon({
  name,
  className,
  size = 24,
  strokeWidth = 1.5,
  fallback = true,
}: IconProps) {
  const Component = LucideIcons[name] as LucideIcons.LucideIcon;

  if (!Component) {
    console.warn(`Icon "${name}" not found`);

    if (!fallback) return null;

    return (
      <AlertCircle
        className={cn(
          "flex-shrink-0 text-red-500 dark:text-red-400",
          className,
        )}
        width={size}
        height={size}
        strokeWidth={strokeWidth}
        aria-label={`Icon "${name}" not found`}
      />
    );
  }

  return (
    <Component
      className={cn("flex-shrink-0", className)}
      width={size}
      height={size}
      strokeWidth={strokeWidth}
    />
  );
}
