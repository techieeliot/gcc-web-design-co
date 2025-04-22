export function Pill({
  children,
  className,
  ...props
}: React.HTMLProps<HTMLDivElement>) {
  return (
    <span
      className={`text-sm text-night dark:text-white bg-muted rounded-full inline-flex items-center px-3 py-1 font-medium ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
