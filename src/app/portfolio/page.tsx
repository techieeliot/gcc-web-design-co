import { Metadata } from "next";
import { caseStudies } from "@/data";
import { cn } from "@/lib/utils";
import { CaseStudyCard } from "./[id]/CaseStudyCard";
import BlueberryIcon from "@/components/BlueberryIcon";

// Metadata configuration
export const metadata: Metadata = {
  title: "Our Work | Case Studies & Development Projects",
  description:
    "Explore our case studies showcasing successful React and Next.js projects. See how we've helped startups and enterprises transform their digital presence.",
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "Case Studies & Development Projects | SanforDEV Consulting",
    description:
      "Explore our portfolio of successful React and Next.js projects for startups and enterprises.",
    url: "https://devsouth.us/portfolio",
    images: [
      {
        url: "/images/portfolio-social.webp",
        width: 1200,
        height: 630,
        alt: "SanforDEV Consulting Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies & Development Projects | SanforDEV Consulting",
    description:
      "Explore our portfolio of successful React and Next.js projects.",
    images: ["/images/portfolio-social.webp"],
  },
};

export default function PortfolioRoute() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto  px-4 py-6 lg:py-10">
        {/* Page Header */}
        <header className="mb-12 lg:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-center lg:text-left">
            Our Work
          </h1>

          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-10">
            {/* Description paragraph */}
            <p
              className={cn(
                "text-lg lg:text-xl",
                "max-w-3xl order-2 lg:order-1",
                "text-center lg:text-left",
                "text-slate-600 dark:text-slate-300",
              )}
            >
              At SanforDEV Consulting, we're as down-to-earth as a Mississippi
              blueberry. We cultivate genuine relationships, gathering top
              talent and trusted partners to nurture every project from idea to
              reality. Explore our case studies to see how we help businesses
              grow—rooted in authenticity, care, and a touch of innovation.
            </p>

            <BlueberryIcon className="order-1 lg:order-2 flex-shrink-0" />
          </div>
        </header>

        {/* Case Studies Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={study.id} index={index} {...study} />
          ))}
        </section>
      </div>
    </div>
  );
}
