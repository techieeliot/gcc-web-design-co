import { ServicesMainContent, ServicesSidebar } from './components'

export default function ServicesRoute() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <ServicesMainContent />
        <ServicesSidebar />
      </div>
    </div>
  )
}
