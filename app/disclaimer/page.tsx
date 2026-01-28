import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Disclaimer - 6 Club Guide',
  description: 'Read the disclaimer for 6clubguide.com. Important information about our affiliate relationship and website usage.',
  alternates: {
    canonical: 'https://6clubguide.com/disclaimer',
  },
  robots: {
    index: false,
    follow: false,
  },
}

export default function Disclaimer() {
  return (
    <>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-12 text-gold">
          Disclaimer
        </h1>

        <div className="bg-dark-blue/50 rounded-lg p-8 space-y-8 text-white/90 font-poppins">
          <section>
            <h2 className="text-2xl font-orbitron font-bold mb-4 text-gold">
              Affiliate Disclosure
            </h2>
            <p className="leading-relaxed">
              6clubguide.com is an affiliate website. We may receive compensation when users click on links to the 6 Club gaming platform and register through our affiliate link. This compensation helps us maintain and operate this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-orbitron font-bold mb-4 text-gold">
              Information Accuracy
            </h2>
            <p className="leading-relaxed">
              While we strive to provide accurate and up-to-date information about 6 Club and its services, we cannot guarantee the completeness or accuracy of all information presented on this website. Information may change without notice, and we are not responsible for any errors or omissions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-orbitron font-bold mb-4 text-gold">
              Not Official Website
            </h2>
            <p className="leading-relaxed">
              This website is not the official website of 6 Club. We are an independent affiliate guide website providing information and resources about the 6 Club gaming platform. For official information, please visit the official 6 Club website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-orbitron font-bold mb-4 text-gold">
              Gaming Disclaimer
            </h2>
            <p className="leading-relaxed">
              All games mentioned on this website are for entertainment purposes only. We do not encourage or promote gambling. Users should play responsibly and within their means. Please ensure that online gaming is legal in your jurisdiction before participating.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-orbitron font-bold mb-4 text-gold">
              No Warranty
            </h2>
            <p className="leading-relaxed">
              This website is provided "as is" without any warranties, expressed or implied. We do not warrant that the website will be uninterrupted, error-free, or free from viruses or other harmful components.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-orbitron font-bold mb-4 text-gold">
              Limitation of Liability
            </h2>
            <p className="leading-relaxed">
              We shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from the use of this website or the information contained herein. Users access and use this website at their own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-orbitron font-bold mb-4 text-gold">
              External Links
            </h2>
            <p className="leading-relaxed">
              This website contains links to external websites, including the 6 Club gaming platform. We are not responsible for the content, privacy policies, or practices of these external websites. Users should review the terms and conditions of any external website they visit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-orbitron font-bold mb-4 text-gold">
              Age Restrictions
            </h2>
            <p className="leading-relaxed">
              This website and the 6 Club gaming platform are intended for users who are of legal age in their jurisdiction. We do not knowingly collect information from minors. If you are under the legal age, please do not use this website or register for gaming services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-orbitron font-bold mb-4 text-gold">
              Contact
            </h2>
            <p className="leading-relaxed">
              If you have any questions about this disclaimer, please contact us through our contact page.
            </p>
          </section>
        </div>
      </div>
    </>
  )
}

