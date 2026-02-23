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

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Play 5D Lotre on 6 Club',
  description: 'Step-by-step guide to playing the 5D Lotre five-digit lottery game on the 6 Club platform.',
  totalTime: 'PT5M',
  step: [
    { '@type': 'HowToStep', name: 'Open 6 Club and go to 5D Lotre', text: 'Log in to the 6 Club app and open the 5D Lotre game from the games menu.' },
    { '@type': 'HowToStep', name: 'Check balance and choose bet amount', text: 'Ensure you have enough balance and select your bet amount for the 5D Lotre draw.' },
    { '@type': 'HowToStep', name: 'Select your five digits', text: 'Pick five digits (e.g. 0–9 each) for the 5D Lotre draw, or use Quick Pick if available.' },
    { '@type': 'HowToStep', name: 'Confirm your bet', text: 'Review your 5D selection and stake, then confirm to submit your bet before the draw closes.' },
    { '@type': 'HowToStep', name: 'Wait for the draw result', text: 'When the draw runs, the winning 5D number is published. Check the result in the game.' },
    { '@type': 'HowToStep', name: 'Check winnings', text: 'Match your digits to the result in the order required by the game. Winnings are credited to your 6 Club balance.' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is 5D Lotre on 6 Club?', acceptedAnswer: { '@type': 'Answer', text: '5D Lotre is a five-digit lottery game on 6 Club. You pick five digits, place a bet, and win based on how your number matches the drawn result (e.g. exact order, any order, or partial matches).' } },
    { '@type': 'Question', name: 'How do I pick numbers in 5D Lotre?', acceptedAnswer: { '@type': 'Answer', text: 'In the 5D Lotre game screen, select one digit for each of the five positions (usually 0–9 per position). You can choose manually or use Quick Pick for random numbers, then confirm your bet.' } },
    { '@type': 'Question', name: 'When is the 5D Lotre draw?', acceptedAnswer: { '@type': 'Answer', text: 'Draw times are shown in the 5D Lotre section on 6 Club. Place your bet before the countdown ends. Results are published shortly after the draw.' } },
    { '@type': 'Question', name: 'Can I play 5D Lotre on my phone?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. 5D Lotre is available in the 6 Club app on Android and iOS, so you can play and check results on your mobile device.' } },
    { '@type': 'Question', name: 'How are 5D Lotre winnings paid?', acceptedAnswer: { '@type': 'Answer', text: 'Winnings are credited to your 6 Club account balance according to the game payout table. You can use them for more play or withdraw as per 6 Club withdrawal rules.' } },
  ],
}

export default function FiveDLotre() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-8 text-gold">
          5D Lotre on 6 Club Game
        </h1>

        <div className="max-w-4xl mx-auto space-y-16">
          <div>
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

          <section className="bg-dark-blue/50 rounded-lg p-8 space-y-6">
            <h2 className="text-3xl font-orbitron font-bold text-gold">
              About 5D Lotre
            </h2>
            <p className="text-lg text-white/90 font-poppins leading-relaxed">
              5D Lotre is an advanced lottery game on 6 Club that uses a five-digit number format. You choose five digits, place a bet, and the draw produces a winning five-digit result. Payouts depend on how your number matches—for example exact order, any order, or partial matches—as defined in the game rules.
            </p>
            <p className="text-lg text-white/90 font-poppins leading-relaxed">
              The game is designed for entertainment and is regularly updated. It offers multiple ways to win and is easy to play once you understand the basic flow: select digits, confirm your bet, and wait for the draw.
            </p>
          </section>

          <section className="bg-dark-blue/50 rounded-lg p-8 space-y-8">
            <h2 className="text-3xl font-orbitron font-bold text-gold">
              How to Play 5D Lotre on 6 Club
            </h2>
            <p className="text-lg text-white/90 font-poppins leading-relaxed">
              Playing 5D Lotre on 6 Club is straightforward. Follow these steps from opening the game to claiming winnings. The key is to select your five digits, place your bet before the draw closes, and then check the result.
            </p>

            <h3 className="text-2xl font-orbitron font-bold text-gold">
              Step 1: Open 6 Club and go to 5D Lotre
            </h3>
            <p className="text-white/90 font-poppins leading-relaxed">
              Log in to the 6 Club app and go to the games menu. Find 5D Lotre and tap to open it. You will see the current or next draw, a countdown timer, and the number selection interface. Make sure you have a stable connection so the game loads and submits your bet correctly.
            </p>

            <h3 className="text-2xl font-orbitron font-bold text-gold">
              Step 2: Check your balance and choose your bet amount
            </h3>
            <p className="text-white/90 font-poppins leading-relaxed">
              Your 6 Club balance is used to place bets. Check that you have enough for at least one bet at your chosen stake. Select your bet amount from the options provided (e.g. minimum to maximum). Start with a smaller stake if you are new so you can learn the game without risking too much.
            </p>

            <h3 className="text-2xl font-orbitron font-bold text-gold">
              Step 3: Select your five digits
            </h3>
            <p className="text-white/90 font-poppins leading-relaxed">
              In 5D Lotre you pick five digits to form your number. Typically each digit can be from 0 to 9. Use the play slip: tap or select the digit you want for the first position, then the second, third, fourth, and fifth. Some versions offer a Quick Pick or random option—use it if you prefer not to choose manually. Double-check your number before confirming.
            </p>

            <h3 className="text-2xl font-orbitron font-bold text-gold">
              Step 4: Confirm your bet
            </h3>
            <p className="text-white/90 font-poppins leading-relaxed">
              Review the five-digit number and the total bet on the summary screen. If everything is correct, tap confirm or submit. Your bet is then registered for the upcoming draw. Ensure you submit before the countdown reaches zero, or you will need to wait for the next draw. You may get a ticket or receipt—useful for checking results later.
            </p>

            <h3 className="text-2xl font-orbitron font-bold text-gold">
              Step 5: Wait for the draw result
            </h3>
            <p className="text-white/90 font-poppins leading-relaxed">
              The 5D Lotre draw runs at the scheduled time. When it finishes, the winning five-digit number is published in the game. Open the results section or your bet history and find the draw you participated in. The winning number will be displayed clearly so you can compare it to your ticket.
            </p>

            <h3 className="text-2xl font-orbitron font-bold text-gold">
              Step 6: Check winnings and claim
            </h3>
            <p className="text-white/90 font-poppins leading-relaxed">
              Compare your five digits to the winning number in the order required by the game (exact match, any order, first three, last two, etc.—see the rules for each prize tier). If you have a winning combination, winnings are usually credited automatically to your 6 Club balance. If there is a claim button, tap it. You can then use the balance for more 5D Lotre play or other games, or withdraw as per 6 Club policy.
            </p>

            <div className="pt-4 text-center">
              <CTAButton text="Play 5D Lotre Now" variant="primary" />
            </div>
          </section>

          <section className="bg-dark-blue/50 rounded-lg p-8 space-y-6">
            <h2 className="text-3xl font-orbitron font-bold text-gold">
              Strategy &amp; Tips for 5D Lotre
            </h2>
            <p className="text-lg text-white/90 font-poppins leading-relaxed">
              5D Lotre is a lottery game, so outcomes are random. You can still play in a controlled and enjoyable way with these tips.
            </p>

            <h3 className="text-2xl font-orbitron font-bold text-gold">
              Know the payout tiers
            </h3>
            <p className="text-white/90 font-poppins leading-relaxed">
              Read the 5D Lotre rules on 6 Club to see how many digits must match and in what order for each prize level. Exact match usually pays the most; partial matches (e.g. first three digits) may pay less but occur more often. Understanding this helps you set realistic expectations and choose bet sizes you are comfortable with.
            </p>

            <h3 className="text-2xl font-orbitron font-bold text-gold">
              Set a budget per draw or per day
            </h3>
            <p className="text-white/90 font-poppins leading-relaxed">
              Decide in advance how much you will spend on 5D Lotre—for example one bet per draw or a daily limit. Stick to that amount and do not add more after a loss. Use the minimum or low stakes if you want to play more draws without increasing risk. Never chase losses.
            </p>

            <h3 className="text-2xl font-orbitron font-bold text-gold">
              Play for fun and take breaks
            </h3>
            <p className="text-white/90 font-poppins leading-relaxed">
              Treat 5D Lotre as entertainment. Enjoy the thrill of the draw without expecting to win. Take breaks between sessions and avoid playing when stressed. If you feel that gaming is becoming a problem, use 6 Club&apos;s responsible gaming features and seek help.
            </p>
          </section>

          <section className="bg-dark-blue/50 rounded-lg p-8 space-y-6">
            <h2 className="text-3xl font-orbitron font-bold text-gold">
              5D Lotre FAQ
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-orbitron font-bold text-gold mb-2">What is 5D Lotre on 6 Club?</h3>
                <p className="text-white/90 font-poppins">
                  5D Lotre is a five-digit lottery game on 6 Club. You pick five digits (e.g. 0–9 each), place a bet, and the draw produces a winning number. You win based on how your number matches—exact order, any order, or partial matches—according to the game&apos;s payout table.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-orbitron font-bold text-gold mb-2">How do I pick numbers in 5D Lotre?</h3>
                <p className="text-white/90 font-poppins">
                  In the 5D Lotre game, select one digit for each of the five positions using the play slip. You can choose each digit manually or use Quick Pick for a random five-digit number. Then confirm your bet before the draw closes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-orbitron font-bold text-gold mb-2">When is the 5D Lotre draw?</h3>
                <p className="text-white/90 font-poppins">
                  Draw times are displayed in the 5D Lotre section on 6 Club, often with a countdown. Place and confirm your bet before the countdown ends. Results are published shortly after the draw.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-orbitron font-bold text-gold mb-2">Can I play 5D Lotre on my phone?</h3>
                <p className="text-white/90 font-poppins">
                  Yes. 5D Lotre is available in the 6 Club app on Android and iOS. You can select digits, place bets, and check results on your mobile device.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-orbitron font-bold text-gold mb-2">How are 5D Lotre winnings paid?</h3>
                <p className="text-white/90 font-poppins">
                  Winnings are credited to your 6 Club account balance according to the 5D Lotre payout table. You can use them for more gameplay or request a withdrawal following 6 Club&apos;s withdrawal rules.
                </p>
              </div>
            </div>

            <div className="pt-4 text-center">
              <CTAButton text="Play 5D Lotre Now" variant="primary" />
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
