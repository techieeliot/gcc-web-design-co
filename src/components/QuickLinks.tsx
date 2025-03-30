import { Link } from './ui/link'

export default function QuickLinks() {
  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <div>
      <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
      <ul className="space-y-2">
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
