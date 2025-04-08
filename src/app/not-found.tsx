'use client';

import { Icon } from '@/components/ui/icon';
import { Link } from '@/components/ui/link';
import { MotionDiv } from '@/components/ui/motion-components';
import { useEffect, useState } from 'react';

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Prevents hydration mismatch
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <MotionDiv
        initial={{ opacity: 0, transform: 'translateY(20px)' }}
        animate={{ opacity: 1, transform: 'translateY(0px)' }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-xl"
      >
        <div className="mb-8 flex justify-center text-9xl">🌻</div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          404 - Page Not Found
        </h1>
        <p className="text-base leading-relaxed mb-8">
          Whoops! It seems you've wandered off the beaten path. Not all who
          wander are lost—sometimes you make a happy little accident and stumble
          upon unexpected beauty. Let's get you back home.
        </p>

        <Link href="/" variant="default">
          <Icon name="ArrowLeft" className="w-4 h-4" />
          Back to Home
        </Link>
      </MotionDiv>
    </div>
  );
}
