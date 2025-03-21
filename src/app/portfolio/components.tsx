import Image from "next/image";
import { 
    Users, 
    Calendar,
    MessageSquare,
    Clock,
    CheckCircle2,
    TrendingUp,
    Smartphone,
    Receipt,
    CalendarClock,
    Sparkles,
    Youtube,
    Scale,
    Target,
    LayoutDashboard,
    Code2,
    PenTool,
    FileCode2, 
    GitBranch,
    Bug,
    GraduationCap,
    Code,
    GitPullRequest,
    BookOpen,
    LifeBuoy,
    Heart,
    DollarSign,
    Users2,
    Database,
    HelpingHand
} from "lucide-react";

export const CaseStudyFourthParty = () => {
    return (
        <article id="fourthparty" className="prose lg:prose-lg bg-white p-6 rounded-lg shadow-md">
            {/* Hero Section */}
            <div className="relative h-64 mb-8 rounded-lg overflow-hidden">
                <Image
                    src="/images/pic03.jpg"
                    alt="Modern mediation platform"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 75vw"
                />
                <div className="absolute inset-0 bg-blue-700/30 flex items-center justify-center gap-6">
                    <Scale className="w-12 h-12 text-white" strokeWidth={1.5} />
                    <Users className="w-12 h-12 text-white" strokeWidth={1.5} />
                    <MessageSquare className="w-12 h-12 text-white" strokeWidth={1.5} />
                </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-950 mb-6">Case Study: FourthParty.app</h2>
            
            <div id="fourthparty-challenge" className="mb-8">
                <p className="text-gray-600">
                    <strong>FourthParty.app</strong> is a web-based platform designed to streamline the mediation process. 
                    devSouth Consulting collaborated with FourthParty to build a user-friendly, responsive web application 
                    to enhance mediation practices, focusing on automation and efficiency.
                </p>
            </div>

            <section id="fourthparty-solution" className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Solution</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <CalendarClock className="w-6 h-6 text-blue-700" />
                            <h4 className="font-semibold">Automated Scheduling & Reminders</h4>
                        </div>
                        <p className="text-gray-600">Customizable booking intake forms, client notifications, and automated reminders to improve scheduling efficiency.</p>
                    </div>
                    <div className="flex flex-col p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <Receipt className="w-6 h-6 text-blue-700" />
                            <h4 className="font-semibold">Streamlined Payments</h4>
                        </div>
                        <p className="text-gray-600">A simplified payment system that integrates invoicing and payment acceptance all in one place.</p>
                    </div>
                    <div className="flex flex-col p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <MessageSquare className="w-6 h-6 text-blue-700" />
                            <h4 className="font-semibold">Client Communication</h4>
                        </div>
                        <p className="text-gray-600">Easy-to-use chat systems and virtual mediation tools to enhance communication between mediators and clients.</p>
                    </div>
                    <div className="flex flex-col p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <LayoutDashboard className="w-6 h-6 text-blue-700" />
                            <h4 className="font-semibold">Comprehensive Dashboard</h4>
                        </div>
                        <p className="text-gray-600">A unified interface for managing appointments, payments, and client communication.</p>
                    </div>
                </div>
            </section>

            <section id="fourthparty-impact" className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Impact</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <Clock className="w-8 h-8 text-blue-700 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-gray-800">75%</div>
                        <div className="text-sm text-gray-600">Less Admin Time</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <Users className="w-8 h-8 text-blue-700 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-gray-800">200+</div>
                        <div className="text-sm text-gray-600">Active Mediators</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <TrendingUp className="w-8 h-8 text-blue-700 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-gray-800">40%</div>
                        <div className="text-sm text-gray-600">Efficiency Increase</div>
                    </div>
                </div>
            </section>

            <section id="fourthparty-results" className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Results</h3>
                <p className="text-gray-600">
                    The FourthParty platform has empowered mediators, court ADR programs, and certified 
                    neutrals to save time on administrative tasks and focus on their core work: facilitating 
                    mediation. By implementing devSouth's solution, FourthParty reduced administrative 
                    overhead and improved the overall customer experience for both mediators and clients.
                </p>
            </section>
            <section className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Technologies Used</h3>
                <p className="text-gray-600">
                    The platform was built using React.js for the front-end, integrated with a Laravel 
                    back-end. Custom-styled components and third-party API integrations were also employed 
                    to deliver a seamless user experience.
                </p>
            </section>
            <section className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Client Testimonial</h3>
                <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600">
                    "devSouth Consulting helped us create a platform that truly serves our mission of 
                    simplifying mediation. Their team was responsive, knowledgeable, and efficient. 
                    The app is now a core part of our practice, and we've seen an increase in both 
                    client satisfaction and internal efficiency."
                    <footer className="mt-2 font-normal not-italic">
                        - CEO, FourthParty.app
                    </footer>
                </blockquote>
            </section>
            <section className="mt-12">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Explore FourthParty.app</h3>
                <p className="text-gray-600">
                    To learn more about how FourthParty.app can enhance your mediation practice, visit{' '}
                    <a 
                        href="https://www.fourthparty.app" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:text-blue-800 transition-colors"
                    >
                        FourthParty.app
                    </a>
                    {' '}or contact us to schedule a demo.
                </p>
            </section>
        </article>
    )
}

export const CaseStudyWeedWarriors = () => {
    return(
        <article id="weedwarriors" className="prose lg:prose-lg bg-white p-6 rounded-lg shadow-md">
            {/* Fix 1: Add proper section IDs for table of contents navigation */}
            <div id="weedwarriors-features" className="relative h-64 mb-8 rounded-lg overflow-hidden">
                <Image
                    src="/images/pic04.jpg"
                    alt="Lawn care service platform"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 75vw"
                />
                <div className="absolute inset-0 bg-blue-700/30 flex items-center justify-center gap-6">
                    <Calendar className="w-12 h-12 text-white" strokeWidth={1.5} />
                    <Users className="w-12 h-12 text-white" strokeWidth={1.5} />
                    <Youtube className="w-12 h-12 text-white" strokeWidth={1.5} />
                </div>
            </div>

            {/* Fix 2: Fix heading structure */}
            <h2 className="text-3xl font-bold text-gray-950 mb-6">Case Study: Weed Warriors</h2>
            
            {/* Fix 3: Add key to sections for mapping */}
            <div id="weedwarriors-challenge" className="mb-8">
                <p className="text-gray-600">
                    <strong>Weed Warriors</strong> is a leading lawn care service provider looking to modernize their 
                    business operations. devSouth Consulting developed a comprehensive digital solution to streamline 
                    their scheduling, payment processing, and customer communication systems.
                </p>
            </div>

            <section className="mb-8">
                <div className="relative h-40 mb-6 rounded-lg overflow-hidden">
                    <Image
                        src="/images/pic02.jpg"
                        alt="Service challenge visualization"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-blue-700/30 flex items-center justify-center gap-4">
                        <Target className="w-8 h-8 text-white" strokeWidth={1.5} />
                    </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Challenge</h3>
                <p className="text-gray-600">
                    Weed Warriors needed to transition from manual scheduling and paper-based systems to 
                    a modern digital platform. They required a solution that could handle automated 
                    scheduling, online payments, and maintain strong customer relationships through 
                    integrated communication tools.
                </p>
            </section>

            <section className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Key Features Delivered</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <Calendar className="w-6 h-6 text-blue-700" />
                            <h4 className="font-semibold">Service Scheduling</h4>
                        </div>
                        <p className="text-gray-600">Automated scheduling system for recurring lawn treatments</p>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <Receipt className="w-6 h-6 text-blue-700" />
                            <h4 className="font-semibold">Online Bill Pay</h4>
                        </div>
                        <p className="text-gray-600">Secure payment portal for customers to manage their accounts</p>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <Smartphone className="w-6 h-6 text-blue-700" />
                            <h4 className="font-semibold">Mobile Friendly</h4>
                        </div>
                        <p className="text-gray-600">Responsive design for easy access on any device</p>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <Youtube className="w-6 h-6 text-blue-700" />
                            <h4 className="font-semibold">Content Integration</h4>
                        </div>
                        <p className="text-gray-600">YouTube channel integration for lawn care tips and updates</p>
                    </div>
                </div>
            </section>

            {/* Fix 4: Fix Impact section HTML closing tag error */}
            <section id="weedwarriors-impact" className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Impact</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <Users className="w-8 h-8 text-blue-700 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-gray-800">1000+</div>
                        <div className="text-sm text-gray-600">Active Customers</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <Clock className="w-8 h-8 text-blue-700 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-gray-800">50%</div>
                        <div className="text-sm text-gray-600">Reduced Admin Time</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <TrendingUp className="w-8 h-8 text-blue-700 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-gray-800">30%</div>
                        <div className="text-sm text-gray-600">Customer Growth</div>
                    </div>
                </div>
            </section>

            {/* Fix 5: Add missing section ID */}
            <section id="weedwarriors-technologies" className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Technologies Used</h3>
                <p className="text-gray-600">
                    Built with Next.js and React for optimal performance, the platform leverages:
                </p>
                <ul className="mt-4 space-y-2">
                    <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-blue-700 mt-1" />
                        <span>Stripe integration for secure payments</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-blue-700 mt-1" />
                        <span>YouTube API for content management</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-blue-700 mt-1" />
                        <span>Automated email notifications</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-blue-700 mt-1" />
                        <span>Mobile-responsive design</span>
                    </li>
                </ul>
            </section>

            {/* Fix 6: Make testimonial section consistent with other case studies */}
            <section className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Client Testimonial</h3>
                <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600">
                    "devSouth Consulting transformed our business operations with their digital solution. 
                    The automated scheduling and payment systems have saved us countless hours, allowing 
                    us to focus on what we do best - keeping our customers' lawns beautiful."
                    <footer className="mt-2 font-normal not-italic">
                        - Jay Grisham, Owner, Weed Warriors
                    </footer>
                </blockquote>
            </section>

            <section className="mt-12">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Visit Weed Warriors</h3>
                <p className="text-gray-600">
                    Learn more about Weed Warriors' services at{' '}
                    <a 
                        href="https://weedwarriorsinc.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:text-blue-800 transition-colors"
                    >
                        weedwarriorsinc.com
                    </a>
                </p>
            </section>
        </article>
    );
};

export const CaseStudyGorillaFund = () => {
    return(
        <article id="gorillafund" className="prose lg:prose-lg bg-white p-6 rounded-lg shadow-md">
            {/* Hero Section */}
            <div className="relative h-64 mb-8 rounded-lg overflow-hidden">
                <Image
                    src="/images/pic01.jpg"
                    alt="Gorilla conservation website"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 75vw"
                />
                <div className="absolute inset-0 bg-blue-700/30 flex items-center justify-center gap-6">
                    <Code2 className="w-12 h-12 text-white" strokeWidth={1.5} />
                    <PenTool className="w-12 h-12 text-white" strokeWidth={1.5} />
                    <Sparkles className="w-12 h-12 text-white" strokeWidth={1.5} />
                </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-950 mb-6">
                Technical Consulting: Dian Fossey Gorilla Fund
            </h2>
            
            <div id="gorillafund-challenge" className="mb-8">
                <p className="text-gray-600">
                    devSouth Consulting provided technical expertise to Soulheart during the development 
                    of the Dian Fossey Gorilla Fund website, focusing on content management optimization, 
                    responsive styling, and interactive feature implementation.
                </p>
            </div>

            <section id="gorillafund-scope" className="mb-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <FileCode2 className="w-6 h-6 text-blue-700" />
                            <h4 className="font-semibold">CMS Optimization</h4>
                        </div>
                        <p className="text-gray-600">Enhanced content management workflows and documentation for the organization's team.</p>
                    </div>
                    <div className="flex flex-col p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <PenTool className="w-6 h-6 text-blue-700" />
                            <h4 className="font-semibold">CSS Styling</h4>
                        </div>
                        <p className="text-gray-600">Improved responsive design and visual consistency across the platform.</p>
                    </div>
                    <div className="flex flex-col p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <Sparkles className="w-6 h-6 text-blue-700" />
                            <h4 className="font-semibold">Interactive Features</h4>
                        </div>
                        <p className="text-gray-600">Implemented dynamic content loading and enhanced user interactions.</p>
                    </div>
                    <div className="flex flex-col p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <Users className="w-6 h-6 text-blue-700" />
                            <h4 className="font-semibold">Team Training</h4>
                        </div>
                        <p className="text-gray-600">Provided technical guidance and best practices for content management.</p>
                    </div>
                </div>
            </section>

            <section id="gorillafund-impact" className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Collaborative Impact</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <PenTool className="w-8 h-8 text-blue-700 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-gray-800">25%</div>
                        <div className="text-sm text-gray-600">Faster Content Updates</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <Sparkles className="w-8 h-8 text-blue-700 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-gray-800">40%</div>
                        <div className="text-sm text-gray-600">Enhanced Interactivity</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <Users className="w-8 h-8 text-blue-700 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-gray-800">100%</div>
                        <div className="text-sm text-gray-600">Team Adoption</div>
                    </div>
                </div>
            </section>

            <section id="gorillafund-contributions" className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Technical Contributions</h3>
                <ul className="mt-4 space-y-2">
                    <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-blue-700 mt-1" />
                        <span>Implemented CMS best practices and workflows</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-blue-700 mt-1" />
                        <span>Optimized responsive design patterns</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-blue-700 mt-1" />
                        <span>Developed interactive UI components</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-blue-700 mt-1" />
                        <span>Created comprehensive technical documentation</span>
                    </li>
                </ul>
            </section>

            <section className="mt-12">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Visit Gorilla Fund</h3>
                <p className="text-gray-600">
                    Explore the Dian Fossey Gorilla Fund's mission at{' '}
                    <a 
                        href="https://gorillafund.org" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:text-blue-800 transition-colors"
                    >
                        gorillafund.org
                    </a>
                    {' '}
                    <span className="text-sm">(Website developed by Soulheart with technical consulting by devSouth)</span>
                </p>
            </section>
        </article>
    );
};

export const CaseStudyDareToShare = () => {
    return(
        <article id="daretoshare" className="prose lg:prose-lg bg-white p-6 rounded-lg shadow-md">
            <div className="relative h-64 mb-8 rounded-lg overflow-hidden">
                <Image
                    src="/images/pic05.jpg"
                    alt="Emergency technical consulting"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 75vw"
                />
                <div className="absolute inset-0 bg-blue-700/30 flex items-center justify-center gap-6">
                    <GitBranch className="w-12 h-12 text-white" strokeWidth={1.5} />
                    <LifeBuoy className="w-12 h-12 text-white" strokeWidth={1.5} />
                    <Code className="w-12 h-12 text-white" strokeWidth={1.5} />
                </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-950 mb-6">
                Emergency Technical Support: Dare to Share
            </h2>
            
            <div className="mb-8">
                <p className="text-gray-600">
                    When Soulheart faced an unexpected developer transition, devSouth Consulting stepped in 
                    to provide emergency technical support, implementing Git best practices and resolving 
                    critical front-end issues for the Dare to Share platform.
                </p>
            </div>

            <section className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Emergency Solutions</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <GitBranch className="w-6 h-6 text-blue-700" />
                            <h4 className="font-semibold">Version Control Setup</h4>
                        </div>
                        <p className="text-gray-600">Implemented Git workflow and Bitbucket best practices for the development team.</p>
                    </div>
                    <div className="flex flex-col p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <Bug className="w-6 h-6 text-blue-700" />
                            <h4 className="font-semibold">Critical Bug Fixes</h4>
                        </div>
                        <p className="text-gray-600">Resolved JavaScript functionality issues and CSS styling bugs on the homepage.</p>
                    </div>
                    <div className="flex flex-col p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <BookOpen className="w-6 h-6 text-blue-700" />
                            <h4 className="font-semibold">Documentation</h4>
                        </div>
                        <p className="text-gray-600">Created comprehensive Git workflow documentation and development guides.</p>
                    </div>
                    <div className="flex flex-col p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <GraduationCap className="w-6 h-6 text-blue-700" />
                            <h4 className="font-semibold">Team Training</h4>
                        </div>
                        <p className="text-gray-600">Provided hands-on Git/Bitbucket training for the development team.</p>
                    </div>
                </div>
            </section>

            <section className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Response Metrics</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <Clock className="w-8 h-8 text-blue-700 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-gray-800">24h</div>
                        <div className="text-sm text-gray-600">Response Time</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <GitPullRequest className="w-8 h-8 text-blue-700 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-gray-800">12+</div>
                        <div className="text-sm text-gray-600">Critical Fixes</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <Users className="w-8 h-8 text-blue-700 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-gray-800">100%</div>
                        <div className="text-sm text-gray-600">Team Enabled</div>
                    </div>
                </div>
            </section>

            <section className="mt-12">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Visit Dare to Share</h3>
                <p className="text-gray-600">
                    Explore Dare to Share's mission at{' '}
                    <a 
                        href="https://www.dare2share.org" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:text-blue-800 transition-colors"
                    >
                        dare2share.org
                    </a>
                    {' '}
                    <span className="text-sm">(Website by Soulheart with emergency technical support by devSouth)</span>
                </p>
            </section>
        </article>
    );
};

export const CaseStudyRoomInTheInn = () => {
    return(
        <article id="roominnmemphis" className="prose lg:prose-lg bg-white p-6 rounded-lg shadow-md">
            <div className="relative h-64 mb-8 rounded-lg overflow-hidden">
                <Image
                    src="/images/pic06.jpg"
                    alt="Room in the Inn Memphis website"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 75vw"
                />
                <div className="absolute inset-0 bg-blue-700/30 flex items-center justify-center gap-6">
                    <Heart className="w-12 h-12 text-white" strokeWidth={1.5} />
                    <Users className="w-12 h-12 text-white" strokeWidth={1.5} />
                    <Database className="w-12 h-12 text-white" strokeWidth={1.5} />
                </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-950 mb-6">
                Nonprofit Impact: Room in the Inn Memphis
            </h2>
            
            <div className="mb-8">
                <p className="text-gray-600">
                    As part of GiveCamp Memphis, devSouth contributed to a complete website redesign 
                    for Room in the Inn Memphis, a nonprofit organization providing shelter and support 
                    for individuals experiencing homelessness.
                </p>
            </div>

            <section className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Weekend Sprint</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <Users2 className="w-6 h-6 text-blue-700" />
                            <h4 className="font-semibold">Collaborative Effort</h4>
                        </div>
                        <p className="text-gray-600">Part of a three-developer volunteer team working over one weekend at GiveCamp Memphis.</p>
                    </div>
                    <div className="flex flex-col p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <Database className="w-6 h-6 text-blue-700" />
                            <h4 className="font-semibold">Content Migration</h4>
                        </div>
                        <p className="text-gray-600">Assisted with CMS content transfer and management implementation.</p>
                    </div>
                    <div className="flex flex-col p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <Code2 className="w-6 h-6 text-blue-700" />
                            <h4 className="font-semibold">Interactive Features</h4>
                        </div>
                        <p className="text-gray-600">Developed JavaScript functionality for dynamic website components.</p>
                    </div>
                    <div className="flex flex-col p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <Heart className="w-6 h-6 text-blue-700" />
                            <h4 className="font-semibold">Community Impact</h4>
                        </div>
                        <p className="text-gray-600">Helped reduce operational costs, allowing more resources for their mission.</p>
                    </div>
                </div>
            </section>

            <section className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Project Impact</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <Clock className="w-8 h-8 text-blue-700 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-gray-800">48h</div>
                        <div className="text-sm text-gray-600">Development Time</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <DollarSign className="w-8 h-8 text-blue-700 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-gray-800">$15k+</div>
                        <div className="text-sm text-gray-600">Value Delivered</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <Heart className="w-8 h-8 text-blue-700 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-gray-800">100%</div>
                        <div className="text-sm text-gray-600">Mission Support</div>
                    </div>
                </div>
            </section>

            <section className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Key Contributions</h3>
                <ul className="mt-4 space-y-2">
                    <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-blue-700 mt-1" />
                        <span>Content management system migration</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-blue-700 mt-1" />
                        <span>Interactive JavaScript feature development</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-blue-700 mt-1" />
                        <span>Responsive design implementation</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-blue-700 mt-1" />
                        <span>Content organization and structure</span>
                    </li>
                </ul>
            </section>

            <section className="mt-12">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Support Room in the Inn Memphis</h3>
                <p className="text-gray-600">
                    Visit{' '}
                    <a 
                        href="https://ritimemphis.org" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:text-blue-800 transition-colors"
                    >
                        ritimemphis.org
                    </a>
                    {' '}to learn more about their mission and how you can help provide shelter for those experiencing homelessness.
                </p>
            </section>
        </article>
    );
};

