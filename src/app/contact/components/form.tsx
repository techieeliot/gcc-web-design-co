'use client'

import { Button } from 'components/ui/button'
import { Send, ArrowRight } from 'lucide-react'
import { cn } from 'lib/utils'
import { textStyles } from 'lib/text-styles'
import { Link } from 'components/ui/link'
import { motion } from 'framer-motion'
import { useState } from 'react'

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    privacy: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const inputClasses = cn(
    // Base styles
    'w-full px-4 py-2 rounded-lg transition-colors',
    // Background
    'bg-white dark:bg-slate-800',
    // Border
    'border border-slate-300 dark:border-slate-700',
    // Text
    'text-slate-900 dark:text-powder',
    // Placeholder
    'placeholder:text-slate-500 dark:placeholder:text-slate-400',
    // Focus states
    'focus:ring-2 focus:ring-sky/50 focus:border-sky/50',
    'dark:focus:ring-azure/50 dark:focus:border-azure/50'
  )

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target
    const checked =
      type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined

    setFormState((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      // Would normally submit the form here
    }, 1500)
  }

  return (
    <motion.article
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className={cn(
        'backdrop-blur-md rounded-xl p-8 shadow-lg',
        'bg-white dark:bg-slate-900',
        'border border-slate-200 dark:border-slate-800'
      )}
    >
      <h2 className={textStyles.h2}>Let's Start a Conversation</h2>

      <p className={cn(textStyles.body, 'mb-6')}>
        Whether you need technical consulting, web development, or emergency
        support, we're here to help. Fill out the form below and we'll get back
        to you within 24 hours.
      </p>

      <form
        action="https://formspree.io/f/myynedwg"
        method="POST"
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className={textStyles.label}>
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formState.name}
              onChange={handleChange}
              required
              className={inputClasses}
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className={textStyles.label}>
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formState.email}
              onChange={handleChange}
              required
              className={inputClasses}
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="company" className={textStyles.label}>
            Company Name
          </label>
          <input
            type="text"
            name="company"
            id="company"
            value={formState.company}
            onChange={handleChange}
            className={inputClasses}
            placeholder="Your Company Ltd."
          />
        </div>

        <div>
          <label htmlFor="subject" className={textStyles.label}>
            Subject *
          </label>
          <select
            name="subject"
            id="subject"
            value={formState.subject}
            onChange={handleChange}
            required
            className={inputClasses}
          >
            <option value="" className="text-slate-400 dark:text-slate-500">
              Select a topic...
            </option>
            <option value="Technical Consulting">Technical Consulting</option>
            <option value="Web Development">Web Development</option>
            <option value="Emergency Support">Emergency Support</option>
            <option value="General Inquiry">General Inquiry</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className={textStyles.label}>
            Message *
          </label>
          <textarea
            name="message"
            id="message"
            rows={5}
            value={formState.message}
            onChange={handleChange}
            required
            className={inputClasses}
            placeholder="Tell us about your project or inquiry..."
          ></textarea>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="privacy"
            name="privacy"
            checked={formState.privacy as boolean}
            onChange={handleChange}
            required
            className="rounded border-slate-300 dark:border-slate-700 text-sky dark:text-azure focus:ring-sky dark:focus:ring-azure/50"
          />
          <label
            htmlFor="privacy"
            className="text-sm text-slate-600 dark:text-powder/80"
          >
            I agree to the{' '}
            <Link href="/privacy" variant="inlineLink">
              privacy policy
            </Link>
          </label>
        </div>

        <div>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              type="submit"
              size="xl"
              disabled={isSubmitting}
              className="w-full sm:w-auto bg-sky hover:bg-sky/90 dark:bg-azure dark:hover:bg-azure/90 relative overflow-hidden group"
            >
              <span className="flex items-center relative z-10">
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <span className="ml-2">
                  {isSubmitting ? (
                    <ArrowRight className="w-4 h-4" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                </span>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-sky via-azure to-sky dark:from-azure dark:via-sky dark:to-azure"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 1 }}
              />
            </Button>
          </motion.div>
        </div>
      </form>
    </motion.article>
  )
}
