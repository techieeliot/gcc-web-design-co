import { Shimmer } from './ui/shimmer';

export default function Loading() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <Shimmer className="h-10 w-1/2 mb-4" />
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="rounded-lg border border-slate-200 dark:border-slate-800 overflow-hidden"
          >
            <Shimmer height={200} width="full" />
            <div className="p-4 space-y-3">
              <Shimmer height={20} width="full" />
              <Shimmer height={16} width="full" />
              <Shimmer height={16} width="full" />
              <Shimmer height={16} width="full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
