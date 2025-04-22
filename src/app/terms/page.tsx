import { Metadata } from 'next';
import PageWrapper from '@/components/PageWrapper';
import { Link } from '@/components/ui/link';
import { TableOfContents, LegalSection, LegalSections } from './components';

export const revalidate = 3600; // cache for 1 hour

export const metadata: Metadata = {
  title: 'Terms of Service | SANFORDEV',
  description:
    "These Terms of Service (“Legal Terms”) govern your access to and use of SANFORDEV's website and services. Last updated April 22, 2025.",
  alternates: { canonical: '/terms-of-service' },
  keywords: [
    'Terms of Service for SANFORDEV Consulting',
    'Legal Terms and Conditions for SANFORDEV',
    'User Agreement for SANFORDEV Services',
    'Privacy Policy and Legal Disclaimer for SANFORDEV',
    'User Responsibilities and Conduct on SANFORDEV',
  ],
  openGraph: {
    title: 'Terms of Service | SANFORDEV',
    description:
      "These Terms of Service govern your access to and use of SANFORDEV's website and services. Last updated April 22, 2025.",
    url: 'https://sanfordev.com/terms',
    images: [
      {
        url: '/images/social-card.webp',
        width: 1200,
        height: 630,
        alt: 'SANFORDEV Terms of Service',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service | SANFORDEV',
    description:
      'These Terms of Service govern your access to and use of SANFORDEV’s website and services. Last updated April 22, 2025.',
    images: ['/images/social-card.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
};

export default function TermsOfService() {
  return (
    <PageWrapper>
      <article className="prose dark:prose-invert max-w-none space-y-8 px-0 sm:px-8 md:px-10 lg:px-12 xl:px-32 py-8">
        {/* Header */}
        <h1>Terms of Service</h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Last updated April 22, 2025
        </p>

        <TableOfContents />

        <LegalSections>
          <LegalSection id="definitions" title="Definitions">
            <p>For these Legal Terms, the following definitions apply:</p>
            <dl className="space-y-4">
              {/* Basic Entities */}
              <dt>
                <strong>"User"</strong>
              </dt>
              <dd>
                Any individual or entity that accesses or uses the Services.
              </dd>

              <dt>
                <strong>"You"</strong>
              </dt>
              <dd>The individual or entity accessing or using the Services.</dd>

              <dt>
                <strong>"We," "us," "our"</strong>
              </dt>
              <dd>SANFORDEV Consulting LLC and its affiliates.</dd>

              {/* Services & Data */}
              <dt>
                <strong>"Services"</strong>
              </dt>
              <dd>Our website and associated services.</dd>

              <dt>
                <strong>"Content"</strong>
              </dt>
              <dd>
                Any text, graphics, images, audio, video, or other materials on
                the Services.
              </dd>

              <dt>
                <strong>"User Content"</strong>
              </dt>
              <dd>
                Content you submit, post, or otherwise make available through
                the Services.
              </dd>

              <dt>
                <strong>"Third-Party Content"</strong>
              </dt>
              <dd>
                Content not created or owned by SANFORDEV, including items from
                other users or third-party websites.
              </dd>

              <dt>
                <strong>"User Data"</strong>
              </dt>
              <dd>
                Data you provide to us or that we collect in connection with
                your use of the Services.
              </dd>

              <dt>
                <strong>"Contributions"</strong>
              </dt>
              <dd>
                Content and materials you create, submit, post, display,
                transmit, perform, publish, distribute, or broadcast using the
                Services.
              </dd>

              {/* Policies & Legal Notices */}
              <dt>
                <strong>"Legal Terms"</strong>
              </dt>
              <dd>
                These Terms of Service and any other policies or guidelines we
                provide.
              </dd>

              <dt>
                <strong>"Privacy Policy"</strong>
              </dt>
              <dd>
                Our{' '}
                <Link href="/privacy" variant="inlineLink">
                  Privacy Policy
                </Link>{' '}
                that explains how we collect, use, and protect your personal
                information.
              </dd>

              <dt>
                <strong>"Legal Disclaimer"</strong>
              </dt>
              <dd>
                Our disclaimer of liability for information provided on the
                Services.
              </dd>

              {/* Governing Provisions */}
              <dt>
                <strong>"Governing Law"</strong>
              </dt>
              <dd>
                The laws of the State of Mississippi, without reference to its
                conflict-of-law rules.
              </dd>

              <dt>
                <strong>"Arbitration"</strong>
              </dt>
              <dd>
                Disputes are resolved through binding arbitration rather than by
                court.
              </dd>

              <dt>
                <strong>"Severability"</strong>
              </dt>
              <dd>
                If any provision is unenforceable or invalid, the remaining
                provisions will remain in full force and effect.
              </dd>

              <dt>
                <strong>"Entire Agreement"</strong>
              </dt>
              <dd>
                The complete and final agreement between you and us regarding
                the Services, superseding all prior agreements.
              </dd>

              {/* User Responsibilities & Conduct */}
              <dt>
                <strong>"User Obligations"</strong>
              </dt>
              <dd>
                Your responsibilities when using the Services, including
                compliance with these Legal Terms and all applicable laws.
              </dd>
            </dl>
          </LegalSection>
          <LegalSection id="introduction" title="Introduction">
            <p>
              These Terms of Service ("Legal Terms") form a binding agreement
              between you and SANFORDEV Consulting LLC. Our office is at 110
              Lake Forest Ln, Clinton, MS 39056, USA.
            </p>
            <p>
              By using our website (
              <Link href="https://www.sanfordev.com" variant="inlineLink">
                sanfordev.com
              </Link>
              ) and Services, you accept these Legal Terms.
            </p>
            <ul>
              <li>We may update these Legal Terms periodically.</li>
              <li>Updates are posted on this page.</li>
              <li>Continued use indicates acceptance.</li>
            </ul>
          </LegalSection>

          <LegalSection id="agreement" title="Agreement to Our Legal Terms">
            <p>
              By using the Services, you confirm that you have read and agree to
              these Legal Terms.
            </p>
            <p>
              • Users under 18 or lacking legal capacity should not use the
              Services.
            </p>
          </LegalSection>

          <LegalSection id="services" title="Our Services">
            <p>
              SANFORDEV provides technical consulting, software development, and
              web-based solutions built on React, Next.js, and related
              technologies. We strive to make the web more accessible,
              performant, and delightful.
            </p>
            <p>We provide a range of services, including but not limited to:</p>
            <ul>
              <li>Custom software and web application development</li>
              <li>Technical consulting, support, and maintenance</li>
              <li>Performance optimization</li>
              <li>UI/UX design and implementation</li>
              <li>
                In-person or remote online technical computer training and
                education
              </li>
              <li>Emergency website support</li>
              <li>General technology systems consulting</li>
            </ul>
            <p>
              We may update or modify the Services at any time without notice.
              Your continued use of the Services after any changes constitutes
              acceptance of those changes.
            </p>
          </LegalSection>

          <LegalSection id="user-reps" title="User Representations">
            <p>By using the Services, you represent and warrant that:</p>
            <ul>
              <li>
                you have the legal capacity and agree to comply with these Legal
                Terms;
              </li>
              <li>
                you are not a minor in the jurisdiction in which you reside;
              </li>
              <li>
                you will not access the Services through automated or non-human
                means, whether through a bot, script, or otherwise;
              </li>
              <li>
                you will not use the Services for any illegal or unauthorized
                purpose;
              </li>
              <li>
                your use of the Services will not violate any applicable law or
                regulation.
              </li>
            </ul>
          </LegalSection>

          <LegalSection id="prohibited" title="Prohibited Activities">
            <p>
              Use the Services only for their intended purpose. Unauthorized
              commercial use is prohibited.
            </p>
            <p>Prohibited actions include:</p>
            <ul>
              <li>Extracting data to compile databases without permission.</li>
              <li>
                Defrauding or misleading others to acquire sensitive
                information.
              </li>
              <li>Disabling or bypassing security features.</li>
              <li>
                Misusing support services or submitting false abuse reports.
              </li>
              <li>
                Using any data transmission mechanism to collect information
                without consent.
              </li>
              <li>Engaging in or facilitating criminal conduct.</li>
              <li>Transmitting malware, phishing, or other malicious code.</li>
              <li>
                Violating applicable export, data privacy, or intellectual
                property laws.{' '}
                <Link href="/privacy" variant="inlineLink">
                  See our Privacy Policy
                </Link>
              </li>
            </ul>
          </LegalSection>

          <LegalSection id="user-content" title="User Generated Content">
            <p>
              The Services may invite you to chat, contribute to, or participate
              in blogs, message boards, online forums, and other functionality,
              and may provide you with the opportunity to create, submit, post,
              display, transmit, perform, publish, distribute, or broadcast
              content and materials to us or on the Services, including but not
              limited to text, writings, video, audio, photographs, graphics,
              comments, suggestions, or personal information or other material
              (collectively, "Contributions").
            </p>
            <p>
              Any Contribution you transmit to us will be treated as
              non-confidential and non-proprietary. When you create or make
              available any Contributions, you thereby represent and warrant
              that:
            </p>
            <ul>
              <li>
                The creation, distribution, transmission, public display, or
                performance, and the accessing, downloading, or copying of your
                Contributions do not and will not infringe the proprietary
                rights, including but not limited to the copyright, patent,
                trademark, trade secret, or moral rights of any third party.
              </li>
              <li>
                You are the creator and owner of or have the necessary licenses,
                rights, consents, releases, and permissions to use and to
                authorize us, the Services, and other users of the Services to
                use your Contributions in any manner contemplated by the
                Services and these Legal Terms.
              </li>
            </ul>
          </LegalSection>

          <LegalSection id="privacy" title="Privacy Policy">
            <p>
              We prioritize data privacy and security. By using the Services,
              you agree to our{' '}
              <Link href="/privacy" variant="inlineLink">
                Privacy Policy
              </Link>
              .
            </p>
            <ul>
              <li>The Services are hosted in the United States.</li>
              <li>Access from other regions transfers your data to the U.S.</li>
              <li>You consent to U.S. data processing.</li>
            </ul>
          </LegalSection>

          <LegalSection id="ip" title="Intellectual Property Rights">
            <p>
              All content, designs, code, trademarks, and logos ("Content") on
              the Services are owned by SANFORDEV or its licensors. You may not
              reproduce, distribute, or create derivative works without our
              express written permission.
            </p>
          </LegalSection>

          <LegalSection id="user-obligations" title="User Obligations">
            <p>
              You agree not to misuse the Services, interfere with security,
              harvest data, or engage in any illegal activity. You are
              responsible for maintaining the confidentiality of your account
              credentials.
            </p>
          </LegalSection>

          <LegalSection id="termination" title="Termination">
            <p>
              We reserve the right to suspend or terminate your access for
              violations of these Legal Terms or any harmful conduct. You may
              also terminate your use by ceasing to access the Services.
            </p>
          </LegalSection>

          <LegalSection id="liability" title="Limitation of Liability">
            <p>
              To the maximum extent permitted by law, SANFORDEV and its
              affiliates will not be liable for any direct, indirect,
              incidental, special, or consequential damages arising out of or in
              connection with your use of the Services, even if advised of the
              possibility of such damages.
            </p>
            <p>
              In no event shall SANFORDEV's total liability to you for all
              damages, losses, and causes of action exceed the amount paid by
              you for the Services in the twelve (12) months preceding the
              claim.
            </p>
          </LegalSection>

          <LegalSection id="indemnification" title="Indemnification">
            <p>
              You agree to indemnify, defend, and hold harmless SANFORDEV, its
              officers, directors, managers, employees, and agents from and
              against all claims, damages, losses, liabilities, costs, and
              expenses (including reasonable attorneys' fees) arising from your
              (a) breach of these Terms, (b) violation of any law or rights of a
              third party, or (c) use of the Services.
            </p>
          </LegalSection>

          <LegalSection id="third-party" title="Third-Party Links & Content">
            <p>
              The Services may include links to third-party websites. We are not
              responsible for their content or practices. Access them at your
              own risk.
            </p>
          </LegalSection>

          <LegalSection id="warranties" title="Disclaimer of Warranties">
            <p>
              The Services are provided "AS IS" without warranties of any kind.
              SANFORDEV disclaims all express and implied warranties to the
              fullest extent permitted by law.
            </p>
            <p>
              We do not guarantee that the Services will be uninterrupted,
              secure, or error-free. You assume all risks associated with your
              use of the Services.
            </p>
          </LegalSection>

          <LegalSection id="governing-law" title="Governing Law & Arbitration">
            <p>
              These Terms are governed by the laws of the State of Mississippi
              without regard to conflict-of-law principles. Any dispute arising
              under or relating to these Terms shall be resolved by binding
              arbitration in Mississippi, in accordance with the rules of the
              American Arbitration Association.
            </p>
          </LegalSection>

          <LegalSection id="code-of-conduct" title="Code of Conduct">
            <p>
              By using our Services, you agree to adhere to our Code of Conduct
              to ensure a positive and respectful environment for all users.
              This Code of Conduct applies to all interactions within our
              Services, including but not limited to forums, comments, and
              community spaces.
            </p>
            <p>
              We expect all users to follow these guidelines regarding
              Appropriate Conduct and{' '}
              <Link href="#prohibited" variant="inlineLink">
                Prohibited Activity
              </Link>{' '}
              when engaging with our community:
            </p>
            <ul>
              <li>
                Be respectful and inclusive; harassment or hate speech will not
                be tolerated.
              </li>
              <li>
                Use appropriate language; avoid offensive or inappropriate
                content.
              </li>
              <li>No spamming, trolling, or malicious behavior.</li>
              <li>
                Share constructive feedback; do not engage in personal attacks.
              </li>
              <li>
                Respect privacy; do not share personal data without consent.
              </li>
              <li>
                Immediately report violations by contacting us at{' '}
                <Link href="mailto:hey@sanfor.dev" variant="inlineLink">
                  hey@sanfor.dev
                </Link>
                .
              </li>
            </ul>
          </LegalSection>

          <LegalSection id="legal-disclaimer" title="Legal Disclaimer">
            <p>
              The information provided on our Site and through our Services is
              for general informational purposes only and does not constitute
              legal, financial, or professional advice. You should consult a
              qualified professional before making any decisions based on this
              information.
            </p>
          </LegalSection>

          <LegalSection
            id="severability-entire-agreement"
            title="Severability & Entire Agreement"
          >
            <p>
              If any provision of these Terms is held invalid or unenforceable,
              the remainder will remain in full force and effect. These Terms
              constitute the entire agreement between you and SANFORDEV
              regarding the Services and supersede all prior agreements.
            </p>
          </LegalSection>

          <LegalSection id="contact" title="Contact Us">
            <p>
              For questions about these Terms, please email us at{' '}
              <Link href="mailto:hey@sanfor.dev" variant="inlineLink">
                hey@sanfor.dev
              </Link>
              .
            </p>
          </LegalSection>

          <LegalSection
            id="modifications"
            title="Modifications and Interruptions"
          >
            <p>
              We may change or remove any part of the Services or these Legal
              Terms at any time without notice.
            </p>
            <ul>
              <li>
                We do not guarantee constant availability of the Services.
              </li>
              <li>We are not liable for any interruptions or delays.</li>
            </ul>
          </LegalSection>

          <LegalSection
            id="electronic-communications"
            title="Electronic Communications"
          >
            <p>
              By using our Services, you consent to receive electronic
              communications from us. These communications may include notices,
              disclosures, and other information required by law. You agree that
              any notices, agreements, disclosures, or other communications that
              we send to you electronically will satisfy any legal communication
              requirements, including that the communications be in writing.
            </p>
          </LegalSection>

          <LegalSection id="miscellaneous" title="Miscellaneous">
            <p>
              These Legal Terms and any policies or operating rules posted by us
              on the Services or in respect to the Services constitute the
              entire agreement and understanding between you and us. Our failure
              to exercise or enforce any right or provision of these Legal Terms
              shall not operate as a waiver of such right or provision.
            </p>
            <p>
              These Legal Terms operate to the fullest extent permissible by
              law. We may assign any or all of our rights and obligations to
              others at any time. We shall not be responsible or liable for any
              loss, damage, delay, or failure to act caused by any cause beyond
              our reasonable control.
            </p>
            <p>
              If any provision or part of a provision of these Legal Terms is
              determined to be unlawful, void, or unenforceable, that provision
              or part of the provision is deemed severable from these Legal
              Terms and does not affect the validity and enforceability of any
              remaining provisions.
            </p>
          </LegalSection>

          <LegalSection
            id="california-users"
            title="California Users and Residents"
          >
            <p>
              If any complaint with us is not satisfactorily resolved, you can
              contact the Complaint Assistance Unit of the Division of Consumer
              Services of the California Department of Consumer Affairs in
              writing at 1625 North Market Blvd., Suite N 112, Sacramento,
              California 95834 or by telephone at (800) 952-5210 or (916)
              445-1254.
            </p>
          </LegalSection>

          <LegalSection id="user-data" title="User Data">
            <p>
              We will maintain certain data that you transmit to the Services
              for the purpose of managing the performance of the Services, as
              well as data relating to your use of the Services. Although we
              perform regular routine backups of data, you are solely
              responsible for all data that you transmit or that relates to any
              activity you have undertaken using the Services.
            </p>
            <p>
              You agree that we shall have no liability to you for any loss or
              corruption of any such data, and you hereby waive any right of
              action against us arising from any such loss or corruption of such
              data.
            </p>
          </LegalSection>

          <LegalSection id="final-note" title="Final Note">
            <p>
              These Legal Terms have been customized for SANFORDEV's specific
              needs and services. For questions about these terms or our
              services, please contact us at{' '}
              <Link href="mailto:hey@sanfor.dev" variant="inlineLink">
                hey@sanfor.dev
              </Link>
              .
            </p>
          </LegalSection>
        </LegalSections>
      </article>
    </PageWrapper>
  );
}
