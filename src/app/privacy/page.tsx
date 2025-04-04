import { Shield } from 'lucide-react'
import { cn } from '@/lib/utils'
import { textStyles } from '@/lib/text-styles'
import dynamic from 'next/dynamic'

export const revalidate = 3600

const PrivacyContent = dynamic(() => import('./components/PrivacyContent'))

export default function PrivacyPolicyRoute() {
  return (
    <div className="min-h-screen pt-20 lg:pt-28 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section - server rendered */}
        <div className="text-center mb-12 lg:mb-20 relative">
          {/* Decorative gradient circles */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute right-1/2 -top-32 h-[400px] w-[400px] rounded-full bg-gradient-radial from-azure/20 via-transparent to-transparent blur-3xl" />
            <div className="absolute left-1/2 -top-40 h-[400px] w-[400px] rounded-full bg-gradient-radial from-sky/20 via-transparent to-transparent blur-3xl" />
          </div>

          {/* Hero content with icon */}
          <div className="flex flex-col items-center gap-6">
            <div className="rounded-full bg-slate p-4 shadow-lg">
              <Shield className="w-8 h-8 text-powder" />
            </div>

            <h1 className={cn(textStyles.h1, 'mb-4')}>Privacy Policy</h1>

            <p className="text-xl text-slate-600 dark:text-powder/80 max-w-2xl mx-auto">
              At SanforDEV Consulting, we take your privacy seriously. Like a
              well-cultivated Mississippi blueberry, our approach is rooted in
              care and nurturing relationships. This policy explains how we
              collect, use, and guard your information.
            </p>

            <div className="text-sm text-slate-500 dark:text-slate-400 mt-2">
              Last Updated: April 3, 2025
            </div>
          </div>
        </div>

        <PrivacyContent />
      </div>
    </div>
  )
}
