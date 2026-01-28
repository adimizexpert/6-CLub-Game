import type { Metadata } from 'next'
import Image from 'next/image'
import CTAButton from '@/components/CTAButton'

export const metadata: Metadata = {
  title: '5D Lotre on 6 Club Game - Play Now',
  description: 'Play 5D Lotre on 6 Club gaming platform. Experience the five-dimensional lottery game with exciting gameplay and regular updates.',
  alternates: {
    canonical: 'https://6clubguide.com/5d-lotre',
  },
  openGraph: {
    url: 'https://6clubguide.com/5d-lotre',
    title: '5D Lotre on 6 Club Game',
    description: 'Play 5D Lotre on 6 Club gaming platform.',
  },
}

export default function FiveDLotre() {
  return (
    <>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-8 text-gold">
          5D Lotre on 6 Club Game
        </h1>

        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <Image
              src="/images/5d.webp"
              alt="5D Lotre Game on 6 Club - Five-Dimensional Lottery Game | Download 6 Club APK"
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
              About 5D Lotre
            </h2>
            <p className="text-lg text-white/90 font-poppins leading-relaxed">
              5D Lotre is an advanced lottery game available on 6 Club that offers a five-dimensional gaming experience. This game provides players with multiple layers of excitement and strategic gameplay options.
            </p>
            <p className="text-lg text-white/90 font-poppins leading-relaxed">
              The game is designed for entertainment purposes and features regular updates to ensure the best possible gaming experience for all players.
            </p>

            <h3 className="text-2xl font-orbitron font-bold text-gold mt-8">
              Why Play 5D Lotre?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-white/90 font-poppins ml-4">
              <li>Five-dimensional gameplay experience</li>
              <li>Multiple winning opportunities</li>
              <li>Regular updates and improvements</li>
              <li>Easy to learn and play</li>
              <li>Available 24/7 on 6 Club platform</li>
            </ul>

            <div className="mt-8 text-center">
              <CTAButton text="Play 5D Lotre Now" variant="primary" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

