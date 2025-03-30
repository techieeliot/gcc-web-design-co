import { Link } from "components/ui/link"
import { 
    ExternalLinkIcon, 
    Rocket, 
    Code2, 
    Users, 
    Brain,
    Laptop,
    Heart,
    GraduationCap,
    Github,
    LinkedinIcon
} from "lucide-react"
import Image from "next/image"

export const AboutMainContent = () => {
    return(
    <article className="prose lg:prose-lg max-w-none bg-white p-6 rounded-lg shadow-md">
        {/* Hero section with image and icons */}
        <div className="relative h-64 sm:h-72 md:h-80 mb-8 rounded-lg overflow-hidden">
            <Image
                src="/images/pic03.jpg"
                alt="Modern development workspace"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 75vw"
            />
            <div className="absolute inset-0 bg-blue-700/30 flex items-center justify-center gap-6">
                <Code2 className="w-12 h-12 text-white" strokeWidth={1.5} />
                <Brain className="w-12 h-12 text-white" strokeWidth={1.5} />
                <Rocket className="w-12 h-12 text-white" strokeWidth={1.5} />
            </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-950 mb-6">About devSouth</h2>
        <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h3>
            <p className="text-gray-600">
                Founded in 2018, devSouth Consulting emerged from a passion for transforming innovative ideas into successful digital products. Our journey began with a focus on helping pre-revenue startups build scalable MVPs, and has since evolved into partnerships with enterprise clients while maintaining our commitment to startup innovation.
            </p>
        </div>
        <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Approach</h3>
            <div className="relative h-48 sm:h-56 mb-6 rounded-lg overflow-hidden">
                <Image
                    src="/images/pic02.jpg"
                    alt="Collaborative development"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 75vw"
                />
                <div className="absolute inset-0 bg-blue-700/30 flex items-center justify-center gap-4">
                    <Laptop className="w-10 h-10 text-white" strokeWidth={1.5} />
                    <Users className="w-10 h-10 text-white" strokeWidth={1.5} />
                </div>
            </div>
            <p className="text-gray-600">
                We believe in building not just applications, but partnerships. Our approach combines technical expertise with business acumen, ensuring that every line of code contributes to your business objectives. We emphasize:
            </p>
            <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Performance-first development methodology</li>
                <li>• Accessibility as a core requirement</li>
                <li>• Scalable, maintainable architecture</li>
                <li>• Data-driven decision making</li>
                <li>• Continuous innovation and learning</li>
            </ul>
        </div>

        <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Community Involvement</h3>
            <div className="relative h-48 sm:h-56 mb-6 rounded-lg overflow-hidden">
                <Image
                    src="/images/pic01.jpg"
                    alt="Community and education"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 75vw"
                />
                <div className="absolute inset-0 bg-blue-700/30 flex items-center justify-center gap-4">
                    <Heart className="w-10 h-10 text-white" strokeWidth={1.5} />
                    <GraduationCap className="w-10 h-10 text-white" strokeWidth={1.5} />
                </div>
            </div>
            <p className="text-gray-600">
                Beyond our client work, we're deeply committed to fostering tech education and community growth. Our involvement includes:
            </p>
            <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Founding and organizing freeCodeCamp Jackson, Mississippi</li>
                <li>• Mentoring at Base Camp Coding Academy</li>
                <li>• Teaching web development to underrepresented youth</li>
                <li>• Contributing to open source education (University of Helsinki)</li>
                <li>• Supporting nonprofits through GiveCamp Memphis</li>
            </ul>
        </div>

        <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Leadership</h3>
            <div className="flex items-start gap-6">
                <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">Eliot Sanford</h4>
                    <p className="text-gray-600">
                        Founder & Lead Engineer
                    </p>
                    <p className="text-gray-600 mt-4">
                        With over 6 years of specialized experience in the React ecosystem, Eliot has led development initiatives for startups and enterprise clients alike. His focus on performance, accessibility, and scalable architecture has helped numerous organizations achieve their digital transformation goals.
                    </p>
                </div>
            </div>
        </div>
    </article>
    )
}

export const CompanyFacts = () => {
    const facts = [
        { label: "Founded", value: "December 2018", icon: Rocket },
        { label: "Location", value: "Clinton, Mississippi (Remote-first)", icon: Laptop },
        { label: "Focus", value: "React Ecosystem Development", icon: Code2 },
        { label: "Clients Served", value: "Startups to Enterprise", icon: Users }
    ];

    return(
        <section className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Company Facts</h3>
            <ul className="space-y-4 text-gray-600">
                {facts.map(({ label, value, icon: Icon }) => (
                    <li key={label} className="flex items-start gap-3">
                        <Icon className="w-5 h-5 text-blue-700 mt-1 flex-shrink-0" />
                        <div>
                            <strong>{label}:</strong><br />
                            {value}
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )}

export const ConnectWithUs = () => {
    const socialLinks = [
        { 
            href: "https://www.linkedin.com/company/devsouth-consulting-llc/",
            label: "LinkedIn",
            icon: LinkedinIcon 
        },
        { 
            href: "https://github.com/techieeliot/gcc-web-design-co",
            label: "GitHub",
            icon: Github 
        }
    ];

    return(
        <section className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Connect With Us</h3>
            <div className="space-y-4">
                {socialLinks.map(({ href, label, icon: Icon }) => (
                    <Link 
                        key={href}
                        href={href} 
                        className="flex items-center gap-2 text-gray-600 hover:text-blue-700 transition-colors w-full"
                    >
                        <Icon className="w-5 h-5 flex-shrink-0" />
                        <span className="flex-grow text-left">{label}</span>
                        <ExternalLinkIcon className="w-4 h-4 flex-shrink-0" />
                    </Link>
                ))}
            </div>
        </section>
    )}