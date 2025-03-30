import { Button } from 'components/ui/button'
import { Mail, MapPin, Clock, Phone, Globe, Send, Linkedin, Twitter } from 'lucide-react'

export const ContactSidebar = () => {
  return (
    <div className="lg:col-span-4 space-y-6">
      {/* Contact Info Card */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <section>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Get In Touch</h3>
          <p className="text-gray-600 mb-6">
            Have a project in mind or questions for us? Reach out today and let's discuss how we can
            help your business grow.
          </p>

          <div className="space-y-4">
            {/* Contact Details */}
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-blue-600 mt-1" />
              <div>
                <p className="font-medium text-gray-900">Email</p>
                <a
                  href="mailto:devsouth.us@gmail.com"
                  className="text-gray-600 hover:text-blue-600"
                >
                  devsouth.us@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-blue-600 mt-1" />
              <div>
                <p className="font-medium text-gray-900">Location</p>
                <p className="text-gray-600">Remote-first company</p>
                <p className="text-gray-600">Based in Jackson, MS</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-blue-600 mt-1" />
              <div>
                <p className="font-medium text-gray-900">Business Hours</p>
                <p className="text-gray-600">Monday - Friday</p>
                <p className="text-gray-600">9:00 AM - 5:00 PM EST</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Globe className="w-5 h-5 text-blue-600 mt-1" />
              <div>
                <p className="font-medium text-gray-900">Service Area</p>
                <p className="text-gray-600">United States & International</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Social Links Card */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h4 className="font-semibold text-gray-800 mb-4">Connect With Us</h4>
        <div className="flex gap-4">
          <a
            href="https://linkedin.com/company/devsouth"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <Linkedin className="w-5 h-5 text-blue-600" />
          </a>
          <a
            href="https://twitter.com/devsouth"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <Twitter className="w-5 h-5 text-blue-600" />
          </a>
        </div>
      </div>
    </div>
  )
}

export const ContactForm = () => {
  return (
    <article>
      <h2 className="text-3xl font-bold text-gray-950 mb-4">Let's Start a Conversation</h2>
      <p className="text-gray-600 mb-8">
        Whether you need technical consulting, web development, or emergency support, we're here to
        help. Fill out the form below and we'll get back to you within 24 hours.
      </p>

      <form action="https://formspree.io/f/myynedwg" method="POST" className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              name="_replyto"
              id="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
            Company Name
          </label>
          <input
            type="text"
            name="company"
            id="company"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            placeholder="Your Company Ltd."
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
            Subject *
          </label>
          <select
            name="subject"
            id="subject"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          >
            <option value="">Select a topic...</option>
            <option value="Technical Consulting">Technical Consulting</option>
            <option value="Web Development">Web Development</option>
            <option value="Emergency Support">Emergency Support</option>
            <option value="General Inquiry">General Inquiry</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message *
          </label>
          <textarea
            name="message"
            id="message"
            rows={5}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            placeholder="Tell us about your project or inquiry..."
          ></textarea>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="privacy"
            name="privacy"
            required
            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <label htmlFor="privacy" className="text-sm text-gray-600">
            I agree to the{' '}
            <a href="/privacy" className="text-blue-600 hover:underline">
              privacy policy
            </a>
          </label>
        </div>

        <div>
          <Button type="submit" size="xl" className="w-full sm:w-auto">
            Send Message
            <Send className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </form>
    </article>
  )
}
