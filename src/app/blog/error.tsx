'use client';

import PageWrapper from '@/components/PageWrapper';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { clientLogger } from '@/lib/logger';

export default function BlogError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  clientLogger.error('Blog Error:', error);
  return (
    <PageWrapper>
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
        <Icon name="FileWarning" className="w-12 h-12 text-yellow-500" />
        <h2 className="text-xl font-bold">Something went wrong!</h2>
        <p>Unable to load blog content.</p>
        <p>{error.message || 'An unexpected error occurred'}...</p>
        <div className="flex gap-4 space-x-4">
          <Button onClick={() => reset()}>Retry</Button>
          <Button
            onClick={() => (window.location.href = '/')}
            variant="outline"
          >
            Return home
          </Button>
        </div>
      </div>
    </PageWrapper>
  );
}
