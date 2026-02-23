import type { Metadata } from 'next'
import Link from 'next/link'
import { TELEGRAM_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Join 6Club Official Telegram Channel',
  description:
    'Get exclusive tips, game updates, bonuses, and support on Telegram. Join the official 6Club community channel.',
  alternates: {
    canonical: 'https://6clubguide.com/telegram',
  },
  openGraph: {
    url: 'https://6clubguide.com/telegram',
    title: 'Join 6Club Official Telegram Channel',
    description:
      'Get exclusive tips, game updates, bonuses, and support directly on Telegram. Join our official community.',
  },
}

const benefits = [
  { title: 'Daily game tips', description: 'Get actionable tips and strategies for 6 Club games delivered to your Telegram.' },
  { title: 'Exclusive bonuses', description: 'Access channel-only bonus codes and promotions before anyone else.' },
  { title: 'Live support', description: 'Reach our team quickly for help with account, deposits, or gameplay.' },
  { title: 'Latest updates', description: 'Be the first to know about new games, features, and maintenance.' },
]

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  )
}

export default function TelegramPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 text-gold">
          Join Our Official Telegram Community
        </h1>
        <p className="text-lg text-white/90 font-poppins mb-10 leading-relaxed">
          Get exclusive tips, game updates, bonuses, and support directly on Telegram. Join thousands of 6Club players in our official community channel.
        </p>
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg font-orbitron font-bold text-white transition-all duration-300 hover:opacity-90 transform hover:scale-105 active:scale-95 shadow-lg"
          style={{ backgroundColor: '#229ED9' }}
        >
          <TelegramIcon className="w-7 h-7" />
          Join Telegram Channel
        </a>
      </div>

      <section className="max-w-4xl mx-auto mt-16">
        <h2 className="text-2xl md:text-3xl font-orbitron font-bold text-center mb-10 text-gold">
          Why Join Our Telegram?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((item) => (
            <div
              key={item.title}
              className="bg-dark-blue/50 rounded-lg p-6 border border-gold/20"
            >
              <h3 className="text-xl font-orbitron font-bold text-gold mb-2">
                {item.title}
              </h3>
              <p className="text-white/90 font-poppins text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-3xl mx-auto mt-12 text-center">
        <Link
          href="/"
          className="text-gold hover:underline font-poppins text-sm"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}
