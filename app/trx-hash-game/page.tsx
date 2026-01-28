import type { Metadata } from 'next'
import Image from 'next/image'
import CTAButton from '@/components/CTAButton'

export const metadata: Metadata = {
  title: 'TRX Hash Game on 6 Club - Play Now',
  description: 'Play TRX Hash Game on 6 Club gaming platform. Learn about cryptocurrency-based gaming and how to play TRX Hash on 6 Club.',
  alternates: {
    canonical: 'https://6clubguide.com/trx-hash-game',
  },
  openGraph: {
    url: 'https://6clubguide.com/trx-hash-game',
    title: 'TRX Hash Game on 6 Club',
    description: 'Play TRX Hash Game on 6 Club gaming platform.',
  },
}

export default function TRXHashGame() {
  return (
    <>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-8 text-gold">
          TRX Hash Game on 6 Club
        </h1>

        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <Image
              src="/images/TRXhash.webp"
              alt="TRX Hash Game on 6 Club - Cryptocurrency Gaming Experience | Download 6 Club APK"
              width={800}
              height={400}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 800px"
              className="w-full h-auto rounded-lg shadow-lg border-2 border-gold/30 hover:border-gold/60 transition-all duration-300"
              loading="lazy"
              quality={90}
            />
          </div>

          <div className="bg-dark-blue/50 rounded-lg p-8 space-y-6">
            <h2 className="text-3xl font-orbitron font-bold text-gold">
              About TRX Hash Game
            </h2>
            <p className="text-lg text-white/90 font-poppins leading-relaxed">
              TRX Hash Game is a cryptocurrency-based gaming experience available on 6 Club. This innovative game combines blockchain technology with exciting gameplay, offering players a unique and modern gaming experience.
            </p>
            <p className="text-lg text-white/90 font-poppins leading-relaxed">
              The game features fast-paced action and is designed for players who enjoy strategic thinking combined with the thrill of cryptocurrency-based gaming.
            </p>

            <h3 className="text-2xl font-orbitron font-bold text-gold mt-8">
              Game Features
            </h3>
            <ul className="list-disc list-inside space-y-2 text-white/90 font-poppins ml-4">
              <li>Cryptocurrency-based gameplay</li>
              <li>Fast-paced action and quick results</li>
              <li>Strategic decision-making elements</li>
              <li>Regular updates and improvements</li>
              <li>User-friendly interface</li>
            </ul>

            <div className="mt-8 text-center">
              <CTAButton text="Play TRX Hash Game Now" variant="primary" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

