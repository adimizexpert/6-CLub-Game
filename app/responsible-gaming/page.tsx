import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Responsible Gaming - 6 Club Guide',
  description: 'Learn about responsible gaming practices. Important information about playing responsibly and getting help if needed.',
  alternates: {
    canonical: 'https://6clubguide.com/responsible-gaming',
  },
  robots: {
    index: false,
    follow: false,
  },
}

export default function ResponsibleGaming() {
  return (
    <>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-12 text-gold">
          Responsible Gaming
        </h1>

        <div className="bg-dark-blue/50 rounded-lg p-8 space-y-8 text-white/90 font-poppins">
          <section>
            <h2 className="text-2xl font-orbitron font-bold mb-4 text-gold">
              Our Commitment
            </h2>
            <p className="leading-relaxed">
              At 6clubguide.com, we are committed to promoting responsible gaming practices. We believe that gaming should be an enjoyable and entertaining activity, not a source of financial or personal problems.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-orbitron font-bold mb-4 text-gold">
              Play Responsibly
            </h2>
            <p className="leading-relaxed mb-4">Here are some guidelines for responsible gaming:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Set a budget before you start playing and stick to it</li>
              <li>Never play with money you cannot afford to lose</li>
              <li>Set time limits for your gaming sessions</li>
              <li>Take regular breaks from gaming</li>
              <li>Never chase losses</li>
              <li>Don't play when you're under the influence of alcohol or drugs</li>
              <li>Don't play when you're feeling emotional or stressed</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-orbitron font-bold mb-4 text-gold">
              Warning Signs
            </h2>
            <p className="leading-relaxed mb-4">Be aware of these warning signs of problem gaming:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Spending more time or money than you intended</li>
              <li>Neglecting work, family, or other responsibilities</li>
              <li>Borrowing money to play</li>
              <li>Feeling anxious or depressed about gaming</li>
              <li>Lying about your gaming activities</li>
              <li>Unable to stop or control your gaming</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-orbitron font-bold mb-4 text-gold">
              Getting Help
            </h2>
            <p className="leading-relaxed mb-4">
              If you or someone you know is struggling with problem gaming, help is available. Consider reaching out to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>GamCare: www.gamcare.org.uk</li>
              <li>Gamblers Anonymous: www.gamblersanonymous.org</li>
              <li>National Council on Problem Gambling: www.ncpgambling.org</li>
              <li>Your local mental health services</li>
              <li>Professional counselors specializing in gaming addiction</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-orbitron font-bold mb-4 text-gold">
              Self-Exclusion
            </h2>
            <p className="leading-relaxed">
              If you feel you need to take a break from gaming, most platforms offer self-exclusion options. Contact the 6 Club support team to learn about their self-exclusion and responsible gaming tools.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-orbitron font-bold mb-4 text-gold">
              Age Restrictions
            </h2>
            <p className="leading-relaxed">
              Gaming platforms are restricted to users who are of legal age in their jurisdiction. If you are under the legal age, please do not attempt to register or use gaming services. We do not knowingly provide information to minors.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-orbitron font-bold mb-4 text-gold">
              Legal Compliance
            </h2>
            <p className="leading-relaxed">
              Ensure that online gaming is legal in your jurisdiction before participating. It is your responsibility to comply with all applicable laws and regulations in your area.
            </p>
          </section>

          <section className="bg-gold/10 rounded-lg p-6 border border-gold/30">
            <h2 className="text-2xl font-orbitron font-bold mb-4 text-gold">
              Remember
            </h2>
            <p className="leading-relaxed font-semibold">
              Gaming should be fun and entertaining. If it stops being fun, it's time to stop. Play responsibly and within your means.
            </p>
          </section>
        </div>
      </div>
    </>
  )
}

