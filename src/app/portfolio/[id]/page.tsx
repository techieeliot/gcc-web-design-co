import { notFound } from 'next/navigation';
import { caseStudies } from '@/data';
import { Metadata } from 'next';
import { CaseStudyNav } from './CaseStudyNav';
import { CaseStudyLayout } from './CaseStudyLayout';

export async function generateStaticParams(): Promise<any[]> {
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
    title: `${caseStudy.title} | Case Study`,
    description: caseStudy.description,
    alternates: {
      canonical: `/portfolio/${params.id}`,
    },
    openGraph: {
      title: `${caseStudy.title} | SanforDEV Consulting Case Study`,
      description: caseStudy.description,
      url: `https://devsouth.us/portfolio/${params.id}`,
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
      title: `${caseStudy.title} | SanforDEV Consulting Case Study`,
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
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-8">
        <CaseStudyNav currentId={params.id} />
        <CaseStudyLayout
          title={caseStudy.title}
          image={caseStudy.image}
          imageAlt={caseStudy.imageAlt}
          icons={caseStudy.icons}
        >
          <div className="space-y-8">
            {/* Introduction */}
            <p className="text-lg">{caseStudy.description}</p>

            {/* Features Section */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {caseStudy.features.map((feature, idx) => (
                  <div key={idx} className="space-y-2">
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Stats Section */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Impact</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {caseStudy.stats.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <p className="text-3xl font-bold text-sky dark:text-azure">
                      {stat.value}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </CaseStudyLayout>
        <CaseStudyNav currentId={params.id} />
      </div>
    </div>
  );
}
