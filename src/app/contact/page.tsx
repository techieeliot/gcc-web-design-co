import { cn } from "@/lib/utils";
import { ContactSidebar } from "./components/sidebar";
import ContactForm from "./components/form";
import { Mail } from "@/lib/icons";

export const revalidate = 3600; // Revalidate every hour

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-8 lg:pt-16 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section - server rendered */}
        <div className="text-center mb-12 lg:mb-20 relative">
          {/* Decorative gradient circles */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute right-1/2 -top-32 h-[400px] w-[400px] rounded-full bg-gradient-radial from-azure/20 via-transparent to-transparent blur-3xl" />
            <div className="absolute left-1/2 -top-40 h-[400px] w-[400px] rounded-full bg-gradient-radial from-sky/20 via-transparent to-transparent blur-3xl" />
          </div>

          {/* Hero content with icon */}
          <div className="flex flex-col items-center gap-6">
            <div className="rounded-full bg-slate-200 p-4 shadow-lg">
              <Mail className="w-8 h-8 text-powder" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Contact Us
            </h1>

            <p className="text-xl text-slate-600 dark:text-powder/80 max-w-2xl mx-auto">
              Ready to transform your digital presence? We genuinely care about
              your vision and are here to listen, advise, and partner with you
              on your next project. Whether you're bursting with a creative idea
              or have a practical question, our team is ready to support you
              every step of the way. And if you're wondering, yes—we still find
              time to laugh about that ever-growing coffee collection ☕.
            </p>
          </div>
        </div>

        {/* Form section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <ContactSidebar />
          <div className="lg:col-span-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
