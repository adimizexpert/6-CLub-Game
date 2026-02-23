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

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Play 6 Club Colour Prediction Game',
  description: 'Step-by-step guide to playing the Colour Prediction game on the 6 Club platform.',
  totalTime: 'PT3M',
  step: [
    { '@type': 'HowToStep', name: 'Open 6 Club and go to Colour Prediction', text: 'Log in to the 6 Club app and open the Colour Prediction game from the games menu.' },
    { '@type': 'HowToStep', name: 'Check your balance', text: 'Ensure you have enough balance to place a bet. Add funds if needed.' },
    { '@type': 'HowToStep', name: 'Choose your bet amount', text: 'Select how much you want to stake on the next round.' },
    { '@type': 'HowToStep', name: 'Predict the next colour', text: 'Choose your prediction—typically Red or Green (or the options shown in the game)—before the round closes.' },
    { '@type': 'HowToStep', name: 'Confirm your bet', text: 'Review your prediction and stake, then confirm to lock in your bet.' },
    { '@type': 'HowToStep', name: 'See the result and winnings', text: 'When the round ends, the result is shown. If your colour matches, winnings are added to your balance.' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is the 6 Club Colour Prediction Game?', acceptedAnswer: { '@type': 'Answer', text: 'Colour Prediction on 6 Club is a fast game where you predict which colour (e.g. Red or Green) will be the result of the next round. You place a bet, choose a colour, and win if your prediction is correct.' } },
    { '@type': 'Question', name: 'How do I place a bet in Colour Prediction?', acceptedAnswer: { '@type': 'Answer', text: 'Open the Colour Prediction game, choose your bet amount, select Red or Green (or the option shown), then confirm your bet before the round timer ends.' } },
    { '@type': 'Question', name: 'How long does each round take?', acceptedAnswer: { '@type': 'Answer', text: 'Rounds are usually very short—often under a minute. You must place and confirm your bet before the countdown ends.' } },
    { '@type': 'Question', name: 'Can I play Colour Prediction on mobile?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The game is available in the 6 Club app on Android and iOS, so you can play on your phone or tablet.' } },
    { '@type': 'Question', name: 'Where do Colour Prediction winnings go?', acceptedAnswer: { '@type': 'Answer', text: 'Winnings are added to your 6 Club account balance. You can use them for more rounds or withdraw according to 6 Club withdrawal rules.' } },
  ],
}

export default function ColourPredictionGame() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-8 text-gold">
          6 Club Colour Prediction Game
        </h1>

        <div className="max-w-4xl mx-auto space-y-16">
          <div>
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

          <section className="bg-dark-blue/50 rounded-lg p-8 space-y-6">
            <h2 className="text-3xl font-orbitron font-bold text-gold">
              About Colour Prediction Game
            </h2>
            <p className="text-lg text-white/90 font-poppins leading-relaxed">
              The 6 Club Colour Prediction Game is one of the most popular games on the platform, offering fast-paced rounds and quick results. You predict whether the next result will be one colour or another (typically Red or Green), place a bet, and find out within seconds.
            </p>
            <p className="text-lg text-white/90 font-poppins leading-relaxed">
              Perfect for players who enjoy quick rounds and simple rules, the game has an intuitive interface and is regularly updated for smooth performance. It is designed for entertainment and works on all devices via the 6 Club app.
            </p>
          </section>

          <section className="bg-dark-blue/50 rounded-lg p-8 space-y-8">
            <h2 className="text-3xl font-orbitron font-bold text-gold">
              How to Play 6 Club Colour Prediction Game
            </h2>
            <p className="text-lg text-white/90 font-poppins leading-relaxed">
              Colour Prediction is easy to learn. You choose a colour, place a bet, and the round result tells you if you won. Follow these steps to play from start to finish on 6 Club.
            </p>

            <h3 className="text-2xl font-orbitron font-bold text-gold">
              Step 1: Open 6 Club and go to Colour Prediction
            </h3>
            <p className="text-white/90 font-poppins leading-relaxed">
              Open the 6 Club app and log in. From the home or games menu, find the Colour Prediction game and tap to open it. The game screen will show the current round, a countdown timer, and the two colour options (usually Red and Green). Ensure you have a good internet connection so the result loads quickly.
            </p>

            <h3 className="text-2xl font-orbitron font-bold text-gold">
              Step 2: Check your balance
            </h3>
            <p className="text-white/90 font-poppins leading-relaxed">
              Your 6 Club account balance is used to place bets. Check the balance displayed on screen. If it is low, add funds via the deposit or recharge option in the app before you start. Set a limit for how much you will spend in a session and stick to it—rounds are fast, so it is easy to play many in a row.
            </p>

            <h3 className="text-2xl font-orbitron font-bold text-gold">
              Step 3: Choose your bet amount
            </h3>
            <p className="text-white/90 font-poppins leading-relaxed">
              Select how much you want to stake on the next round. The game will show minimum and maximum bet limits. Choose an amount that fits your budget. You can change the stake each round, so you can start small while learning and adjust later. Never bet more than you can afford to lose.
            </p>

            <h3 className="text-2xl font-orbitron font-bold text-gold">
              Step 4: Predict the next colour
            </h3>
            <p className="text-white/90 font-poppins leading-relaxed">
              Before the round timer ends, choose which colour you think the result will be. Typically you tap either Red or Green (or the options shown in your version). Your choice is highlighted. The result is determined when the round closes, so make sure you have selected and are ready to confirm in time.
            </p>

            <h3 className="text-2xl font-orbitron font-bold text-gold">
              Step 5: Confirm your bet
            </h3>
            <p className="text-white/90 font-poppins leading-relaxed">
              Review your selected colour and bet amount. When you are satisfied, tap the confirm or place bet button. Your bet is then locked for that round. If you do not confirm before the countdown ends, your bet may not be accepted and you will need to wait for the next round. Once confirmed, you cannot change your prediction.
            </p>

            <h3 className="text-2xl font-orbitron font-bold text-gold">
              Step 6: See the result and winnings
            </h3>
            <p className="text-white/90 font-poppins leading-relaxed">
              When the round ends, the result is displayed—either the winning colour or a visual (e.g. a wheel or card) showing the outcome. If the result matches your prediction, you win. Winnings are calculated using the game&apos;s payout (often 1:1 or as shown in the rules) and added to your 6 Club balance. You can then place another bet for the next round or leave the game. Results are instant so you know right away whether you won.
            </p>

            <div className="pt-4 text-center">
              <CTAButton text="Play Colour Prediction Now" variant="primary" />
            </div>
          </section>

          <section className="bg-dark-blue/50 rounded-lg p-8 space-y-6">
            <h2 className="text-3xl font-orbitron font-bold text-gold">
              Strategy &amp; Tips for Colour Prediction
            </h2>
            <p className="text-lg text-white/90 font-poppins leading-relaxed">
              Colour Prediction is a simple game of chance. You can still play in a way that keeps it fun and under control with these tips.
            </p>

            <h3 className="text-2xl font-orbitron font-bold text-gold">
              Set a session limit
            </h3>
            <p className="text-white/90 font-poppins leading-relaxed">
              Because rounds are very fast, decide before you start how much you will spend in that session. Use only that amount and stop when it is gone. Avoid chasing losses by increasing your bet size. Use smaller stakes if you want to enjoy more rounds without spending more. Treat the game as paid entertainment with a fixed cost.
            </p>

            <h3 className="text-2xl font-orbitron font-bold text-gold">
              Understand the payout
            </h3>
            <p className="text-white/90 font-poppins leading-relaxed">
              Check the game rules to see the payout for a correct prediction (e.g. 1:1 or 2:1). Knowing this helps you understand how much you can win per round and set realistic expectations. Past results do not influence the next round—each result is independent.
            </p>

            <h3 className="text-2xl font-orbitron font-bold text-gold">
              Play for fun and take breaks
            </h3>
            <p className="text-white/90 font-poppins leading-relaxed">
              Treat Colour Prediction as light entertainment, not a way to make money. Take short breaks every few rounds to avoid autopilot betting. Do not play when you are stressed or tired. If you ever feel that play is becoming a problem, use 6 Club&apos;s responsible gaming tools and seek support.
            </p>
          </section>

          <section className="bg-dark-blue/50 rounded-lg p-8 space-y-6">
            <h2 className="text-3xl font-orbitron font-bold text-gold">
              Colour Prediction Game FAQ
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-orbitron font-bold text-gold mb-2">What is the 6 Club Colour Prediction Game?</h3>
                <p className="text-white/90 font-poppins">
                  Colour Prediction on 6 Club is a fast game where you predict which colour (e.g. Red or Green) will be the result of the next round. You place a bet, choose a colour, and win if your prediction matches the result when the round closes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-orbitron font-bold text-gold mb-2">How do I place a bet in Colour Prediction?</h3>
                <p className="text-white/90 font-poppins">
                  Open the Colour Prediction game in the 6 Club app, choose your bet amount, select Red or Green (or the option shown), then confirm your bet before the round timer ends. Your bet is locked once confirmed.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-orbitron font-bold text-gold mb-2">How long does each round take?</h3>
                <p className="text-white/90 font-poppins">
                  Rounds are usually very short—often under a minute. The countdown is visible on screen. You must place and confirm your bet before the countdown ends to participate in that round.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-orbitron font-bold text-gold mb-2">Can I play Colour Prediction on mobile?</h3>
                <p className="text-white/90 font-poppins">
                  Yes. The Colour Prediction game is available in the 6 Club app on Android and iOS, so you can play on your phone or tablet from anywhere with internet.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-orbitron font-bold text-gold mb-2">Where do Colour Prediction winnings go?</h3>
                <p className="text-white/90 font-poppins">
                  Winnings are added to your 6 Club account balance. You can use them for more Colour Prediction rounds or other 6 Club games, or request a withdrawal according to the platform&apos;s withdrawal rules.
                </p>
              </div>
            </div>

            <div className="pt-4 text-center">
              <CTAButton text="Play Colour Prediction Now" variant="primary" />
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
