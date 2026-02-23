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

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Play K3 Lotre on 6 Club',
  description: 'Step-by-step guide to playing the K3 Lotre lottery-style game on the 6 Club platform.',
  totalTime: 'PT5M',
  step: [
    { '@type': 'HowToStep', name: 'Download and open the 6 Club app', text: 'Install the 6 Club app from the official website or app store, then open it and log in to your account.' },
    { '@type': 'HowToStep', name: 'Navigate to K3 Lotre', text: 'From the 6 Club home or games menu, find and tap the K3 Lotre game to enter the game screen.' },
    { '@type': 'HowToStep', name: 'Check your balance and select bet amount', text: 'Ensure you have sufficient balance, then choose your bet amount for the round from the available options.' },
    { '@type': 'HowToStep', name: 'Select your numbers or play slip', text: 'Pick your numbers for the draw according to the game rules—either choose specific numbers or use quick pick if available.' },
    { '@type': 'HowToStep', name: 'Confirm your bet and submit', text: 'Review your selections and bet amount, then confirm and submit your bet before the draw closes.' },
    { '@type': 'HowToStep', name: 'Wait for the draw and check results', text: 'The draw runs at the scheduled time. Once results are published, check your ticket against the winning numbers to see if you won.' },
    { '@type': 'HowToStep', name: 'Claim winnings', text: 'If you have a winning combination, winnings are usually credited to your 6 Club account automatically or via the claim option in the game.' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is K3 Lotre on 6 Club?', acceptedAnswer: { '@type': 'Answer', text: 'K3 Lotre is a lottery-style game on the 6 Club platform where you select numbers and participate in draws. Results are drawn at scheduled times and payouts depend on how many numbers match.' } },
    { '@type': 'Question', name: 'How do I place a bet in K3 Lotre?', acceptedAnswer: { '@type': 'Answer', text: 'Open K3 Lotre in the 6 Club app, choose your bet amount, select your numbers (or use quick pick), then confirm and submit your bet before the draw deadline.' } },
    { '@type': 'Question', name: 'When are K3 Lotre results drawn?', acceptedAnswer: { '@type': 'Answer', text: 'Draw times are shown in the game screen on 6 Club. Check the countdown or schedule in the K3 Lotre section to place your bet before the draw closes.' } },
    { '@type': 'Question', name: 'Can I play K3 Lotre on mobile?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. K3 Lotre is available in the 6 Club app on Android and iOS, so you can play and check results on your phone or tablet.' } },
    { '@type': 'Question', name: 'Where do K3 Lotre winnings go?', acceptedAnswer: { '@type': 'Answer', text: 'Winnings are credited to your 6 Club account balance. You can use them for more gameplay or withdraw according to 6 Club withdrawal rules.' } },
  ],
}

export default function K3Lotre() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-8 text-gold">
          K3 Lotre - Play on 6 Club
        </h1>

        <div className="max-w-4xl mx-auto space-y-16">
          <div>
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

          <section className="bg-dark-blue/50 rounded-lg p-8 space-y-6">
            <h2 className="text-3xl font-orbitron font-bold text-gold">
              About K3 Lotre
            </h2>
            <p className="text-lg text-white/90 font-poppins leading-relaxed">
              K3 Lotre is an exciting lottery-style game available on the 6 Club platform. This game combines the thrill of traditional lottery games with modern digital gaming technology, providing players with an engaging and entertaining experience.
            </p>
            <p className="text-lg text-white/90 font-poppins leading-relaxed">
              The game is designed for entertainment purposes and is regularly updated to ensure smooth gameplay and an optimal user experience. You select numbers, place a bet, and wait for the scheduled draw to see if your numbers match the results.
            </p>
          </section>

          <section className="bg-dark-blue/50 rounded-lg p-8 space-y-8">
            <h2 className="text-3xl font-orbitron font-bold text-gold">
              How to Play K3 Lotre on 6 Club
            </h2>
            <p className="text-lg text-white/90 font-poppins leading-relaxed">
              Follow these steps to play K3 Lotre on the 6 Club app from start to finish. The process is straightforward and takes only a few minutes once you are familiar with the game screen.
            </p>

            <h3 className="text-2xl font-orbitron font-bold text-gold">
              Step 1: Download and open the 6 Club app
            </h3>
            <p className="text-white/90 font-poppins leading-relaxed">
              If you have not already, download the 6 Club app from the official 6 Club website or your device&apos;s app store. Install it and open the app. Log in with your mobile number and password, or complete registration if you are a new user. Ensure you have a stable internet connection so the game loads correctly.
            </p>

            <h3 className="text-2xl font-orbitron font-bold text-gold">
              Step 2: Navigate to the K3 Lotre game
            </h3>
            <p className="text-white/90 font-poppins leading-relaxed">
              From the 6 Club home screen or the main games menu, find the K3 Lotre tile or link. Tap it to enter the K3 Lotre game screen. You will see the current round, countdown to the next draw, and options to place your bet.
            </p>

            <h3 className="text-2xl font-orbitron font-bold text-gold">
              Step 3: Check your balance and choose your bet amount
            </h3>
            <p className="text-white/90 font-poppins leading-relaxed">
              At the top of the screen you will typically see your 6 Club account balance. Make sure you have enough to cover the bet you want to place. Select your stake from the available bet amounts (e.g. minimum and maximum limits). Stick to an amount you are comfortable with for entertainment.
            </p>

            <h3 className="text-2xl font-orbitron font-bold text-gold">
              Step 4: Select your numbers
            </h3>
            <p className="text-white/90 font-poppins leading-relaxed">
              Depending on how K3 Lotre is implemented on 6 Club, you will either pick a set of numbers yourself (e.g. three numbers in a given range) or use a &quot;Quick Pick&quot; or random option if available. Tap the numbers on the play slip or confirm the auto-selected numbers. Double-check your choices before proceeding.
            </p>

            <h3 className="text-2xl font-orbitron font-bold text-gold">
              Step 5: Confirm and submit your bet
            </h3>
            <p className="text-white/90 font-poppins leading-relaxed">
              Review your selected numbers and the total bet amount on the summary. If everything is correct, tap the confirm or submit button. Your bet is then placed for the current or next draw. You may receive an on-screen confirmation or a ticket reference—keep it in mind if you need to check results later.
            </p>

            <h3 className="text-2xl font-orbitron font-bold text-gold">
              Step 6: Wait for the draw and check results
            </h3>
            <p className="text-white/90 font-poppins leading-relaxed">
              Draws run at scheduled times; the countdown or schedule is usually visible on the K3 Lotre screen. Once the draw has taken place, results are published in the game. Open the results section or your bet history and compare the winning numbers to your ticket. Match types (e.g. exact order, any order) and payout tiers are explained in the game rules.
            </p>

            <h3 className="text-2xl font-orbitron font-bold text-gold">
              Step 7: Claim your winnings
            </h3>
            <p className="text-white/90 font-poppins leading-relaxed">
              If your numbers match the winning combination according to the game rules, winnings are usually credited automatically to your 6 Club balance. In some cases you may need to open the ticket and tap a &quot;Claim&quot; or similar button. You can then use the balance for more gameplay or request a withdrawal as per 6 Club&apos;s policies.
            </p>

            <div className="pt-4 text-center">
              <CTAButton text="Play K3 Lotre Now" variant="primary" />
            </div>
          </section>

          <section className="bg-dark-blue/50 rounded-lg p-8 space-y-6">
            <h2 className="text-3xl font-orbitron font-bold text-gold">
              Strategy &amp; Tips for K3 Lotre
            </h2>
            <p className="text-lg text-white/90 font-poppins leading-relaxed">
              K3 Lotre is a game of chance, but you can still play in a way that keeps the experience fun and within your control. Use these practical tips to get the most out of the game on 6 Club.
            </p>

            <h3 className="text-2xl font-orbitron font-bold text-gold">
              Set a budget and stick to it
            </h3>
            <p className="text-white/90 font-poppins leading-relaxed">
              Before you start playing, decide how much you are willing to spend on K3 Lotre in a session or a week. Use only that amount and stop when it is used. Never chase losses by increasing your bets. The 6 Club app allows you to choose bet sizes—use the minimum or low stakes if you want longer play with less risk.
            </p>

            <h3 className="text-2xl font-orbitron font-bold text-gold">
              Understand the odds and payout tiers
            </h3>
            <p className="text-white/90 font-poppins leading-relaxed">
              Check the game rules in the K3 Lotre section to see how many numbers you need to match and in what order for each payout level. Higher payouts usually mean lower odds. Knowing this helps you set realistic expectations and avoid over-betting on unlikely outcomes.
            </p>

            <h3 className="text-2xl font-orbitron font-bold text-gold">
              Play for entertainment, not income
            </h3>
            <p className="text-white/90 font-poppins leading-relaxed">
              Treat K3 Lotre as entertainment. Enjoy the thrill of the draw without relying on winnings for income. Take breaks between sessions and avoid playing when stressed or tired. If you ever feel that play is becoming a problem, use 6 Club&apos;s responsible gaming tools and seek support.
            </p>
          </section>

          <section className="bg-dark-blue/50 rounded-lg p-8 space-y-6">
            <h2 className="text-3xl font-orbitron font-bold text-gold">
              K3 Lotre FAQ
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-orbitron font-bold text-gold mb-2">What is K3 Lotre on 6 Club?</h3>
                <p className="text-white/90 font-poppins">
                  K3 Lotre is a lottery-style game on the 6 Club platform where you select numbers and participate in draws. Results are drawn at scheduled times and payouts depend on how many numbers match and the game&apos;s payout table.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-orbitron font-bold text-gold mb-2">How do I place a bet in K3 Lotre?</h3>
                <p className="text-white/90 font-poppins">
                  Open K3 Lotre in the 6 Club app, choose your bet amount, select your numbers (or use quick pick if available), then confirm and submit your bet before the draw deadline. Your ticket is then valid for the next draw.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-orbitron font-bold text-gold mb-2">When are K3 Lotre results drawn?</h3>
                <p className="text-white/90 font-poppins">
                  Draw times are shown in the game screen on 6 Club. Check the countdown or schedule in the K3 Lotre section so you can place your bet before the draw closes and see results shortly after.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-orbitron font-bold text-gold mb-2">Can I play K3 Lotre on mobile?</h3>
                <p className="text-white/90 font-poppins">
                  Yes. K3 Lotre is available in the 6 Club app on Android and iOS, so you can play, place bets, and check results on your phone or tablet from anywhere with internet access.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-orbitron font-bold text-gold mb-2">Where do K3 Lotre winnings go?</h3>
                <p className="text-white/90 font-poppins">
                  Winnings are credited to your 6 Club account balance. You can use them for more gameplay on K3 Lotre or other games, or request a withdrawal according to 6 Club&apos;s withdrawal rules and limits.
                </p>
              </div>
            </div>

            <div className="pt-4 text-center">
              <CTAButton text="Play K3 Lotre Now" variant="primary" />
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
