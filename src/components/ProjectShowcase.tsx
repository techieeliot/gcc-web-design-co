import {
  Binary,
  BookOpen,
  BriefcaseBusiness,
  CircuitBoard,
  Code2,
  Gavel,
  HandHeart,
  Heart,
  Leaf,
  Scale,
  Sprout,
  Star,
  TreePine,
  Users,
} from 'lucide-react'
import { Link } from './ui/link'
import Image from 'next/image'

export default function ProjectShowcase() {
  const projects = [
    {
      image: '/images/pic04.jpg',
      icons: [Scale, Gavel, BookOpen],
      alt: 'Legal Services Project',
      description: 'Legal Practice Management',
    },
    {
      image: '/images/pic05.jpg',
      icons: [CircuitBoard, Code2, Binary],
      alt: 'Tech Company Project',
      description: 'SaaS Platform',
    },
    {
      image: '/images/pic06.jpg',
      icons: [Sprout, Leaf, TreePine],
      alt: 'Lawn Management Project',
      description: 'Lawn Service Portal',
    },
    {
      image: '/images/pic07.jpg',
      icons: [Heart, Users, HandHeart],
      alt: 'Nonprofit Project',
      description: 'Charity Dashboard',
    },
  ]
  return (
    <div className="w-full lg:col-span-4 bg-white rounded-lg shadow-md p-4 sm:p-6">
      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
        Recent Projects
      </h3>

      {/* Further reduced image height */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {projects.map(({ image, icons, alt, description }, index) => (
          <div key={index} className="relative h-28 sm:h-24 group">
            <Image
              src={image}
              alt={alt}
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-blue-700/30 rounded-lg flex items-center justify-center gap-1">
              {icons.map((Icon, iconIndex) => (
                <Icon
                  key={iconIndex}
                  className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                  strokeWidth={1.5}
                />
              ))}
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-1 bg-black/50 rounded-b-lg">
              <p className="text-xs text-white truncate">{description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 space-y-2">
        <div className="border-t pt-2">
          <p className="text-gray-600 text-xs">
            Our portfolio showcases a diverse range of projects, from legal tech
            solutions to nonprofit platforms.
          </p>
        </div>

        <div className="bg-gray-50 p-2 rounded-lg">
          <div className="flex items-center gap-1 mb-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-3 h-3 text-yellow-400 fill-yellow-400"
              />
            ))}
          </div>
          <blockquote className="text-xs text-gray-700 italic">
            "Working with devSouth transformed our digital presence and exceeded
            our expectations."
          </blockquote>
          <p className="text-xs text-gray-500 mt-1">— Director of Operations</p>
        </div>
      </div>

      <Link href="/portfolio" className="w-full mt-2 text-sm" variant="default">
        More Projects <BriefcaseBusiness className="ml-2 w-4 h-4" />
      </Link>
    </div>
  )
}
