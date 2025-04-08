import { Icon } from '@/components/ui/icon';
import { cn } from '@/lib/utils';
import dynamic from 'next/dynamic';

export const revalidate = 3600;

const PrivacyContent = dynamic(() => import('./components/PrivacyContent'));

export default function PrivacyPolicyRoute() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-6 lg:py-10">
        {/* Hero Section - server rendered */}
        <div className="text-center mb-12 lg:mb-20 relative">
          {/* Decorative gradient circles */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute right-1/2 -top-32 h-[400px] w-[400px] rounded-full bg-gradient-radial from-azure/20 via-transparent to-transparent blur-3xl" />
            <div className="absolute left-1/2 -top-40 h-[400px] w-[400px] rounded-full bg-gradient-radial from-sky/20 via-transparent to-transparent blur-3xl" />
          </div>

          {/* Hero content with icon */}
          <div className="flex flex-col items-center gap-6">
            <div className="rounded-full border border-azure dark:bg-azure dark:border-powder p-4 shadow-lg">
              <Icon
                name="Shield"
                className="text-azure dark:text-powder"
                size={24}
              />
            </div>

            <h1
              className={cn(
                'text-4xl md:text-5xl font-bold tracking-tight',
                'mb-4'
              )}
            >
              Privacy Policy
            </h1>

            <p className="text-xl text-slate-600 dark:text-powder/80 max-w-2xl mx-auto">
              At SanforDEV Consulting, we take your privacy seriously. Our
              approach is rooted in genuine care and thoughtful
              cultivation—ensuring every aspect of your data is protected with
              the same attention you'd give to a cherished garden.
            </p>

            <div className="text-sm text-slate-500 dark:text-slate-400 mt-2">
              Last Updated: April 7, 2025
            </div>
          </div>
        </div>

        <PrivacyContent />
      </div>
    </div>
  );
}
