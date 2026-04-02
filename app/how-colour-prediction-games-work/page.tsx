import type { Metadata } from 'next';
import Link from 'next/link';
import ColourPredictionGuideArticle from '@/components/ColourPredictionGuideArticle';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'How Colour Prediction Games Work | Educational Guide (India)',
  description:
    'Understand colour prediction mechanics in plain English: betting windows, results, common bet types, and risks. Neutral information for readers in India.',
  alternates: {
    canonical: `${SITE_URL}/how-colour-prediction-games-work`,
  },
  openGraph: {
    url: `${SITE_URL}/how-colour-prediction-games-work`,
    title: 'How Colour Prediction Games Work | Educational Guide',
    description:
      'Neutral overview of how colour prediction rounds work, platform differences, and responsible play.',
    siteName: '6Club Guide',
    type: 'article',
  },
};

export default function HowColourPredictionGamesWorkPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <nav className="text-sm text-white/60 mb-8 font-poppins">
        <Link href="/" className="text-gold hover:underline">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-white/90">How colour prediction games work</span>
      </nav>
      <header className="mb-10 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-gold mb-4">
          How Colour Prediction Games Work
        </h1>
        <p className="text-lg text-white/80 font-poppins max-w-3xl">
          General information only. Not legal or financial advice.
        </p>
      </header>
      <ColourPredictionGuideArticle variant="dark" responsibleHref="/responsible-gaming" />
    </div>
  );
}
