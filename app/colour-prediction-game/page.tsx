import type { Metadata } from 'next'
import Image from 'next/image'
import CTAButton from '@/components/CTAButton'

export const metadata: Metadata = {
  title: '6 Club Colour Prediction Game - Play Now',
  description: 'Play the 6 Club Colour Prediction Game. Fast-paced color prediction gameplay with quick results. Download 6 Club app to start playing.',
  alternates: {
    canonical: 'https://6clubguide.com/colour-prediction-game',
  },
  openGraph: {
    url: 'https://6clubguide.com/colour-prediction-game',
    title: '6 Club Colour Prediction Game',
    description: 'Play the 6 Club Colour Prediction Game.',
  },
}

export default function ColourPredictionGame() {
  return (
    <>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-8 text-gold">
          6 Club Colour Prediction Game
        </h1>

        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <Image
              src="/images/6clubcolour.webp"
              alt="6 Club Colour Prediction Game - Fast-Paced Color Prediction Gaming | Download 6 Club APK"
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
              About Colour Prediction Game
            </h2>
            <p className="text-lg text-white/90 font-poppins leading-relaxed">
              The 6 Club Colour Prediction Game is one of the most popular games on the platform, offering fast-paced action and quick results. This game combines the thrill of rapid-fire color prediction with an intuitive and user-friendly interface.
            </p>
            <p className="text-lg text-white/90 font-poppins leading-relaxed">
              Perfect for players who enjoy quick rounds and instant gratification, the Colour Prediction Game is regularly updated to ensure smooth performance and an optimal gaming experience.
            </p>

            <h3 className="text-2xl font-orbitron font-bold text-gold mt-8">
              Game Highlights
            </h3>
            <ul className="list-disc list-inside space-y-2 text-white/90 font-poppins ml-4">
              <li>Fast-paced gameplay with quick results</li>
              <li>Simple and intuitive interface</li>
              <li>Regular updates for optimal performance</li>
              <li>Available on all devices</li>
              <li>Entertainment-focused design</li>
            </ul>

            <div className="mt-8 text-center">
              <CTAButton text="Play Colour Prediction Now" variant="primary" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

