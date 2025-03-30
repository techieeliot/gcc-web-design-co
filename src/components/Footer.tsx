import Link from 'next/link'
import QuickLinks from './QuickLinks'
import ContactInfo from './ContactInfo'

export default function Footer() {
  return (
    <div className="w-full bg-gray-950 text-gray-300">
      <footer className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-full">
          <QuickLinks />
          <ContactInfo />
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; 2025 devSouth Consulting. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
