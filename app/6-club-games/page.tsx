import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import CTAButton from '@/components/CTAButton'

export const metadata: Metadata = {
  title: '6 Club Games - Wingo, K3 Lotre, Slots, Casino | Play Now',
  description:
    'Play 6 Club games - Wingo, K3 Lotre, TRX Hash, slots, casino, sports & more. Join 80M+ players. Download 6 Club app & start winning today!',
  alternates: {
    canonical: 'https://6clubguide.com/6-club-games',
  },
  openGraph: {
    url: 'https://6clubguide.com/6-club-games',
    title: '6 Club Games - Complete Gaming Experience',
    description:
      'Discover 6 Club featured games like Wingo, TRX Hash, K3 Lotre and 5D Lotre plus many more categories.',
    images: [
      {
        url: 'https://6clubguide.com/images/6-club-main.webp',
        width: 1200,
        height: 630,
        alt: '6 Club Games - Complete Gaming Experience',
      },
    ],
  },
}

export default function SixClubGames() {
  const gameServerSchema = {
    '@context': 'https://schema.org',
    '@type': 'GameServer',
    name: '6 Club Games',
    description: 'Play Wingo, K3 Lotre, TRX Hash and hundreds of other games.',
    game: [
      {
        '@type': 'VideoGame',
        name: 'Wingo',
        description: 'Fast-paced color prediction game',
      },
      {
        '@type': 'VideoGame',
        name: 'K3 Lotre',
        description: 'Lottery-style game with strategic depth',
      },
      {
        '@type': 'VideoGame',
        name: 'TRX Hash',
        description: 'Strategic cryptocurrency gaming innovation',
      },
      {
        '@type': 'VideoGame',
        name: '5D Lotre',
        description: 'Multi-dimensional gaming challenge',
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gameServerSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold text-center mb-6 text-gold">
          6 Club Games - Complete Gaming Experience | Play Wingo, K3 Lotre, TRX Hash &amp; More
        </h1>

        <p className="text-white/90 font-poppins max-w-4xl mx-auto text-center text-lg leading-relaxed mb-6">
          At 6 Club, we bring you an exceptional variety of games designed to challenge your skills, test your strategy,
          and reward your instincts. Whether you&apos;re wondering <strong>how to play 6 club</strong> games or you&apos;re a
          seasoned player looking for your next challenge, our platform offers something special for everyone.
        </p>
        <p className="text-white/90 font-poppins max-w-4xl mx-auto text-center text-lg leading-relaxed mb-12">
          The <strong>6 club app</strong> provides seamless access to our complete game library, letting you explore
          featured games like Wingo, TRX Hash, K3 Lotre, and 5D Lotre. Manage your <strong>6 club deposit</strong> and{' '}
          <strong>6 club withdrawal</strong>, track your progress, and enjoy a trusted gaming experience built for a
          global community of 80M+ players.
        </p>

        <section className="bg-dark-blue/50 rounded-lg p-8 border border-gold/20">
          <h2 className="text-3xl font-orbitron font-bold text-gold mb-6">
            6 Club Featured Games - Premium Gaming Experiences
          </h2>

          <div className="space-y-10">
            {/* Wingo */}
            <article className="bg-dark-blue/60 rounded-lg p-6 border border-gold/20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-orbitron font-bold text-gold mb-3">
                    Wingo - Fast-Paced Color Prediction Gaming Excellence
                  </h3>
                  <p className="text-white/90 font-poppins leading-relaxed mb-4">
                    Wingo is one of the most popular games on the <strong>6 club</strong> platform—simple to learn,
                    exciting to play, and packed with quick rounds that keep the energy high. Beginners love the clear
                    rules, while experienced players enjoy developing prediction strategies.
                  </p>
                  <Link href="/wingo-game" className="text-gold hover:underline font-poppins font-semibold">
                    Learn Wingo rules &amp; tips →
                  </Link>
                </div>
                <div className="flex justify-center lg:justify-end">
                  <Image
                    src="/images/WingoGame.webp"
                    alt="Wingo game on 6 Club - fast-paced color prediction gameplay"
                    width={900}
                    height={500}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="w-full max-w-xl h-auto rounded-lg shadow-2xl border-2 border-gold/30 hover:border-gold/60 transition-all duration-300"
                    loading="lazy"
                    quality={88}
                  />
                </div>
              </div>
            </article>

            {/* TRX Hash */}
            <article className="bg-dark-blue/60 rounded-lg p-6 border border-gold/20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-orbitron font-bold text-gold mb-3">
                    TRX Hash - Strategic Cryptocurrency Gaming Innovation
                  </h3>
                  <p className="text-white/90 font-poppins leading-relaxed mb-4">
                    TRX Hash blends strategy with blockchain-inspired transparency. Players enjoy a unique mix of
                    analytics and fast decisions—perfect for those who value modern, provably-fair style gameplay.
                  </p>
                  <Link href="/trx-hash-game" className="text-gold hover:underline font-poppins font-semibold">
                    Explore TRX Hash →
                  </Link>
                </div>
                <div className="flex justify-center lg:justify-end">
                  <Image
                    src="/images/TRXhash.webp"
                    alt="TRX Hash game on 6 Club - strategic cryptocurrency-style gaming"
                    width={900}
                    height={500}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="w-full max-w-xl h-auto rounded-lg shadow-2xl border-2 border-gold/30 hover:border-gold/60 transition-all duration-300"
                    loading="lazy"
                    quality={88}
                  />
                </div>
              </div>
            </article>

            {/* K3 Lotre */}
            <article className="bg-dark-blue/60 rounded-lg p-6 border border-gold/20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-orbitron font-bold text-gold mb-3">
                    K3 Lotre - Lottery-Style Gaming with Strategic Depth
                  </h3>
                  <p className="text-white/90 font-poppins leading-relaxed mb-4">
                    K3 Lotre combines lottery-style excitement with prediction depth. Start with simple options as a new
                    player, then explore advanced combinations as you gain confidence after your <strong>6 club login</strong>.
                  </p>
                  <Link href="/k3-lotre" className="text-gold hover:underline font-poppins font-semibold">
                    Learn K3 Lotre →
                  </Link>
                </div>
                <div className="flex justify-center lg:justify-end">
                  <Image
                    src="/images/K3-Lotre.webp"
                    alt="K3 Lotre game on 6 Club - lottery-style predictions and combos"
                    width={900}
                    height={500}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="w-full max-w-xl h-auto rounded-lg shadow-2xl border-2 border-gold/30 hover:border-gold/60 transition-all duration-300"
                    loading="lazy"
                    quality={88}
                  />
                </div>
              </div>
            </article>

            {/* 5D Lotre */}
            <article className="bg-dark-blue/60 rounded-lg p-6 border border-gold/20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-orbitron font-bold text-gold mb-3">
                    5D Lotre - Multi-Dimensional Gaming Challenge
                  </h3>
                  <p className="text-white/90 font-poppins leading-relaxed mb-4">
                    5D Lotre is built for players who love deeper strategy. With multi-dimensional prediction options,
                    it rewards thoughtful decision-making and consistent practice.
                  </p>
                  <Link href="/5d-lotre" className="text-gold hover:underline font-poppins font-semibold">
                    Explore 5D Lotre →
                  </Link>
                </div>
                <div className="flex justify-center lg:justify-end">
                  <Image
                    src="/images/5d.webp"
                    alt="5D Lotre on 6 Club - multi-dimensional lottery challenge"
                    width={900}
                    height={500}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="w-full max-w-xl h-auto rounded-lg shadow-2xl border-2 border-gold/30 hover:border-gold/60 transition-all duration-300"
                    loading="lazy"
                    quality={88}
                  />
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="mt-12 bg-dark-blue/50 rounded-lg p-8 border border-gold/20">
          <h2 className="text-3xl font-orbitron font-bold text-gold mb-6">
            Explore the Complete 6 Club Gaming Universe
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white/90 font-poppins">
            <div className="bg-dark-blue/60 border border-gold/20 rounded-lg p-6">
              <h3 className="text-xl font-orbitron font-bold text-gold mb-2">6 Club Lottery</h3>
              <p>Lottery-style games with modern features, instant results, and strategic forecasting.</p>
            </div>
            <div className="bg-dark-blue/60 border border-gold/20 rounded-lg p-6">
              <h3 className="text-xl font-orbitron font-bold text-gold mb-2">6 Club Mini Games</h3>
              <p>Quick entertainment on demand—fast games designed for short breaks and instant fun.</p>
            </div>
            <div className="bg-dark-blue/60 border border-gold/20 rounded-lg p-6">
              <h3 className="text-xl font-orbitron font-bold text-gold mb-2">6 Club Slots</h3>
              <p>Classic slots with modern twists: themes, bonuses, multipliers, and big-win potential.</p>
            </div>
            <div className="bg-dark-blue/60 border border-gold/20 rounded-lg p-6">
              <h3 className="text-xl font-orbitron font-bold text-gold mb-2">6 Club Fishing</h3>
              <p>Skill-based arcade action where timing, aim, and strategy influence your rewards.</p>
            </div>
            <div className="bg-dark-blue/60 border border-gold/20 rounded-lg p-6">
              <h3 className="text-xl font-orbitron font-bold text-gold mb-2">6 Club PVC</h3>
              <p>Competitive AI challenges that help you practice and level up your skills.</p>
            </div>
            <div className="bg-dark-blue/60 border border-gold/20 rounded-lg p-6">
              <h3 className="text-xl font-orbitron font-bold text-gold mb-2">6 Club Casino</h3>
              <p>Authentic casino-style experiences with smooth gameplay and fair mechanics.</p>
            </div>
            <div className="bg-dark-blue/60 border border-gold/20 rounded-lg p-6 md:col-span-2">
              <h3 className="text-xl font-orbitron font-bold text-gold mb-2">6 Club Sports</h3>
              <p>Comprehensive sports gaming options across major sports and leagues worldwide.</p>
            </div>
          </div>
        </section>

        <section className="mt-12 bg-dark-blue/50 rounded-lg p-8 border border-gold/20 text-center">
          <h2 className="text-3xl font-orbitron font-bold text-gold mb-4">
            Ready to Join 6 Club?
          </h2>
          <p className="text-white/90 font-poppins max-w-3xl mx-auto mb-8">
            Need help getting started? Read the{' '}
            <Link href="/guide" className="text-gold hover:underline font-semibold">
              registration &amp; login guide
            </Link>{' '}
            or go straight to the official flow below.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton text="Register Now" variant="primary" className="whitespace-nowrap" />
            <CTAButton text="Login Now" variant="secondary" className="whitespace-nowrap" />
          </div>
        </section>
      </div>
    </>
  )
}


