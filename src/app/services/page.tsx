import { ServicesMainContent, ServicesSidebar } from './components'

export default function ServicesRoute() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <header className="mb-12 lg:mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-center lg:text-left">
            Our Services
          </h1>
          <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto lg:mx-0 text-center lg:text-left">
            We specialize in modern web development focusing on React ecosystem
            technologies.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <ServicesMainContent />
          <ServicesSidebar />
        </div>
      </div>
    </div>
  )
}
