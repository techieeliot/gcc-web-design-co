'use client'

import { motion, useAnimation, useInView } from '@/lib/animations'
import { componentStyles } from '@/lib/component-styles'
import { textStyles } from '@/lib/text-styles'
import { cn } from '@/lib/utils'
import * as LucideIcons from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

interface CaseStudyCardProps {
  id: string
  title: string
  description: string
  image: string
  imageAlt: string
  iconNames: string[]
  index?: number
}

export const CaseStudyCard = ({
  id,
  title,
  description,
  image,
  imageAlt,
  iconNames,
  index = 0,
}: CaseStudyCardProps) => {
  const ref = useRef(null)
  const controls = useAnimation()
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
    margin: '0px 0px -100px 0px',
  })

  useEffect(() => {
    // Initial pause to let page load
    const initialDelay = 0.3 + index * 0.15

    // Animate when in view, with a smooth delay
    if (isInView) {
      const timer = setTimeout(() => {
        controls.start('visible')
      }, initialDelay * 1000)

      return () => clearTimeout(timer)
    }

    // Fallback animation
    const fallbackTimer = setTimeout(
      () => {
        controls.start('visible')
      },
      1200 + index * 150
    )

    return () => clearTimeout(fallbackTimer)
  }, [isInView, controls, index])

  // Animation variants
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 15,
      scale: 0.97,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.15, 0.45, 0.25, 0.95],
      },
    },
    hover: {
      y: -4,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  }

  return (
    <motion.article
      ref={ref}
      initial="hidden"
      animate={controls}
      whileHover="hover"
      variants={cardVariants}
      className={cn(
        componentStyles.card,
        'group relative overflow-hidden',
        'rounded-xl will-change-transform'
      )}
    >
      <Link href={`/portfolio/${id}`} className="block h-full">
        <div className="relative h-48 mb-4 overflow-hidden rounded-t-lg">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={index < 3} // Prioritize loading first 3 images
          />
          <div className={cn(componentStyles.imageOverlay, 'gap-4')}>
            {iconNames.map((iconName, idx) => {
              const Icon = LucideIcons[
                iconName as keyof typeof LucideIcons
              ] as React.ComponentType<LucideIcons.LucideProps>
              return Icon ? (
                <Icon
                  key={idx}
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
              'mb-2 group-hover:text-sky dark:group-hover:text-azure transition-colors duration-300'
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
