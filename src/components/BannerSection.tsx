import Image from "next/image";
import { ArrowRight, Rocket } from "lucide-react";
import { Link } from "./ui/link";

export default function BannerSection() {
    return(
        <div className="w-full bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8 relative overflow-hidden min-h-[300px] md:min-h-[400px] lg:min-h-[500px]">
            <div className="absolute inset-0">
                <Image
                    src='/images/hero_image.png'
                    alt="Background abstract pattern"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 relative z-9 h-full max-w-full">
                <div className="w-full md:w-7/12 flex-shrink-0">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 break-words">
                        From <span className='text-blue-700'>Idea</span> to <span className='text-blue-700'>Impact</span>
                    </h2>
                    <p className="text-gray-600 mt-2 font-bold text-sm sm:text-base">
                        We Engineer Growth for Startups and Innovators.
                    </p>
                </div>
                <div className="w-full md:w-5/12 lg:w-1/4 flex flex-col gap-3 pt-6 sm:pt-8 md:pt-10 md:pl-10 ">
                    <Link 
                        href="/contact" 
                        variant='default'
                        size='lg'> 
                        <span className="whitespace-nowrap">Get Started</span>
                        <ArrowRight className="ml-2" />
                    </Link>
                    <Link 
                        href="/services" 
                        variant='outline'
                        size='lg'>
                        <span className="whitespace-nowrap">Learn More</span>
                        <Rocket className="ml-2 flex-shrink-0" />
                    </Link>
                </div>
            </div>
        </div>
    )}