import { ArrowRight, Rocket, Code2, Users, Brain } from "lucide-react";
import { Link } from "./ui/link";
import Image from "next/image";

export default function ValueProposition() {
    const benefits = [
        {
            title: "Startup-Focused Development",
            description: "We understand the unique challenges startups face and deliver MVPs that scale.",
            icon: Rocket
        },
        {
            title: "Modern Tech Stack",
            description: "Expertise in React, Next.js, and the latest web technologies for optimal performance.",
            icon: Code2
        },
        {
            title: "Collaborative Approach",
            description: "Direct communication and agile development to keep you involved every step of the way.",
            icon: Users
        },
        {
            title: "Strategic Solutions",
            description: "We don't just code – we help architect solutions that drive business growth.",
            icon: Brain
        }
    ];

    return (          
        <div className="md:col-span-8 bg-white rounded-lg shadow-md p-4 sm:p-6">
            <div className="relative h-48 sm:h-56 mb-6 rounded-lg overflow-hidden">
                <Image
                    src="/images/pic02.jpg"
                    alt="Modern development workspace"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 66vw"
                />
                <div className="absolute inset-0 bg-blue-700/30 flex items-center justify-center gap-4">
                    {benefits.map(({ icon: Icon }, index) => (
                        <Icon 
                            key={index}
                            className="w-8 h-8 sm:w-10 sm:h-10 text-white"
                            strokeWidth={1.5}
                        />
                    ))}
                </div>
            </div>
            
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Why Choose devSouth?</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                {benefits.map(({ title, description, icon: Icon }, index) => (
                    <div key={index} className="flex gap-3">
                        <Icon className="w-6 h-6 text-blue-700 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold text-gray-800">{title}</h3>
                            <p className="text-sm text-gray-600 mt-1">{description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <Link 
                href="/services"
                variant='default'
                className="mt-6 w-full sm:w-auto"
            >
                Explore Our Services
                <ArrowRight className="ml-2" />
            </Link>
        </div>
    )
}