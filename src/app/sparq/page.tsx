import PageWrapper from '@/components/PageWrapper';
import { Carousels } from './carousels';

export default function SparqPage() {
  return (
    <PageWrapper>
      <header>
        <h2>Sparq carousels page</h2>
      </header>
      <section>
        <Carousels />
      </section>
    </PageWrapper>
  );
}
