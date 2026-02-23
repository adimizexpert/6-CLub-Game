import type { Metadata } from 'next'
import CTAButton from '@/components/CTAButton'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '6 Club Register & Login Guide | Sign Up Tutorial 2026',
  description:
    'Complete 6 Club registration guide. Learn how to register, sign up & login in 5 easy steps. Safe, secure platform.',
  alternates: {
    canonical: 'https://6clubguide.com/guide',
  },
  openGraph: {
    url: 'https://6clubguide.com/guide',
    title: 'How to Register at 6 Club - Complete Sign Up Guide',
    description:
      'Step-by-step 6 Club register, sign up, and login guide with troubleshooting tips and FAQs.',
  },
}

export default function Guide() {
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Register at 6 Club',
    description: 'Complete step-by-step guide to creating your 6 Club account.',
    totalTime: 'PT5M',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Access the 6 Club registration page',
        text: 'Open the official 6 Club website or app and tap Register / Sign Up.',
      },
      {
        '@type': 'HowToStep',
        name: 'Enter your mobile number and create a secure password',
        text: 'Provide your active mobile number and set a strong password, then accept the terms.',
      },
      {
        '@type': 'HowToStep',
        name: 'Verify your registration information',
        text: 'Review details, confirm your mobile number, and enter any invite code if you have one.',
      },
      {
        '@type': 'HowToStep',
        name: 'Complete security verification',
        text: 'Finish the CAPTCHA / slider puzzle to confirm you are a real user.',
      },
      {
        '@type': 'HowToStep',
        name: 'Login and explore your account',
        text: 'Login using your mobile number and password and explore games, deposit, and settings.',
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold text-center mb-12 text-gold">
          How to Register at 6 Club - Complete Sign Up Guide | 6 Club Login &amp; Account Creation
        </h1>

        <div className="max-w-4xl mx-auto space-y-12">
          <section className="bg-dark-blue/50 rounded-lg p-8">
            <h2 className="text-3xl font-orbitron font-bold mb-3 text-gold">
              Welcome to 6 Club - Your Gateway to India&apos;s Premier Gaming Platform
            </h2>
            <p className="text-lg text-white/90 font-poppins leading-relaxed mb-4">
              Welcome to 6 Club, India&apos;s trusted online gaming platform. We&apos;re excited to guide you through the simple and secure 6 club register process. Whether you&apos;re looking to 6 club sign up for the first time or need help with 6 club login procedures, this guide covers everything you need to know.
            </p>
            <p className="text-lg text-white/90 font-poppins leading-relaxed">
              The 6 club registration process is designed for convenience and security. From downloading the 6 club app to completing your first 6 club login, every step is streamlined to get you started quickly while maintaining strong security standards.
            </p>
          </section>

          <div className="bg-dark-blue/60 rounded-lg p-4 border border-gold/30">
            <Image
              src="/images/6ClubhomepageshowingRegisterSignU button.png"
              alt="6 Club homepage showing Register and Sign Up button on desktop and mobile"
              width={1200}
              height={630}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              className="w-full h-auto rounded-lg shadow-lg border border-gold/40"
              loading="lazy"
            />
          </div>

          <section className="bg-dark-blue/50 rounded-lg p-8">
            <h2 className="text-3xl font-orbitron font-bold mb-3 text-gold">
              Understanding 6 Club Registration Guidelines - Important Rules Before You Start
            </h2>
            <div className="space-y-4 text-white/90 font-poppins">
              <p>
                Before you begin the 6 club register process, it&apos;s essential to understand the registration guidelines. These rules help maintain a safe and fair gaming environment.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Age requirement:</strong> You must be at least 18 years old.</li>
                <li><strong>One account policy:</strong> Only one 6 club account per person.</li>
                <li><strong>Accurate personal information:</strong> Use your real details for security and withdrawals.</li>
                <li><strong>IP &amp; device limitations:</strong> System monitors IP/device patterns to prevent abuse.</li>
                <li><strong>Continuous monitoring:</strong> Accounts may be reviewed for suspicious activity.</li>
                <li><strong>Zero tolerance for cheating:</strong> Bots/scripts/exploits lead to permanent closure.</li>
              </ul>
              <p>
                If you have special circumstances, contact support before attempting to create another account.
              </p>
            </div>
          </section>

          <section className="bg-dark-blue/50 rounded-lg p-8">
            <h2 className="text-3xl font-orbitron font-bold mb-6 text-gold">
              Complete Step-by-Step Guide: How to Create Your 6 Club Account
            </h2>

            <div className="space-y-10 text-white/90 font-poppins">
              <div>
                <h3 className="text-2xl font-orbitron font-bold text-gold mb-3">
                  Step 1: Accessing the 6 Club Registration Page
                </h3>
                <p className="leading-relaxed">
                  Open your browser or the app and navigate to the official platform. On the homepage, tap the “Register” / “Sign Up” button (often in the top right).
                </p>
              </div>

              <div className="bg-dark-blue/60 rounded-lg p-4 border border-gold/30">
                <Image
                  src="/images/RegisterSignUpbuttonlocation.png"
                  alt="Highlighted Register or Sign Up button location on 6 Club homepage"
                  width={1200}
                  height={630}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                  className="w-full h-auto rounded-lg shadow-lg border border-gold/40"
                  loading="lazy"
                />
              </div>

              <div>
                <h3 className="text-2xl font-orbitron font-bold text-gold mb-3">
                  Step 2: Enter Your Mobile Number &amp; Create a Secure Password
                </h3>
                <p className="leading-relaxed mb-3">
                  Enter your active mobile number (used for 6 club login and security). Create a strong password (8+ characters, mixed case, numbers, special characters). Re-enter it to confirm.
                </p>
                <p className="leading-relaxed">
                  Review and accept the Privacy Agreement and Terms of Service, then click “Register” to continue.
                </p>
              </div>

              <div className="bg-dark-blue/60 rounded-lg p-4 border border-gold/30">
                <Image
                  src="/images/Registration form fields (mobile number, password, confirm password, terms checkbox).png"
                  alt="6 Club registration form fields including mobile number, password, confirm password and terms checkbox"
                  width={1200}
                  height={630}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                  className="w-full h-auto rounded-lg shadow-lg border border-gold/40"
                  loading="lazy"
                />
              </div>

              <div>
                <h3 className="text-2xl font-orbitron font-bold text-gold mb-3">
                  Step 3: Verify Your Registration Information
                </h3>
                <p className="leading-relaxed">
                  Review your details carefully. If you have an invite code, enter it before continuing. Confirm your mobile number is correct to avoid login and verification issues later.
                </p>
              </div>

              <div className="bg-dark-blue/60 rounded-lg p-4 border border-gold/30">
                <Image
                  src="/images/details screen + invite code field.png"
                  alt="6 Club registration details review screen with invite code field"
                  width={1200}
                  height={630}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                  className="w-full h-auto rounded-lg shadow-lg border border-gold/40"
                  loading="lazy"
                />
              </div>

              <div>
                <h3 className="text-2xl font-orbitron font-bold text-gold mb-3">
                  Step 4: Complete Security Verification
                </h3>
                <p className="leading-relaxed">
                  Complete the CAPTCHA / slider puzzle to confirm you are a real user. This helps prevent bots from creating accounts.
                </p>
              </div>

              {/* Placeholder for security verification screenshot */}

              <div>
                <h3 className="text-2xl font-orbitron font-bold text-gold mb-3">
                  Step 5: Login and Explore Your New 6 Club Account
                </h3>
                <p className="leading-relaxed">
                  After registration, login using your mobile number and password. Explore games, set preferences, and review deposit/withdrawal options before playing.
                </p>
              </div>

              <div className="bg-dark-blue/60 rounded-lg p-4 border border-gold/30">
                <Image
                  src="/images/Login screen + first dashboard view.png"
                  alt="6 Club login screen and first dashboard view after successful registration"
                  width={1200}
                  height={630}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                  className="w-full h-auto rounded-lg shadow-lg border border-gold/40"
                  loading="lazy"
                />
              </div>
            </div>
          </section>

          <section className="bg-dark-blue/50 rounded-lg p-8">
            <h2 className="text-3xl font-orbitron font-bold mb-3 text-gold">
              Need Assistance During Registration?
            </h2>
            <p className="text-lg text-white/90 font-poppins leading-relaxed">
              If you face issues during 6 club sign up, use live chat or reach out via our{' '}
              <Link href="/contact" className="text-gold hover:underline">
                Contact page
              </Link>
              . Our team can guide you through verification, login problems, and account recovery.
            </p>
          </section>

          <section className="bg-dark-blue/50 rounded-lg p-8">
            <h2 className="text-3xl font-orbitron font-bold mb-6 text-gold">
              Common Registration Issues and Proven Solutions
            </h2>
            <div className="space-y-4 text-white/90 font-poppins">
              <details className="bg-dark-blue/60 border border-gold/20 rounded-lg p-4">
                <summary className="cursor-pointer font-orbitron text-gold font-bold">
                  Forgot your password?
                </summary>
                <p className="mt-3">
                  Use “Forgot Password” on the login page and follow the reset steps. Passwords are case-sensitive—avoid extra spaces.
                </p>
              </details>
              <details className="bg-dark-blue/60 border border-gold/20 rounded-lg p-4">
                <summary className="cursor-pointer font-orbitron text-gold font-bold">
                  Verification code not arriving?
                </summary>
                <p className="mt-3">
                  Confirm your mobile number, check inbox filters, wait a few minutes, then resend. Ensure you have network signal.
                </p>
              </details>
              <details className="bg-dark-blue/60 border border-gold/20 rounded-lg p-4">
                <summary className="cursor-pointer font-orbitron text-gold font-bold">
                  “Account already exists” error?
                </summary>
                <p className="mt-3">
                  Use password recovery instead of creating a new account. The platform generally enforces one account per person.
                </p>
              </details>
              <details className="bg-dark-blue/60 border border-gold/20 rounded-lg p-4">
                <summary className="cursor-pointer font-orbitron text-gold font-bold">
                  Trouble logging in after registration?
                </summary>
                <p className="mt-3">
                  Recheck mobile number + password, clear browser cache, or reinstall the app. If the issue persists, contact support.
                </p>
              </details>
            </div>
          </section>

          <section className="bg-dark-blue/50 rounded-lg p-8">
            <h2 className="text-3xl font-orbitron font-bold mb-6 text-gold">
              Frequently Asked Questions About 6 Club Registration
            </h2>
            <div className="space-y-4 text-white/90 font-poppins">
              <details className="bg-dark-blue/60 border border-gold/20 rounded-lg p-4">
                <summary className="cursor-pointer font-orbitron text-gold font-bold">
                  Is it free to create a 6 Club account?
                </summary>
                <p className="mt-3">
                  Yes, registration is typically free. You only add funds if you choose to deposit to participate in paid games.
                </p>
              </details>
              <details className="bg-dark-blue/60 border border-gold/20 rounded-lg p-4">
                <summary className="cursor-pointer font-orbitron text-gold font-bold">
                  Can I create more than one account?
                </summary>
                <p className="mt-3">
                  Most platforms enforce one account per person. If you lost access, use account recovery instead of registering again.
                </p>
              </details>
              <details className="bg-dark-blue/60 border border-gold/20 rounded-lg p-4">
                <summary className="cursor-pointer font-orbitron text-gold font-bold">
                  How long does registration take?
                </summary>
                <p className="mt-3">
                  Usually 3–5 minutes, including verification.
                </p>
              </details>
            </div>
          </section>

          <section className="bg-dark-blue/50 rounded-lg p-8">
            <h2 className="text-3xl font-orbitron font-bold mb-3 text-gold">
              Ready to Begin?
            </h2>
            <p className="text-lg text-white/90 font-poppins leading-relaxed mb-6">
              Use the buttons below to go directly to the official registration/login flow via our affiliate link.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton text="Register Now" variant="primary" className="whitespace-nowrap" />
              <CTAButton text="Login Now" variant="secondary" className="whitespace-nowrap" />
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

