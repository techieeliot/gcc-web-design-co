'use client'

import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

export const TableOfContents = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const sections = [
    {
      id: 'fourthparty',
      title: 'FourthParty.app',
      subsections: ['Challenge', 'Solution', 'Impact', 'Results'],
    },
    {
      id: 'weedwarriors',
      title: 'Weed Warriors',
      subsections: ['Features', 'Impact', 'Technologies'],
    },
    {
      id: 'gorillafund',
      title: 'Gorilla Fund',
      subsections: ['Challenge', 'Scope', 'Impact', 'Contributions'],
    },
    {
      id: 'daretoshare',
      title: 'Dare to Share',
      subsections: ['Emergency Solutions', 'Response Metrics'],
    },
    {
      id: 'roominnmemphis',
      title: 'Room in the Inn',
      subsections: ['Weekend Sprint', 'Project Impact', 'Key Contributions'],
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    document.querySelectorAll('article').forEach(section => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Toggle Menu Button - Visible on mobile only */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-20 right-4 z-30 p-3 bg-white rounded-lg shadow-lg md:hidden"
        aria-label={isOpen ? 'Close contents menu' : 'Open contents menu'}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-gray-800" />
        ) : (
          <Menu className="w-6 h-6 text-gray-800" />
        )}
      </button>

      {/* Overlay - Mobile only */}
      {isOpen && (
        <div
          className="fixed inset-0 top-16 bg-black/20 z-20 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Table of Contents */}
      <aside
        className={`
                fixed md:sticky top-16 md:top-8
                right-0 md:right-auto
                h-[calc(100vh-4rem)] md:h-auto
                w-72 md:w-full
                bg-white shadow-lg md:shadow-md
                z-30 md:z-0
                transition-transform duration-300 ease-in-out
                ${isOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
                rounded-l-lg md:rounded-lg
                overflow-y-auto
                p-6
                ${className}
            `}
      >
        <h2 className="text-lg font-semibold mb-4">Contents</h2>
        <nav className="space-y-4">
          {sections.map(section => (
            <div key={section.id} className="mb-4">
              <a
                href={`#${section.id}`}
                onClick={() => setIsOpen(false)}
                className={`block font-medium ${
                  activeSection === section.id
                    ? 'text-blue-600'
                    : 'text-gray-800 hover:text-blue-600'
                }`}
              >
                {section.title}
              </a>
              <ul className="ml-4 mt-2 space-y-2">
                {section.subsections.map(subsection => (
                  <li key={subsection}>
                    <a
                      href={`#${section.id}-${subsection.toLowerCase()}`}
                      onClick={() => setIsOpen(false)}
                      className="text-sm text-gray-600 hover:text-blue-600"
                    >
                      {subsection}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>
    </>
  )
}
