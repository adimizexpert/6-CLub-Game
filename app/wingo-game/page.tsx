import type { Metadata } from 'next'
import Image from 'next/image'
import CTAButton from '@/components/CTAButton'

export const metadata: Metadata = {
  title: 'Wingo Game on 6 Club - Play Now',
  description: 'Play Wingo Game on 6 Club gaming platform. Exciting bingo-style gameplay with modern features. Download 6 Club app to start playing Wingo.',
  alternates: {
    canonical: 'https://6clubguide.com/wingo-game',
  },
  openGraph: {
    url: 'https://6clubguide.com/wingo-game',
    title: 'Wingo Game on 6 Club',
    description: 'Play Wingo Game on 6 Club gaming platform.',
  },
}

export default function WingoGame() {
  return (
    <>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-8 text-gold">
          Wingo Game on 6 Club
        </h1>

        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <Image
              src="/images/WingoGame.webp"
              alt="Wingo Game on 6 Club - Modern Bingo-Style Gaming Experience | Download 6 Club APK"
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
              About Wingo Game
            </h2>
            <p className="text-lg text-white/90 font-poppins leading-relaxed">
              Wingo Game brings the classic bingo experience to the modern digital age on the 6 Club platform. This exciting game combines traditional bingo gameplay with contemporary features and a sleek interface.
            </p>
            <p className="text-lg text-white/90 font-poppins leading-relaxed">
              Whether you're a bingo enthusiast or new to the game, Wingo on 6 Club offers an engaging and entertaining experience that's easy to learn and fun to play.
            </p>

            <h3 className="text-2xl font-orbitron font-bold text-gold mt-8">
              What Makes Wingo Special?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-white/90 font-poppins ml-4">
              <li>Classic bingo gameplay with modern twists</li>
              <li>User-friendly interface</li>
              <li>Regular updates and improvements</li>
              <li>Available 24/7 on 6 Club</li>
              <li>Designed for entertainment and fun</li>
            </ul>

            <div className="mt-8 text-center">
              <CTAButton text="Play Wingo Game Now" variant="primary" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

