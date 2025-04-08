'use client';

import { domAnimation, LazyMotion } from '@/lib/animations';
import { type ReactNode } from 'react';

export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}
