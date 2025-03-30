import { Link } from './ui/link'

export default function QuickLinks({ showHeading = false }) {
  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <div className="text-center sm:text-left">
      {showHeading && (
        <h3 className="text-white text-lg font-semibold mb-4 text-center sm:text-left">
          Quick Links
        </h3>
      )}
      <ul className="space-y-2 flex flex-col items-center sm:items-start">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className="text-white hover:text-gray-200 active:text-white font-medium"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
