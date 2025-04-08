'use client';

import { useEffect } from 'react';
import { clientLogger } from '@/lib/logger';

export function ErrorHandler() {
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      clientLogger.error('Unhandled error:', {
        message: event.message,
      } as Error);
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', (event) =>
      handleError(event.reason)
    );

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', (event) =>
        handleError(event.reason)
      );
    };
  }, []);

  return null;
}
