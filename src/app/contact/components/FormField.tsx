import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/icon";

interface FormFieldProps {
  label: string;
  id: string;
  error?: string;
  description?: ReactNode;
  children: ReactNode;
  className?: string;
}

export function FormField({
  label,
  id,
  error,
  description,
  children,
  className,
}: FormFieldProps) {
  const errorClasses = "text-red-500 dark:text-red-400 text-sm font-medium";

  return (
    <div className={cn("col-span-1 flex flex-col gap-2", className)}>
      <label
        htmlFor={id}
        className="text-sm font-medium text-slate-700 dark:text-slate-300"
      >
        {label}
      </label>

      {description && (
        <p className="text-xs text-slate-600 dark:text-powder/80 mb-2">
          {description}
        </p>
      )}

      {children}

      {/* Fixed height error container with icon */}
      <div className="min-h-[20px] flex items-center gap-1.5">
        {error && (
          <>
            <Icon
              name="AlertCircle"
              className="w-3.5 h-3.5 flex-shrink-0 text-red-500 dark:text-red-400"
            />
            <p className={errorClasses}>{error}</p>
          </>
        )}
      </div>
    </div>
  );
}
