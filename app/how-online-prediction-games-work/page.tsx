import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'How Number-Based Prediction Works in Online Games | 6Club Guide',
  description:
    'Learn how digit and number prediction modes work: betting windows, result display, and payout ideas. Neutral technical overview for Indian players.',
  alternates: {
    canonical: `${SITE_URL}/how-online-prediction-games-work`,
  },
  openGraph: {
    url: `${SITE_URL}/how-online-prediction-games-work`,
    title: 'Number-Based Prediction in Online Games',
    description: 'Educational look at number rounds, odds, and platform differences.',
    siteName: '6Club Guide',
    type: 'article',
  },
};

export default function HowOnlinePredictionGamesWorkPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <nav className="text-sm text-white/60 mb-8 font-poppins">
        <Link href="/" className="text-gold hover:underline">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-white/90">How online prediction games work</span>
      </nav>

      <article className="max-w-4xl">
        <header className="mb-10">
          <h1 className="text-3xl md:text-5xl font-orbitron font-bold text-gold mb-4">
            How Number-Based Prediction Systems Work in Games
          </h1>
          <p className="text-lg text-white/80 font-poppins">
            A closer look at 0–9 style rounds—not colour theory.
          </p>
        </header>

        <div className="space-y-5 text-white/90 font-poppins leading-relaxed">
          <p>
            Colour games get most of the attention, but many platforms also run rounds where the winning outcome is a{' '}
            <strong>single digit</strong> or a small set of numbers. Understanding how those systems are presented helps you
            read the screen correctly and avoid confusing one mode with another.
          </p>

          <section>
            <h2 className="text-2xl font-orbitron font-bold text-gold mt-10 mb-3">What &quot;number prediction&quot; usually means</h2>
            <p>
              In a typical digit game, the interface shows digits 0 through 9 (sometimes fewer, depending on rules). You pick
              one digit before the round locks. When the round ends, the app highlights the winning number. If your pick
              matches, the payout follows the multiplier shown for that digit. If not, the stake is consumed according to
              the same rule table.
            </p>
            <p>
              Confusion often appears when players expect &quot;closeness&quot; to matter—like being one digit away. In
              standard modes it does not: the win condition is usually an exact match unless the rules explicitly offer
              side bets for pairs or ranges.
            </p>
            <p>
              Some seasonal events temporarily change the digit pool or add bonus fields. Those events should display their
              own countdown and explanation banner. If you cannot find the banner, do not assume the normal 0–9 table still
              applies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-orbitron font-bold text-gold mt-10 mb-3">Where the number comes from</h2>
            <p>
              Operators may describe their draw as random, algorithm-based, or tied to an external feed—wording varies. From
              a player&apos;s view the important part is transparency: the result should appear clearly and at a predictable
              time. If history charts are offered, they describe past rounds only; they do not guarantee future digits.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-orbitron font-bold text-gold mt-10 mb-3">Odds, stakes, and tables</h2>
            <p>
              Rare digits sometimes carry higher multipliers; common outcomes may pay less. That pattern is a design choice,
              not a secret winning formula. Always expand the payout section before betting, especially if the app updates
              odds between sessions.
            </p>
            <p>
              Minimum and maximum stakes protect both the house and the player from extreme swings. If you are testing a new
              mode, use the lowest allowed stake until the flow feels familiar—especially when decimals or bonus chips are
              mixed into the same wallet.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-orbitron font-bold text-gold mt-10 mb-3">Side-by-side with colour or big/small</h2>
            <p>
              One installation may host several engines at once. You might see colour rounds on one tab and number rounds
              on another. Each has its own timer—switching tabs does not pause a live clock elsewhere. Keep modes separate
              in your mind to avoid mis-clicks.
            </p>
            <p>
              For a broader look at how mixed prediction products are described to the public, browsing{' '}
              <a href="https://bigmumbaiwinn.com/" className="text-gold hover:underline" rel="noopener noreferrer">
                Big Mumbai online
              </a>{' '}
              can illustrate how one brand explains several game families in one place—still, your own app&apos;s rules
              always win if there is a conflict.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-orbitron font-bold text-gold mt-10 mb-3">Platform variation</h2>
            <p>
              Minimum bet, maximum payout, and cooling-off rules are not standardised across India. Treat every operator as
              independent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-orbitron font-bold text-gold mt-10 mb-3">Risk note</h2>
            <p>
              Number games can feel analytical; they are still chance-based for practical purposes. Play only with money you
              can lose, and stop when you chase losses. This page is educational only.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
