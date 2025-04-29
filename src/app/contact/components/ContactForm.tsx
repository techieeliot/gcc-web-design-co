'use client';

// import { useForm, ValidationError, FormspreeProvider } from '@formspree/react';
import { cn } from '@/lib/utils';
import { FieldError, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@ui/button';
import { Link } from '@ui/link';
import { FormField, ValidationError } from './FormField';
import { Icon } from '@ui/icon';
import { useSubmit } from '@formspree/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const formSchema = z.object({
  name: z
    .string()
    .min(3, 'Name is required')
    .refine((name) => name.split(' ').length >= 2, {
      message: 'Please enter your full name',
    }),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  subject: z.string().min(1, 'Subject is missing'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(5000, 'Message must be less than 5000 characters')
    .refine((message) => message.trim() !== '', {
      message: 'Message cannot be empty',
    })
    .refine((message) => !message.toLowerCase().includes('<script>'), {
      message: 'Message contains invalid content',
    }),
  privacy: z.boolean().refine((val) => val === true, {
    message: 'You must agree to the privacy policy',
  }),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting, isDirty },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: 'onBlur',
    defaultValues: {
      name: '',
      email: '',
      company: '',
      subject: '',
      message: '',
      privacy: false,
    },
  });

  const submit = useSubmit<FormData>(
    process.env.NEXT_PUBLIC_CONTACT_FORM_ID as string
  );
  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle>
          <h2 className="tracking-tight mb-6">Let's Ignite Your Vision</h2>
        </CardTitle>

        <p className="text-base leading-relaxed mb-6 max-w-2xl mx-auto">
          Whether you're looking for innovative technical consulting, expertly
          crafted web development, or quick, attentive support, our team is here
          to help bring your vision to life. We genuinely care about your
          goals—and yes, our coffee is always strong ☕.
        </p>
      </CardHeader>
      <CardContent>
        {isSubmitSuccessful ? (
          <div className="py-8 text-center">
            <div className="flex justify-center mb-4">
              <Icon
                name="CheckCircle"
                className="w-16 h-16 text-green-500 dark:text-green-400"
              />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              Message Delivered!
            </h3>
            <p className="text-base leading-relaxed mb-6">
              We received your message. Expect to hear thoughtful feedback and
              next steps soon.
            </p>
            <Button
              onClick={() => reset()}
              variant="outline"
              className="mx-auto"
            >
              Send Another Message
            </Button>
          </div>
        ) : (
          <form
            id="contact-us"
            onSubmit={handleSubmit(submit)}
            className="space-y-6 text-left"
            noValidate
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                label="Full Name"
                id="name"
                error={errors.name}
                required
              >
                <input type="text" {...register('name')} />
              </FormField>

              <FormField
                label="Email Address"
                id="email"
                error={errors.email}
                required
              >
                <input type="email" {...register('email')} />
              </FormField>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                label="Company Name"
                id="company"
                description="Optional—but it helps us tailor our approach."
                error={errors.company}
              >
                <input type="text" {...register('company')} />
              </FormField>

              <FormField
                label="Subject"
                id="subject"
                description="Choose the subject that best captures your needs."
                error={errors.subject}
                required
              >
                <select defaultValue="" {...register('subject')}>
                  <option
                    value=""
                    disabled
                    className="text-slate-500 dark:text-slate-400"
                  >
                    Please select a subject
                  </option>
                  <option value="Technical Consulting">
                    Technical Consulting
                  </option>
                  <option value="Web Development">Web Development</option>
                  <option value="Emergency Support">Emergency Support</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </FormField>
            </div>

            <FormField
              label="Message"
              id="message"
              description={
                <>
                  Share the details of your project or question. The more you
                  tell us now, the more context we bring to your solution.
                  <br />
                  <span className="text-slate-500 dark:text-frost/80">
                    (e.g., project scope, timeline, budget, etc.)
                  </span>
                </>
              }
              error={errors.message}
              required
            >
              <textarea
                id="message"
                rows={5}
                {...register('message')}
              ></textarea>
            </FormField>

            <div className="text-sm text-slate-600 dark:text-frost/80">
              <label htmlFor="privacy" className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="privacy"
                    {...register('privacy')}
                    className={cn(
                      'rounded border-slate-300 dark:border-slate-700 text-indigo dark:text-sky focus:ring-sky dark:focus:ring-indigo/50',
                      errors.privacy && 'border-red-500 dark:border-red-500'
                    )}
                  />
                  <div>
                    <span className="flex-1">
                      I agree to the{' '}
                      <Link
                        href="/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="inlineLink"
                        className="text-sm"
                        aria-label="privacy policy. Click here to read it in a new tab."
                      >
                        privacy policy
                      </Link>
                      and{' '}
                      <Link
                        href="/terms"
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="inlineLink"
                        className="text-sm"
                        aria-label="terms of service. Click here to read it in a new tab."
                      >
                        terms of service
                      </Link>
                      .
                    </span>
                  </div>
                </div>
                <ValidationError error={errors.privacy} />
              </label>
            </div>

            <div>
              <div tabIndex={-1}>
                <Button
                  type="submit"
                  variant="cta"
                  disabled={isSubmitting || !isDirty}
                >
                  <span className="flex items-center relative z-10 gap-2">
                    {!isDirty ? (
                      <>
                        Complete the form
                        <Icon name="ArrowRight" />
                      </>
                    ) : isSubmitting ? (
                      <>
                        Sending...
                        <Icon name="ArrowRight" className="animate-pulse" />
                      </>
                    ) : (
                      <>
                        Send Message
                        <Icon name="Send" />
                      </>
                    )}
                  </span>
                </Button>
              </div>

              {isSubmitting && (
                <p className="mt-2 text-indigo dark:text-sky flex items-center">
                  <Icon name="Rocket" className="inline mr-2 animate-pulse" />
                  Igniting your message...
                </p>
              )}
              {errors.root ? (
                <ValidationError
                  error={{ ref: undefined, ...errors.root } as FieldError}
                />
              ) : null}
            </div>
          </form>
        )}
      </CardContent>
    </Card>
  );
}
