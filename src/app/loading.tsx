import { Shimmer } from '@/components/ui/shimmer';

export default function Loading() {
  return (
    <div className="space-y-16 animate-in fade-in duration-300">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <Shimmer height={48} width="70%" rounded="lg" />
          <Shimmer height={80} width="90%" rounded="lg" />
          <Shimmer height={40} width={120} rounded="lg" />
        </div>
        <Shimmer height={300} rounded="xl" className="w-full" />
      </section>

      {/* Content Sections */}
      <div className="space-y-8">
        {[...Array(3)].map((_, i) => (
          <section key={i} className="space-y-4">
            <Shimmer height={32} width="40%" rounded="lg" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[...Array(3)].map((_, j) => (
                <Shimmer key={j} height={160} rounded="lg" />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
