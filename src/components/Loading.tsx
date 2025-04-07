export default function Loading() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="h-8 w-48 bg-slate-200 dark:bg-slate-800 rounded mb-8 animate-pulse" />
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="rounded-lg border border-slate-200 dark:border-slate-800 overflow-hidden"
          >
            <div className="h-48 bg-slate-200 dark:bg-slate-800 animate-pulse" />
            <div className="p-4 space-y-3">
              <div className="h-6 bg-slate-200 dark:bg-slate-800 rounded animate-pulse" />
              <div className="h-4 w-24 bg-slate-200 dark:bg-slate-800 rounded animate-pulse" />
              <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
