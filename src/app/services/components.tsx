import Image from 'next/image'
import {
  Code2,
  Rocket,
  Globe,
  SearchCode,
  PenTool,
  LayoutGrid,
  MonitorSmartphone,
  Gauge,
  ArrowUpRight,
  ServerCog,
  BookOpen,
  Laptop,
} from 'lucide-react'

export const ServicesMainContent = () => {
  const services = [
    {
      title: 'Next.js Application Development',
      description:
        'Modern web applications built with the latest Next.js features including:',
      features: [
        'Server-side rendering for optimal performance',
        'Static site generation for blazing fast pages',
        'API routes for backend functionality',
        'Image optimization and responsive design',
        'Advanced routing with dynamic segments',
      ],
      icons: [Globe, ServerCog, Gauge],
    },
    {
      title: 'React Component Architecture',
      description: 'Professional React development emphasizing:',
      features: [
        'Reusable UI components with Tailwind CSS',
        'Custom hooks for shared logic',
        'State management best practices',
        'Responsive layouts using CSS Grid/Flexbox',
        'Accessibility-first development',
      ],
      icons: [LayoutGrid, PenTool, MonitorSmartphone],
    },
  ]

  return (
    <main className="lg:col-span-8 space-y-8">
      <div className="relative h-64 rounded-lg overflow-hidden">
        <Image
          src="/images/pic02.jpg"
          alt="Modern development workspace"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 66vw"
        />
        <div className="absolute inset-0 bg-blue-700/30 flex items-center justify-center gap-6">
          <Code2 className="w-12 h-12 text-white" strokeWidth={1.5} />
          <Rocket className="w-12 h-12 text-white" strokeWidth={1.5} />
          <SearchCode className="w-12 h-12 text-white" strokeWidth={1.5} />
        </div>
      </div>

      {services.map((service, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6">
          <div className="flex gap-4 mb-4">
            {service.icons.map((Icon, iconIndex) => (
              <Icon
                key={iconIndex}
                className="w-6 h-6 text-blue-700"
                strokeWidth={1.5}
              />
            ))}
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            {service.title}
          </h2>
          <p className="text-gray-600 mb-4">{service.description}</p>
          <ul className="space-y-2">
            {service.features.map((feature, featureIndex) => (
              <li
                key={featureIndex}
                className="flex items-start gap-2 text-gray-600"
              >
                <ArrowUpRight className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </main>
  )
}

export const ServicesSidebar = () => {
  const implementations = [
    {
      title: 'Technical Features',
      icon: Laptop,
      items: [
        'Server Components',
        'Client Components',
        'Dynamic Routing',
        'Image Optimization',
        'API Integration',
      ],
    },
    {
      title: 'Documentation',
      icon: BookOpen,
      items: [
        'Component Library',
        'API Documentation',
        'Style Guide',
        'Best Practices',
        'Performance Tips',
      ],
    },
  ]

  return (
    <aside className="lg:col-span-4 space-y-6">
      {implementations.map((section, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-2 mb-4">
            <section.icon className="w-5 h-5 text-blue-700" />
            <h3 className="text-lg font-semibold text-gray-800">
              {section.title}
            </h3>
          </div>
          <ul className="space-y-2">
            {section.items.map((item, itemIndex) => (
              <li
                key={itemIndex}
                className="flex items-center gap-2 text-gray-600"
              >
                <ArrowUpRight className="w-4 h-4 text-blue-700" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  )
}
