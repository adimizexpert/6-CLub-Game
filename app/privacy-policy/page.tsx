import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - 6 Club Guide',
  description: 'Read the privacy policy for 6clubguide.com. Learn how we collect, use, and protect your personal information.',
  alternates: {
    canonical: 'https://6clubguide.com/privacy-policy',
  },
  robots: {
    index: false,
    follow: false,
  },
}

export default function PrivacyPolicy() {
  return (
    <>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-12 text-gold">
          Privacy Policy
        </h1>

        <div className="bg-dark-blue/50 rounded-lg p-8 space-y-8 text-white/90 font-poppins">
          <section>
            <h2 className="text-2xl font-orbitron font-bold mb-4 text-gold">
              Introduction
            </h2>
            <p className="leading-relaxed">
              This Privacy Policy describes how 6clubguide.com ("we", "our", or "us") collects, uses, and protects your personal information when you visit our website. We are committed to protecting your privacy and ensuring the security of your personal data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-orbitron font-bold mb-4 text-gold">
              Information We Collect
            </h2>
            <p className="leading-relaxed mb-4">We may collect the following types of information:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Personal information you provide when contacting us</li>
              <li>Usage data and analytics information</li>
              <li>Cookies and similar tracking technologies</li>
              <li>Information about your device and browser</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-orbitron font-bold mb-4 text-gold">
              How We Use Your Information
            </h2>
            <p className="leading-relaxed mb-4">We use the collected information for:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Providing and improving our services</li>
              <li>Responding to your inquiries</li>
              <li>Analyzing website usage and trends</li>
              <li>Ensuring website security</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-orbitron font-bold mb-4 text-gold">
              Cookies
            </h2>
            <p className="leading-relaxed">
              We use cookies to enhance your browsing experience, analyze site traffic, and understand where our visitors are coming from. You can choose to disable cookies through your browser settings, though this may affect website functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-orbitron font-bold mb-4 text-gold">
              Third-Party Links
            </h2>
            <p className="leading-relaxed">
              Our website contains links to third-party websites, including the 6 Club gaming platform. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-orbitron font-bold mb-4 text-gold">
              Data Security
            </h2>
            <p className="leading-relaxed">
              We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-orbitron font-bold mb-4 text-gold">
              Your Rights
            </h2>
            <p className="leading-relaxed mb-4">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access your personal information</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of certain data collection</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-orbitron font-bold mb-4 text-gold">
              Changes to This Policy
            </h2>
            <p className="leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-orbitron font-bold mb-4 text-gold">
              Contact Us
            </h2>
            <p className="leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us through our contact page or email us at support@6clubguide.com.
            </p>
          </section>

          <p className="text-sm text-white/60 mt-8">
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>
    </>
  )
}

