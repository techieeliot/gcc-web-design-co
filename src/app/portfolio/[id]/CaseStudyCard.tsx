'use client'

import { componentStyles } from '@/lib/component-styles'
import { textStyles } from '@/lib/text-styles'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import * as LucideIcons from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface CaseStudyCardProps {
  id: string
  title: string
  description: string
  image: string
  imageAlt: string
  iconNames: string[] // Changed from icons to iconNames
}

export const CaseStudyCard = ({
  id,
  title,
  description,
  image,
  imageAlt,
  iconNames, // Changed from icons
}: CaseStudyCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className={cn(
        componentStyles.card,
        'group relative overflow-hidden',
        'rounded-xl'
      )}
    >
      <Link href={`/portfolio/${id}`} className="block h-full">
        <div className="relative h-48 mb-4">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className={cn(componentStyles.imageOverlay, 'gap-4')}>
            {iconNames.map((iconName, index) => {
              // Explicitly type Icon as a React component
              const Icon = LucideIcons[
                iconName as keyof typeof LucideIcons
              ] as React.ComponentType<LucideIcons.LucideProps>
              return Icon ? (
                <Icon
                  key={index}
                  className={componentStyles.icon.large}
                  strokeWidth={1.5}
                />
              ) : null
            })}
          </div>
        </div>

        <div className="p-4">
          <h2
            className={cn(
              textStyles.h3,
              'mb-2 group-hover:text-sky dark:group-hover:text-azure'
            )}
          >
            {title}
          </h2>
          <p
            className={cn(
              textStyles.body,
              'line-clamp-2',
              'text-slate-600 dark:text-slate-300'
            )}
          >
            {description}
          </p>
        </div>
      </Link>
    </motion.article>
  )
}
