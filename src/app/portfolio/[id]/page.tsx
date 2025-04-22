import { notFound } from 'next/navigation';
import { caseStudies } from '@/data';
import { Metadata } from 'next';
import { CaseStudyLayout, CaseStudyNav } from './components';
import { Suspense } from 'react';
import { Shimmer } from '@ui/shimmer';
import PageWrapper from '@/components/PageWrapper';
import { DescriptionCard } from '@/components/DescriptionCard';

export async function generateStaticParams(): Promise<{ id: string }[]> {
  return caseStudies.map((study) => ({
    id: study.id,
  }));
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const caseStudy = caseStudies.find((study) => study.id === params.id);

  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
      description: 'The requested case study could not be found.',
    };
  }

  return {
    title: `${caseStudy.title} | SANFORDEV`,
    description: caseStudy.description,
    alternates: {
      canonical: `/portfolio/${params.id}`,
    },
    keywords: [
      'SANFORDEV Consulting Case Study',
      caseStudy.title,
      caseStudy.description,
      'Web Development services supporting startups, businesses, and enterprises focused on React, Next.js, and TypeScript programming ecosystem',
    ],
    openGraph: {
      title: `${caseStudy.title} | SANFORDEV Case Study`,
      description: caseStudy.description,
      url: `https://sanfordev.com/portfolio/${params.id}`,
      images: [
        {
          url: caseStudy.image || '/images/portfolio-social.webp',
          width: 1200,
          height: 630,
          alt: `${caseStudy.title} Case Study`,
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${caseStudy.title} | SANFORDEV Consulting Case Study`,
      description: caseStudy.description,
      images: [caseStudy.image || '/images/portfolio-social.webp'],
    },
  };
}

export default async function CaseStudyPage({ params }: any) {
  const caseStudy = caseStudies.find((study) => study.id === params.id);

  if (!caseStudy) {
    notFound();
  }

  return (
    <PageWrapper>
      <Suspense fallback={<Shimmer />}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-8">
          <CaseStudyNav currentId={params.id} />
          <CaseStudyLayout
            title={caseStudy.title}
            image={caseStudy.image}
            imageAlt={caseStudy.imageAlt}
            icons={caseStudy.icons}
            footerContent={caseStudy.caseStudyUrlLabel}
            url={caseStudy.caseStudyUrl}
          >
            <div className="space-y-8">
              {/* Introduction */}
              <p className="text-lg">{caseStudy.description}</p>

              {/* Features Section */}
              <section>
                <h2 className="text-2xl font-bold mb-6">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {caseStudy.features.map(
                    ({ icon, title, description }, idx) => (
                      <DescriptionCard
                        key={idx}
                        iconName={icon}
                        title={title}
                        description={description}
                        className="flex flex-col items-start sm:justify-center gap-2 p-2 sm:p-8 xl:p-10"
                      />
                    )
                  )}
                </div>
              </section>

              {/* Stats Section */}
              <section>
                <h2 className="text-2xl font-bold mb-6">Impact</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {caseStudy.stats.map((stat, idx) => (
                    <DescriptionCard
                      key={idx}
                      iconName={stat.icon}
                      title={stat.value}
                      description={stat.label}
                      className="flex flex-col items-center py-8"
                    />
                  ))}
                </div>
              </section>
            </div>
          </CaseStudyLayout>
          <CaseStudyNav currentId={params.id} />
        </div>
      </Suspense>
    </PageWrapper>
  );
}
