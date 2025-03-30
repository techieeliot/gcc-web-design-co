import QuickLinks from './QuickLinks'
import ContactInfo from './ContactInfo'
import { Link } from './ui/link'
import { Mail, Phone } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="w-full bg-gray-950 text-gray-300">
      <footer className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Column 1: Company Info */}
          <div className="text-center sm:text-left">
            <h3 className="text-white text-lg font-semibold mb-4">
              About devSouth
            </h3>
            <p className="text-gray-400 text-sm">
              React ecosystem web development consultancy specializing in
              building modern web applications with Next.js and the React
              ecosystem.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <section className="widget links">
            <h3 className="text-white text-lg font-semibold mb-4 text-center sm:text-left">
              Quick Links
            </h3>
            <QuickLinks showHeading={false} />
          </section>

          {/* Column 3: Contact Info */}
          <section className="widget contact text-center sm:text-left">
            <h3 className="text-white text-lg font-semibold mb-4">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-gray-400" />
                <Link
                  href="mailto:devsouth.us@gmail.com"
                  className="text-gray-400 hover:text-blue-400"
                >
                  devsouth.us@gmail.com
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-gray-400" />
                <span className="text-gray-400">+1 (662) 312-6815</span>
              </div>
              <address className="text-gray-400 not-italic">
                110 Lake Forest Ln
                <br />
                Clinton, MS 39056
              </address>
            </div>
          </section>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="text-center">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} devSouth Consulting. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
