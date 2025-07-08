import PageWrapper from '@/components/PageWrapper';
import { Carousels } from './carousels';

export default function SparqPage() {
  return (
    <PageWrapper>
      <header>
        <h2 className="text-4xl font-bold text-center">
          Sparq Carousel Variants
        </h2>
      </header>
      <section>
        <Carousels />
      </section>
    </PageWrapper>
  );
}
