import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '6 Club Complete FAQ - All Questions Answered',
  description:
    '6 Club complete FAQ covering APK download, app installation, login, registration, deposits, withdrawals, trust, and gameplay questions.',
  alternates: {
    canonical: 'https://6clubguide.com/faqs',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How to download 6 Club APK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Visit the official 6 Club website at 6club.com on your Android device and tap the Download APK button. Allow installs from unknown sources when prompted, then open the downloaded file from your Downloads folder to begin installation. Always download the APK only from the official 6 Club website or verified official links.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I download 6 Club APK latest version?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'The latest 6 Club APK version is always available on the official 6club.com website and through verified links shared in the 6 Club official Telegram channel. Avoid third-party sites and always verify the version number with the one listed on the official site.',
      },
    },
    {
      '@type': 'Question',
      name: 'How to login to 6 Club?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Open the 6 Club app or website, tap Login, then enter your registered mobile number and password. If you enabled biometrics, you can use fingerprint or face ID instead. Use Forgot Password if you cannot remember your credentials.',
      },
    },
    {
      '@type': 'Question',
      name: 'How to create 6 Club account?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Tap Register or Sign Up in the app or on the website, enter your active mobile number, create a strong password, optionally enter an invite code, accept the Terms and complete the human verification challenge. Your account is created instantly and you can log in right away.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is 6 Club real or fake?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          '6 Club is a licensed gaming platform with certified RNG games, verified payment partners, and withdrawal options. Read answers to common questions about the app, login, and gameplay.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is 6 Club legit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Yes, 6 Club is legit. It operates under proper licensing, uses secure payments, audited RNG for fair results, encrypted connections, transparent terms, and maintains a long track record of successful deposits and withdrawals.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does 6 Club work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'After registering and logging in, you deposit funds via supported methods, choose games you like, place bets according to clearly shown rules and odds, and receive instant payouts on wins. Winnings stay in your balance until you request a withdrawal to your chosen payment method.',
      },
    },
    {
      '@type': 'Question',
      name: 'How to withdraw money from 6 Club?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'From your account dashboard, go to Withdrawal, choose a method such as Paytm, PhonePe or Bank Transfer, enter the amount within the shown limits, confirm your details and submit. Verified withdrawals typically complete within 24 hours depending on the method.',
      },
    },
  ],
}

const FaqSection = ({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) => (
  <section className="bg-dark-blue/50 rounded-lg p-8 border border-gold/20">
    <h2 className="text-3xl font-orbitron font-bold mb-4 text-gold">{title}</h2>
    <div className="space-y-4 text-white/90 font-poppins leading-relaxed">{children}</div>
  </section>
)

const Question = ({
  q,
  children,
}: {
  q: string
  children: React.ReactNode
}) => (
  <details className="bg-dark-blue/60 border border-gold/20 rounded-lg p-4">
    <summary className="cursor-pointer font-orbitron text-gold font-bold text-lg">
      {q}
    </summary>
    <div className="mt-3 text-white/90 font-poppins text-sm md:text-base space-y-2">
      {children}
    </div>
  </details>
)

export default function FAQsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold text-center mb-6 text-gold">
          6 Club Complete FAQ - All Questions Answered
        </h1>
        <p className="text-center text-white/80 font-poppins max-w-4xl mx-auto mb-10 text-lg">
          Find answers to the most common questions about 6 Club APK download, app installation, login,
          registration, deposits, withdrawals, security, and more. This page is structured to help both new
          and advanced players.
        </p>

        <div className="space-y-10">
          <FaqSection title="Download / APK Questions">
            <Question q="1. How to download 6 Club APK?">
              <p>
                Downloading the <strong>6 club apk</strong> is easy. On your Android device, open your browser
                and go to the official website (6club.com). Tap the visible <strong>Download APK</strong>{' '}
                button to start the <strong>6 club apk download</strong>. If Android warns you about unknown
                sources, enable the option to install apps from your browser in Settings &gt; Security / Apps.
                Once downloaded, open the file from your Downloads folder and follow the install steps.
                Always download the APK only from the official website or verified official links.
              </p>
            </Question>

            <Question q="2. Where can I download 6 Club APK latest version?">
              <p>
                The <strong>6 club download apk latest version</strong> is always available on the official
                site, 6club.com. The site automatically serves the newest build with security fixes and
                features. Official download links are also shared in the{' '}
                <strong>6 club official telegram channel</strong>. Avoid third‑party APK sites or mirrors,
                which may host modified or unsafe files.
              </p>
            </Question>

            <Question q="3. How to install 6 Club app on Android?">
              <p>
                After you <strong>download 6 club apk</strong>, open Settings on your device and allow installs
                from unknown sources for the browser/file manager you used. Then open the downloaded APK from
                your notification tray or Downloads folder. Review the permissions and tap{' '}
                <strong>Install</strong>. When installation finishes, you&apos;ll see the{' '}
                <strong>6 club logo</strong> in your app drawer, ready for you to <strong>6 club register</strong>{' '}
                or <strong>6 club login</strong>.
              </p>
            </Question>

            <Question q="4. Is 6 Club APK safe to download?">
              <p>
                Yes—when you get it from official sources. The <strong>6 club app</strong> downloaded from
                6club.com or links posted in the <strong>6 club official channel</strong> is scanned, digitally
                signed, and uses encryption to protect your data. The risk comes from unofficial mirrors; never
                install modified APKs from random sites if you care about account safety.
              </p>
            </Question>
          </FaqSection>

          <FaqSection title="Login / Account Questions">
            <Question q="8. How to login to 6 Club?">
              <p>
                Open the app or website, tap <strong>Login</strong>, then enter the mobile number you used to{' '}
                <strong>6 club register</strong> and your password. Double‑check caps lock and spaces. If you
                enabled fingerprint or face unlock, you can use those for quicker access. Use{' '}
                <em>Forgot Password</em> if you can&apos;t remember your password.
              </p>
            </Question>

            <Question q="9. How to create 6 Club account?">
              <p>
                Tap <strong>Register / Sign Up</strong> on the home screen, enter your active mobile number,
                create a strong password, optionally add an invite code, accept the terms, and complete the
                human verification step. Your account is created instantly and you can <strong>6 club login</strong>{' '}
                and explore games right away.
              </p>
            </Question>

            <Question q="13. How to recover 6 Club login password?">
              <p>
                On the <strong>6 club login</strong> screen, tap <strong>Forgot Password</strong>, enter your
                registered mobile number, and confirm. You&apos;ll receive an SMS code; enter it in the app,
                then set and confirm a new password. After that you can log in normally with your new details.
              </p>
            </Question>
          </FaqSection>

          <FaqSection title="Trust & Safety Questions">
            <Question q="19. Is 6 Club real or fake?">
              <p>
                <strong>6 club is real</strong>. It has been operating for years with millions of users, real
                deposits and successful withdrawals, certified RNG games, and verified payment partners. If you
                still have doubts, read independent <strong>6 club reviews</strong> and always use the official
                links.
              </p>
            </Question>

            <Question q="20. Is 6 Club legit?">
              <p>
                Yes, <strong>6 club is legit</strong>. Legitimacy is shown through proper licensing, secure
                payments, audited game fairness, long‑term operations, and transparent terms. As with any gaming
                platform, use only official apps and play responsibly.
              </p>
            </Question>

            <Question q="22. Is 6 Club safe for users?">
              <p>
                6 Club uses SSL encryption, secure payment gateways, and account monitoring to protect users.
                Your safety also depends on following basics: never share your <strong>6 club login</strong>{' '}
                details, avoid unofficial APKs, enable strong passwords, and stay alert to phishing attempts
                pretending to be support.
              </p>
            </Question>
          </FaqSection>

          <FaqSection title="Deposit & Withdrawal Questions">
            <Question q="30. How to deposit money in 6 Club?">
              <p>
                After you log in, tap <strong>Deposit</strong> in the app, choose a payment method like Paytm,
                PhonePe, Google Pay, or Bank Transfer, enter your desired amount within the shown limits, and
                confirm through the secure payment gateway. Your <strong>6 club deposit</strong> usually appears
                in seconds.
              </p>
            </Question>

            <Question q="35. How to withdraw money from 6 Club?">
              <p>
                Go to <strong>Withdrawal</strong> in your account, pick a method (Paytm / PhonePe / Bank
                Transfer etc.), enter the amount within minimum and maximum limits, confirm your details, and
                submit. Verified <strong>6 club withdrawal</strong> requests generally complete within 24 hours,
                depending on method and checks.
              </p>
            </Question>
          </FaqSection>
        </div>
      </div>
    </>
  )
}


