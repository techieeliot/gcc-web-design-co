import Link from "next/link";
import Image from "next/image";
import { Rocket, Code2, Lightbulb } from "lucide-react";

export default function FeaturesSection() {
    const getIcon = (index: number) => {
        switch (index) {
            case 0:
                return <Rocket className="w-32 h-32 text-white/80" strokeWidth={1.5} />;
            case 1:
                return <Code2 className="w-32 h-32 text-white/80" strokeWidth={1.5} />;
            case 2:
                return <Lightbulb className="w-32 h-32 text-white/80" strokeWidth={1.5} />;
            default:
                return null;
        }
    };

    return(
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            image: "/images/pic01.jpg",
            title: "Startups We Empower",
            subtitle: "Transforming ideas into revenue-generating MVPs",
            description: "We guide early-stage startups through building scalable, high-performance web applications that fuel business growth.",
            link: "/portfolio"
          },
          {
            image: "/images/pic02.jpg",
            title: "Scalable Web Solutions",
            subtitle: "Optimizing front-end performance with React and Next.js",
            description: "We focus on building fast, mobile-first, and highly scalable applications using the latest technologies to meet business needs.",
            link: "/services"
          },
          {
            image: "/images/pic03.jpg",
            title: "Our Approach",
            subtitle: "Collaboration and Innovation at the Core",
            description: "We work closely with you to understand your vision, applying data-driven strategies and modern frameworks to achieve results.",
            link: "/about"
          }
        ].map(({link, image, title, subtitle, description}, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Link href={link}>
              <div className="relative h-48 w-full group">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-blue-700/30 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-100 opacity-70">
                  {getIcon(index)}
                </div>
              </div>
            </Link>
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800">{title}</h2>
              <p className="text-gray-600 mt-2">{subtitle}</p>
              <p className="text-gray-600 mt-4">{description}</p>
            </div>
          </div>
        ))}
      </div>
    )}