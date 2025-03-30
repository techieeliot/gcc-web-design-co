import { ContactForm, ContactSidebar } from './components'

export default function ContactRoute() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Ready to transform your digital presence? We're here to help you build
          something amazing.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <ContactSidebar />
        <div className="lg:col-span-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
