import { Metadata } from 'next';
import PageWrapper from '@/components/PageWrapper';
import { Link } from '@/components/ui/link';

export const revalidate = 3600; // revalidate once per hour

export const metadata: Metadata = {
  title: 'Terms of Service | SANFORDEV',
  description:
    'Read the full Terms of Service for using SANFORDEV’s website and services.',
  alternates: { canonical: '/terms-of-service' },
};

export default function TermsOfService() {
  return (
    <PageWrapper>
      <article className="prose dark:prose-invert max-w-none space-y-6 py-8">
        <h1>Terms of Service</h1>

        <p>
          Welcome to SANFORDEV! These Terms of Service govern your use of our
          website and services. By accessing or using our site, you agree to
          comply with these terms. If you do not agree, please refrain from
          using our services.
        </p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By using our website, you acknowledge that you have read, understood,
          and agree to be bound by these Terms of Service.
        </p>

        <h2>2. Changes to Terms</h2>
        <p>
          SANFORDEV may update or modify these terms at any time. We will notify
          you of significant changes via the site. Continued use after changes
          constitutes acceptance.
        </p>

        <h2>3. Intellectual Property</h2>
        <p>
          All content, logos, and trademarks on this site are the property of
          SANFORDEV or its licensors. You may not reproduce or use them without
          prior written permission.
        </p>

        <h2>4. User Obligations</h2>
        <p>
          You agree not to misuse the site or interfere with its security.
          Prohibited actions include unauthorized access, distributing malware,
          or violating any applicable laws.
        </p>
        <p>
          You are responsible for maintaining the confidentiality of your
          account information and for all activities that occur under your
          account. If you suspect any unauthorized use, you must notify us
          immediately.
        </p>

        <h2>5. Termination</h2>
        <p>
          We reserve the right to suspend or terminate your access for
          violations of these terms or for any conduct we deem harmful to the
          site or other users.
        </p>
        <p>
          You may terminate your account at any time by contacting us. Upon
          termination, your right to use the site will immediately cease. We may
          retain certain information as required by law or for our legitimate
          business purposes.
        </p>
        <p>
          We may also terminate your access to the site if we believe you have
          violated these terms or engaged in conduct that is harmful to the site
          or other users. In such cases, we will notify you of the termination
          and provide you with an opportunity to appeal the decision.
        </p>

        <h2>6. Limitation of Liability</h2>
        <p>
          SANFORDEV is not liable for any indirect, incidental, or consequential
          damages arising from your use of the site. Our total liability is
          limited to the maximum extent permitted by law.
        </p>
        <h2>7. Indemnification</h2>
        <p>
          You agree to indemnify and hold SANFORDEV harmless from any claims,
          damages, or expenses arising from your use of the site or violation of
          these terms.
        </p>
        <h2>8. Third-Party Links</h2>
        <p>
          Our site may contain links to third-party websites. We are not
          responsible for the content or practices of these sites. Use them at
          your own risk.
        </p>
        <h2>9. Disclaimer of Warranties</h2>
        <p>
          The site is provided "as is" without warranties of any kind. We do not
          guarantee the accuracy, reliability, or availability of the site or
          its content. Your use is at your own risk.
        </p>
        <h2>10. Governing Law</h2>
        <p>
          These terms are governed by the laws of the State of Mississippi,
          without regard to its conflict of law principles. Any disputes will be
          resolved in the state or federal courts located in Mississippi.
        </p>
        <h2>11. Severability</h2>
        <p>
          If any provision of these terms is found to be unenforceable, the
          remaining provisions will remain in effect. The unenforceable
          provision will be limited or eliminated to the minimum extent
          necessary.
        </p>
        <h2>12. Entire Agreement</h2>
        <p>
          These Terms of Service constitute the entire agreement between you and
          SANFORDEV regarding your use of the site. They supersede any prior
          agreements or understandings, whether written or oral.
        </p>
        <h2>13. Contact Information</h2>
        <p>
          If you have any questions about these Terms of Service, please contact
          us at&nbsp;
          <Link href="mailto:hey@sanfordev.com" variant="inlineLink">
            hey@sanfordev.com
          </Link>
          .
        </p>
      </article>
    </PageWrapper>
  );
}
