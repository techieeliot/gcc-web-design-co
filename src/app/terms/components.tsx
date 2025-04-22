'use client';

import {
  PropsWithChildren,
  useEffect,
  useState,
  createContext,
  Children,
  isValidElement,
  cloneElement,
  Suspense,
} from 'react';
import { Link } from '@/components/ui/link';
import { cn } from '@/lib/utils';
import { Shimmer } from '@/components/ui/shimmer';

interface Section {
  id: string;
  title: string;
}

// Create a context with a more reliable counter
const SectionContext = createContext<number>(0);

export function LegalSections({ children }: PropsWithChildren) {
  const [sections] = useState(() => Children.toArray(children).length);

  return (
    <SectionContext.Provider value={sections}>
      <div className="space-y-8">
        {Children.map(children, (child, index) => {
          if (isValidElement<LegalSectionProps>(child)) {
            return cloneElement(child, {
              sectionNumber: index + 1,
            });
          }
          return child;
        })}
      </div>
    </SectionContext.Provider>
  );
}

interface LegalSectionProps extends Section {
  sectionNumber?: number;
}

export function LegalSection({
  id,
  title,
  children,
  sectionNumber,
}: PropsWithChildren<LegalSectionProps>) {
  return (
    <section>
      <h2 id={id} className="text-2xl font-bold mb-4">
        {sectionNumber}. {title}
      </h2>
      <div className="prose max-w-none">{children}</div>
    </section>
  );
}

export function TableOfContents() {
  const [sections, setSections] = useState<(Section & { number: number })[]>(
    []
  );
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: `${-80}px 0% -70% 0%`,
        threshold: 0,
      }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Get all section headings and extract their info
    const nodes = Array.from(
      document.querySelectorAll<HTMLHeadingElement>('article.prose h2[id]')
    ).map((h2, index) => ({
      id: h2.id,
      title: h2.textContent?.split('.').slice(1).join('.').trim() || '',
      number: index + 1,
    }));

    setSections(nodes);
  }, []);

  if (sections.length === 0)
    return (
      <div className="flex flex-col gap-2">
        <Shimmer className="h-6 w-1/5" />
        <ul className="space-y-1 list-none list-inside">
          {Array.from({ length: 25 }).map((_, index) => (
            <li key={index} className="block py-1 transition-colors">
              <Shimmer className="h-6 w-1/4" />
            </li>
          ))}
        </ul>
      </div>
    );

  return (
    <nav aria-label="Table of contents" className="top-24">
      <h2 className="font-medium mb-2">Table of Contents</h2>
      <ul className="space-y-1 list-none list-inside">
        {sections.map(({ id, title, number }) => (
          <li key={id}>
            <Link
              href={`#${id}`}
              variant="inlineLink"
              className={cn(
                'block py-1 transition-colors',
                activeId === id && 'text-primary font-medium'
              )}
              aria-current={activeId === id ? 'location' : undefined}
              title={`Jump to ${title}`}
              aria-label={`Jump to ${title}`}
            >
              <span>
                {number}. {title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
