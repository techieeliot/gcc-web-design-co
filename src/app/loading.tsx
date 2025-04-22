import PageWrapper from '@/components/PageWrapper';
import { Shimmer } from '@ui/shimmer';

export default function Loading() {
  return (
    <PageWrapper>
      <header className="flex flex-col gap-4">
        <div className="w-1/2 flex flex-col gap-6">
          <Shimmer width="full" height={24} />
          <Shimmer width="full" height={8} />
        </div>
        <div className="w-full h-80 flex flex-col gap-6">
          <Shimmer width="full" height="full" />
        </div>
      </header>
      <section className="flex flex-col gap-8">
        <div className="flex gap-4">
          <Shimmer width="full" height={64} />
          <Shimmer width="full" height={64} />
          <Shimmer width="full" height={64} />
        </div>
      </section>
      <footer className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <Shimmer width="full" height={48} />
        </div>
      </footer>
    </PageWrapper>
  );
}
