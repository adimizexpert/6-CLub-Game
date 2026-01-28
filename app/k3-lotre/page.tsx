import type { Metadata } from 'next'
import Image from 'next/image'
import CTAButton from '@/components/CTAButton'

export const metadata: Metadata = {
  title: 'K3 Lotre Game on 6 Club - Play Now',
  description: 'Play K3 Lotre on 6 Club gaming platform. Learn how to play, rules, and strategies for K3 Lotre game. Download 6 Club app to start playing.',
  alternates: {
    canonical: 'https://6clubguide.com/k3-lotre',
  },
  openGraph: {
    url: 'https://6clubguide.com/k3-lotre',
    title: 'K3 Lotre Game on 6 Club',
    description: 'Play K3 Lotre on 6 Club gaming platform.',
  },
}

export default function K3Lotre() {
  return (
    <>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-8 text-gold">
          K3 Lotre - Play on 6 Club
        </h1>

        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <Image
              src="/images/K3-Lotre.webp"
              alt="K3 Lotre Game on 6 Club - Play K3 Lotre Lottery Game | Download 6 Club APK"
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
              About K3 Lotre
            </h2>
            <p className="text-lg text-white/90 font-poppins leading-relaxed">
              K3 Lotre is an exciting lottery-style game available on the 6 Club platform. This game combines the thrill of traditional lottery games with modern digital gaming technology, providing players with an engaging and entertaining experience.
            </p>
            <p className="text-lg text-white/90 font-poppins leading-relaxed">
              The game is designed for entertainment purposes and is regularly updated to ensure smooth gameplay and an optimal user experience.
            </p>

            <h3 className="text-2xl font-orbitron font-bold text-gold mt-8">
              How to Play
            </h3>
            <ul className="list-disc list-inside space-y-2 text-white/90 font-poppins ml-4">
              <li>Download and install the 6 Club app</li>
              <li>Register or login to your account</li>
              <li>Navigate to the K3 Lotre game section</li>
              <li>Follow the on-screen instructions to place your bets</li>
              <li>Wait for the results and see if you've won!</li>
            </ul>

            <div className="mt-8 text-center">
              <CTAButton text="Play K3 Lotre Now" variant="primary" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

