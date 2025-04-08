import { ReactNode } from 'react';

export default function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col px-8 pb-6 pt-20 md:pt-24 lg:pt-32 gap-16">
        {children}
      </div>
    </div>
  );
}
