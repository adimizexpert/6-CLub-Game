import type { Metadata } from 'next'
import CTAButton from '@/components/CTAButton'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "6 Club - Download APK | Official App Login & Register | India's #1 Gaming Platform",
  description:
    "Download 6 Club APK latest version ✓ Official login & register ✓ Multiple withdrawal options ✓ Secure platform. Learn about 6 Club app and games.",
  keywords: [
    '6 club',
    '6 club app',
    '6 club apk download',
    '6 club login',
    '6 club register',
    '6 club withdrawal',
    '6 club review',
    'is 6 club legit',
    '6 club official channel',
    'colour prediction app',
    'online gaming platform',
  ],
  alternates: {
    canonical: 'https://6clubguide.com/about',
  },
  openGraph: {
    url: 'https://6clubguide.com/about',
    title: "About 6 Club - India's Most Trusted Online Gaming Platform",
    description:
      "Learn who we are, our mission, payment options, and why players choose 6 Club for secure gaming and withdrawals.",
    images: [
      {
        url: 'https://6clubguide.com/images/about.webp',
        width: 1200,
        height: 630,
        alt: "About 6 Club - India's Most Trusted Online Gaming Platform",
      },
    ],
  },
}

export default function About() {
  return (
    <>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold text-center mb-8 text-gold">
          About 6 Club - India&apos;s Most Trusted Online Gaming Platform
        </h1>

        <div className="max-w-4xl mx-auto mb-10">
          <Image
            src="/images/about.webp"
            alt="About 6 Club Game - Premium online gaming platform guide, features, and community"
            width={1200}
            height={630}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            className="w-full h-auto rounded-lg shadow-2xl border-2 border-gold/30 hover:border-gold/60 transition-all duration-300"
            priority
            quality={90}
          />
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <section className="bg-dark-blue/50 rounded-lg p-8">
            <h2 className="text-3xl font-orbitron font-bold mb-3 text-gold">
              Who We Are and What We Stand For
            </h2>
            <p className="text-lg text-white/90 font-poppins leading-relaxed mb-4">
              6 Club is India&apos;s premier online gaming platform, delivering an exceptional gaming experience that combines entertainment with top-tier security. Whether you&apos;re looking to download 6 Club APK or join 6 Club through our official channels, we&apos;ve created a platform designed for every type of player.
            </p>
            <p className="text-lg text-white/90 font-poppins leading-relaxed">
              Our diverse game selection includes Colour Prediction, Poker, Slots, and numerous other popular gaming formats. The 6 Club app is designed for trust, reliability, and exciting gameplay—optimized end-to-end for a seamless experience from 6 Club login to withdrawals.
            </p>
          </section>

          <section className="bg-dark-blue/50 rounded-lg p-8">
            <h2 className="text-3xl font-orbitron font-bold mb-3 text-gold">
              Our Vision and Mission
            </h2>
            <p className="text-lg text-white/90 font-poppins leading-relaxed">
              Our mission at 6 Club is clear and unwavering: to become India&apos;s most trusted and reliable gaming platform. We constantly evolve with the latest security measures and innovative features so that when you register with 6 Club, you join a community built on fair play, transparency, and commitment to player satisfaction.
            </p>
          </section>

          <section className="bg-dark-blue/50 rounded-lg p-8">
            <h2 className="text-3xl font-orbitron font-bold mb-6 text-gold">
              Payment and Withdrawal Options
            </h2>
            <div className="space-y-4 text-white/90 font-poppins">
              <p>
                Players can withdraw using trusted methods like Paytm, PhonePe, Google Pay, and direct Bank Transfer. Our system is designed for reliability and speed to reduce common deposit and withdrawal delays.
              </p>
              <p>
                For payments, we partner with approved gateways including WorldPay, SunPay, OKPay, ALPay, and DPay—helping ensure transactions are protected with strong security standards.
              </p>
            </div>
          </section>

          <section className="bg-dark-blue/50 rounded-lg p-8">
            <h2 className="text-3xl font-orbitron font-bold mb-3 text-gold">
              Why 6 Club is a Platform You Can Trust
            </h2>
            <p className="text-lg text-white/90 font-poppins leading-relaxed">
              Trust is the cornerstone of everything we do. From secure transactions to responsible gaming tools, we&apos;re committed to protecting players and delivering a smooth experience across devices. If you&apos;re exploring the platform for the first time, start with our{' '}
              <Link href="/guide" className="text-gold hover:underline">
                6 Club Guide
              </Link>{' '}
              and browse{' '}
              <Link href="/6-club-games" className="text-gold hover:underline">
                Our Games
              </Link>{' '}
              to understand what you can play.
            </p>
          </section>

          <section className="bg-dark-blue/50 rounded-lg p-8">
            <h2 className="text-3xl font-orbitron font-bold mb-3 text-gold">
              24/7 Customer Support
            </h2>
            <p className="text-lg text-white/90 font-poppins leading-relaxed">
              We know issues don&apos;t wait for business hours—so support is available 24/7. For website-related questions, reach us anytime via our{' '}
              <Link href="/contact" className="text-gold hover:underline">
                Contact page
              </Link>
              .
            </p>
          </section>

          <section className="bg-dark-blue/50 rounded-lg p-8">
            <h2 className="text-3xl font-orbitron font-bold mb-3 text-gold">
              Join the 6 Club Community Today
            </h2>
            <p className="text-lg text-white/90 font-poppins leading-relaxed mb-6">
              Ready to experience India&apos;s best colour prediction app and premium gaming platform? Download the latest version, login, and discover why millions of players trust 6 Club for secure gaming and fast withdrawals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton text="Register on 6 Club" variant="primary" className="whitespace-nowrap" />
              <CTAButton text="Login to 6 Club" variant="secondary" className="whitespace-nowrap" />
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

