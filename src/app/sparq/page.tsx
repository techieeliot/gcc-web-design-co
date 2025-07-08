import PageWrapper from '@/components/PageWrapper';
import { CarouselsDemo } from './carouselsDemo';

export default function SparqPage() {
  return (
    <PageWrapper>
      <header>
        <h2 className="text-4xl font-bold text-center">
          Sparq Carousel Variants
        </h2>
      </header>
      <CarouselsDemo />
    </PageWrapper>
  );
}
