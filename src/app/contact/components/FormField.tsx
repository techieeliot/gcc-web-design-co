import { Children, cloneElement, isValidElement, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Icon } from '@/components/ui/icon';
import { FieldError } from 'react-hook-form';

interface FormFieldProps {
  label: string;
  id: string;
  error?: FieldError;
  description?: ReactNode;
  children: ReactNode;
  className?: string;
  required?: boolean;
}

export function FormField({
  label,
  id,
  error,
  description,
  children,
  className,
  required = false,
}: FormFieldProps) {
  return (
    <div className={cn('col-span-1 ', className)}>
      <label htmlFor={id} className="text-sm font-medium flex flex-col gap-2">
        <span>
          {label} {required && <span className="text-red-500">*</span>}
        </span>
        {description && (
          <p className="text-xs text-slate-600 dark:text-powder/80 mb-2">
            {description}
          </p>
        )}
        <div>
          {Children.map(children, (child) => {
            if (isValidElement(child)) {
              return cloneElement<any>(child, {
                id,
                className: cn(
                  // Base styles
                  'w-full px-4 py-2 rounded-lg transition-colors',
                  // Background
                  'bg-white dark:bg-slate-800',
                  // Border
                  'border border-slate-300 dark:border-slate-700 ring-2',
                  // Text
                  'text-slate-900 dark:text-powder',
                  // Placeholder
                  'placeholder:text-slate-500 dark:placeholder:text-slate-400',
                  // Focus states
                  'focus:ring-sky/50 focus:border-sky/50',
                  'dark:focus:ring-azure/50 dark:focus:border-azure/50',
                  error ? 'border-red-500 dark:border-red-500' : undefined
                ),
                'aria-invalid': error ? true : undefined,
                'aria-errormessage': error ? `${id}-error` : undefined,
              });
            }
            return child;
          })}
        </div>
        <ValidationError error={error} />
      </label>
    </div>
  );
}

export function ValidationError({ error }: { error?: FieldError }) {
  if (!error) return <div className="h-5" />;

  return (
    <div
      id={error.ref ? `${error.ref}-error` : 'root-error'}
      className=" min-h-5 flex items-center gap-1.5 text-red-500 dark:text-red-400"
      role="alert"
    >
      <Icon name="AlertCircle" className="w-3.5 h-3.5 flex-shrink-0" />{' '}
      <span>{error.message}</span>
    </div>
  );
}
