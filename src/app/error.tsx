'use client';

import PageWrapper from '@/components/PageWrapper';
import { Button } from '@ui/button';
import { useEffect } from 'react';
import { Icon } from '@ui/icon';
import { clientLogger } from '@/lib/logger';
import { usePathname } from 'next/navigation';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  useEffect(() => {
    clientLogger.error('Page Error:', error);
  }, [error]);

  return (
    <PageWrapper>
      <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-4">
        <Icon name="AlertTriangle" className="w-12 h-12 text-red-500" />
        <h2 className="text-2xl font-bold">Something went wrong!</h2>
        <p className="text-slate-600 dark:text-slate-400">
          {error.message || 'An unexpected error occurred'}
        </p>
        <div className="space-x-4">
          <Button onClick={() => reset()} variant="cta">
            Try again
          </Button>
          <Button
            onClick={() =>
              (window.location.href = isHomePage ? '/contact' : '/')
            }
            variant="secondary"
          >
            {isHomePage ? 'Contact Us' : 'Return Home'}
          </Button>
        </div>
      </div>
    </PageWrapper>
  );
}
