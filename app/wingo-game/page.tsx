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

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Play Wingo Game on 6 Club',
  description: 'Step-by-step guide to playing the Wingo bingo-style game on the 6 Club platform.',
  totalTime: 'PT5M',
  step: [
    { '@type': 'HowToStep', name: 'Open 6 Club and go to Wingo', text: 'Log in to the 6 Club app and open the Wingo game from the games menu.' },
    { '@type': 'HowToStep', name: 'Get a card or join a room', text: 'Select a Wingo card or join a room. You may get one free card or buy additional cards.' },
    { '@type': 'HowToStep', name: 'Check your balance and buy-in', text: 'Ensure you have enough balance for the room buy-in or card cost if applicable.' },
    { '@type': 'HowToStep', name: 'Wait for numbers to be called', text: 'When the game starts, numbers are called one by one. Mark them on your card if they appear.' },
    { '@type': 'HowToStep', name: 'Complete a pattern or full house', text: 'Win by completing the required pattern (e.g. line, full house) before others, according to the room rules.' },
    { '@type': 'HowToStep', name: 'Claim your win', text: 'If you complete the winning pattern first (or as per rules), winnings are credited to your 6 Club balance.' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is Wingo on 6 Club?', acceptedAnswer: { '@type': 'Answer', text: 'Wingo is a bingo-style game on 6 Club. You have a card with numbers, numbers are called during the game, and you win by completing a pattern (e.g. a line or full house) according to the room rules.' } },
    { '@type': 'Question', name: 'How do I get a Wingo card?', acceptedAnswer: { '@type': 'Answer', text: 'In the Wingo game, you select or purchase a card (or get a free one) and then join a room or wait for the game to start. The exact flow is shown in the game on 6 Club.' } },
    { '@type': 'Question', name: 'How long does a Wingo game last?', acceptedAnswer: { '@type': 'Answer', text: 'Game length depends on the room and how many numbers are called. It can range from a few minutes to longer. The game screen shows when the next number is called.' } },
    { '@type': 'Question', name: 'Can I play Wingo on my phone?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Wingo is available in the 6 Club app on Android and iOS, so you can play on your mobile device.' } },
    { '@type': 'Question', name: 'Where do Wingo winnings go?', acceptedAnswer: { '@type': 'Answer', text: 'Winnings are credited to your 6 Club account balance. You can use them for more Wingo games or other 6 Club games, or withdraw as per 6 Club withdrawal rules.' } },
  ],
}

export default function WingoGame() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-8 text-gold">
          Wingo Game on 6 Club
        </h1>

        <div className="max-w-4xl mx-auto space-y-16">
          <div>
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

          <section className="bg-dark-blue/50 rounded-lg p-8 space-y-6">
            <h2 className="text-3xl font-orbitron font-bold text-gold">
              About Wingo Game
            </h2>
            <p className="text-lg text-white/90 font-poppins leading-relaxed">
              Wingo brings the classic bingo experience to 6 Club with a modern, digital format. You get a card with numbers, and as numbers are called during the game, you mark them off. The first player (or players) to complete the required pattern—such as a line or full house—wins according to the room rules.
            </p>
            <p className="text-lg text-white/90 font-poppins leading-relaxed">
              Whether you are new to bingo or a regular player, Wingo on 6 Club is easy to follow. The interface is clear, games run at scheduled times or in rooms, and it is designed for entertainment. The game is regularly updated and available on the 6 Club app for Android and iOS.
            </p>
          </section>

          <section className="bg-dark-blue/50 rounded-lg p-8 space-y-8">
            <h2 className="text-3xl font-orbitron font-bold text-gold">
              How to Play Wingo Game on 6 Club
            </h2>
            <p className="text-lg text-white/90 font-poppins leading-relaxed">
              Playing Wingo on 6 Club follows the familiar bingo flow: get a card, listen for numbers, mark your card, and try to complete the winning pattern first. Here is a step-by-step guide so you can join a game with confidence.
            </p>

            <h3 className="text-2xl font-orbitron font-bold text-gold">
              Step 1: Open 6 Club and go to Wingo
            </h3>
            <p className="text-white/90 font-poppins leading-relaxed">
              Open the 6 Club app and log in. From the home or games menu, find Wingo and tap to open it. You will see options to join a room, view upcoming games, or select a card. Ensure you have a stable connection so numbers and updates load in real time during the game.
            </p>

            <h3 className="text-2xl font-orbitron font-bold text-gold">
              Step 2: Get a card or join a room
            </h3>
            <p className="text-white/90 font-poppins leading-relaxed">
              Depending on how Wingo is set up on 6 Club, you will either choose a card (or get one free) or join a specific room with a buy-in. Select the number of cards you want if multiple are allowed—more cards can increase your chances but may cost more. Once you have your card(s), you will see the grid of numbers. Each card is unique. Note the game start time or wait for the room to fill and the game to begin.
            </p>

            <h3 className="text-2xl font-orbitron font-bold text-gold">
              Step 3: Check your balance and buy-in
            </h3>
            <p className="text-white/90 font-poppins leading-relaxed">
              Your 6 Club balance is used to pay for cards or room entry if there is a cost. Check that you have enough before joining. If the game has a buy-in, it will be deducted when you enter. Add funds via the app if needed. Only spend what you can afford for entertainment.
            </p>

            <h3 className="text-2xl font-orbitron font-bold text-gold">
              Step 4: Wait for numbers to be called
            </h3>
            <p className="text-white/90 font-poppins leading-relaxed">
              When the game starts, numbers are called one by one (or drawn and shown on screen). As each number is called, check your card(s). If that number appears on your card, mark it—usually the app will auto-mark or you tap to mark. Keep an eye on which pattern is required to win (e.g. one line, two lines, full house). The game screen will often highlight the pattern and your progress.
            </p>

            <h3 className="text-2xl font-orbitron font-bold text-gold">
              Step 5: Complete the winning pattern
            </h3>
            <p className="text-white/90 font-poppins leading-relaxed">
              The first player to complete the required pattern (as per the room rules) wins. For example, in a &quot;first line&quot; game, the first to mark all numbers in one row wins. In a &quot;full house,&quot; you must mark every number on your card. If you complete the pattern, the game will usually announce your win and prompt you or automatically credit the prize. If someone else wins first, you can stay to see the result or join the next game.
            </p>

            <h3 className="text-2xl font-orbitron font-bold text-gold">
              Step 6: Claim your winnings
            </h3>
            <p className="text-white/90 font-poppins leading-relaxed">
              If you win, the prize is typically credited to your 6 Club account balance automatically. You may see a congratulations message or a claim button—tap if needed. You can then use the balance for more Wingo games, try other 6 Club games, or withdraw funds according to 6 Club&apos;s withdrawal policy. Play responsibly and within your means.
            </p>

            <div className="pt-4 text-center">
              <CTAButton text="Play Wingo Game Now" variant="primary" />
            </div>
          </section>

          <section className="bg-dark-blue/50 rounded-lg p-8 space-y-6">
            <h2 className="text-3xl font-orbitron font-bold text-gold">
              Strategy &amp; Tips for Wingo
            </h2>
            <p className="text-lg text-white/90 font-poppins leading-relaxed">
              Wingo is largely a game of chance, but you can still play in a way that is fun and manageable. Use these tips to get the most out of the game on 6 Club.
            </p>

            <h3 className="text-2xl font-orbitron font-bold text-gold">
              Know the room rules and pattern
            </h3>
            <p className="text-white/90 font-poppins leading-relaxed">
              Before you join a Wingo room, read what pattern is required to win (e.g. one line, two lines, full house) and the prize structure. Some rooms have multiple prize tiers. Knowing the rules helps you follow the game and set realistic expectations. It also helps you decide how many cards to buy—more cards increase chances but cost more per game.
            </p>

            <h3 className="text-2xl font-orbitron font-bold text-gold">
              Set a budget per session
            </h3>
            <p className="text-white/90 font-poppins leading-relaxed">
              Decide how much you will spend on Wingo in a session (e.g. a few games or a time limit). Stick to that amount. Do not top up to chase a win. If you buy multiple cards, choose a total cost that fits your budget. Treat Wingo as paid entertainment so you enjoy it without overspending.
            </p>

            <h3 className="text-2xl font-orbitron font-bold text-gold">
              Stay focused and play for fun
            </h3>
            <p className="text-white/90 font-poppins leading-relaxed">
              Pay attention when numbers are called so you do not miss a mark, especially if you have several cards. Use auto-mark if the app offers it. Take breaks between games so you do not play when tired. Remember that bingo is chance-based—play for the social and fun aspect, not as a way to make money. If you ever feel that gaming is affecting your life, use 6 Club&apos;s responsible gaming tools and seek support.
            </p>
          </section>

          <section className="bg-dark-blue/50 rounded-lg p-8 space-y-6">
            <h2 className="text-3xl font-orbitron font-bold text-gold">
              Wingo Game FAQ
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-orbitron font-bold text-gold mb-2">What is Wingo on 6 Club?</h3>
                <p className="text-white/90 font-poppins">
                  Wingo is a bingo-style game on 6 Club. You get a card with numbers, numbers are called during the game, and you mark them. You win by completing the required pattern (e.g. a line or full house) first, according to the room rules.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-orbitron font-bold text-gold mb-2">How do I get a Wingo card?</h3>
                <p className="text-white/90 font-poppins">
                  In the Wingo game on 6 Club, you select or purchase a card (or receive a free one) and then join a room or wait for the game to start. The exact steps are shown in the game interface.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-orbitron font-bold text-gold mb-2">How long does a Wingo game last?</h3>
                <p className="text-white/90 font-poppins">
                  Game length depends on the room and how many numbers are drawn. It can range from a few minutes to longer. The game screen shows when each number is called and when the game ends.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-orbitron font-bold text-gold mb-2">Can I play Wingo on my phone?</h3>
                <p className="text-white/90 font-poppins">
                  Yes. Wingo is available in the 6 Club app on Android and iOS. You can join rooms, manage cards, and play on your mobile device.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-orbitron font-bold text-gold mb-2">Where do Wingo winnings go?</h3>
                <p className="text-white/90 font-poppins">
                  Winnings are credited to your 6 Club account balance. You can use them for more Wingo games or other 6 Club games, or request a withdrawal according to the platform&apos;s withdrawal rules.
                </p>
              </div>
            </div>

            <div className="pt-4 text-center">
              <CTAButton text="Play Wingo Game Now" variant="primary" />
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
