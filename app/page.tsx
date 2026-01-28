import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import CTAButton from '@/components/CTAButton'
import { games } from '@/lib/constants'

export const metadata: Metadata = {
  title: '6Club Game Official Guide - Download APK & Play Games',
  description: '6 Club is a premier, modern online gaming platform. Download the 6 Club APK for Android and iOS. Play K3 Lotre, TRX Hash, 5D Lotre, Colour Prediction, and Wingo games.',
  alternates: {
    canonical: 'https://6clubguide.com',
  },
  openGraph: {
    url: 'https://6clubguide.com',
    title: '6Club Game Official Guide',
    description: '6 Club is a premier online gaming platform. Download the 6 Club APK and start playing today.',
    images: [
      {
        url: 'https://6clubguide.com/images/6-club-main.webp',
        width: 1200,
        height: 630,
        alt: '6Club Game',
      },
    ],
  },
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold text-center mb-6 text-gold">
          6Club Game Official Guide
        </h1>

        {/* Main Image */}
        <div className="max-w-4xl mx-auto mb-10">
          <Image
            src="/images/6-club-main.webp"
            alt="6Club Game Official Guide - Premier Online Gaming Platform with Interactive Games and Skill-Based Digital Experiences"
            width={1200}
            height={600}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            className="w-full h-auto rounded-lg shadow-2xl border-2 border-gold/30 hover:border-gold/60 transition-all duration-300"
            priority
            quality={90}
          />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-row gap-3 sm:gap-4 justify-center items-center mb-10">
          <CTAButton text="REGISTER NOW" variant="primary" className="whitespace-nowrap" />
          <CTAButton text="LOGIN NOW" variant="secondary" className="whitespace-nowrap" />
        </div>

        <p className="text-lg md:text-xl text-white/90 font-poppins max-w-4xl mx-auto text-center mb-6 leading-relaxed">
          6 Club is a premier, modern online gaming platform meticulously designed for users who crave interactive, engaging, and skill-based digital experiences. Whether you are looking for a quick thrill or a deep strategic challenge, the 6 club download apk gives you instant access to a world of entertainment directly on your device.
        </p>
        <p className="text-lg md:text-xl text-white/90 font-poppins max-w-4xl mx-auto text-center mb-0 leading-relaxed">
          With a focus on smooth performance and a user-friendly interface, 6 Club has quickly become a favorite destination for gamers globally. From the streets of 6 club London to the vibrant gaming scenes in 6 club Kolkata and 6 club Palakkad, our community is growing every day.
        </p>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 bg-dark-blue/50">
        <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-center mb-8 text-gold">
          About 6 Club - India&apos;s Most Trusted Online Gaming Platform
        </h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-white/90 font-poppins mb-6 leading-relaxed">
            6 Club is India&apos;s premier online gaming platform, delivering an exceptional gaming experience that combines entertainment with top-tier security. Whether you&apos;re looking to download 6 Club APK or join 6 Club through official channels, we&apos;ve built a platform designed for every type of player.
          </p>
          <p className="text-lg text-white/90 font-poppins mb-8 leading-relaxed">
            Our diverse game selection includes Colour Prediction, Poker, Slots, and other popular formats that keep millions of players engaged daily. Every feature—from 6 Club login to withdrawals—has been optimized for a seamless, secure, and reliable experience.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <div className="bg-dark-blue/60 border border-gold/20 rounded-lg p-4 text-center">
              <div className="text-2xl md:text-3xl font-orbitron font-bold text-gold">80M+</div>
              <div className="text-white/80 font-poppins text-sm mt-1">Active Players</div>
            </div>
            <div className="bg-dark-blue/60 border border-gold/20 rounded-lg p-4 text-center">
              <div className="text-2xl md:text-3xl font-orbitron font-bold text-gold">5+</div>
              <div className="text-white/80 font-poppins text-sm mt-1">Years Trusted</div>
            </div>
            <div className="bg-dark-blue/60 border border-gold/20 rounded-lg p-4 text-center">
              <div className="text-2xl md:text-3xl font-orbitron font-bold text-gold">4</div>
              <div className="text-white/80 font-poppins text-sm mt-1">Withdrawal Options</div>
            </div>
            <div className="bg-dark-blue/60 border border-gold/20 rounded-lg p-4 text-center">
              <div className="text-2xl md:text-3xl font-orbitron font-bold text-gold">98%</div>
              <div className="text-white/80 font-poppins text-sm mt-1">Satisfaction</div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/about"
              className="inline-block px-8 py-4 bg-gold text-dark-blue font-orbitron font-bold rounded-lg hover:bg-gold/90 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95"
            >
              Learn more
            </Link>
          </div>
        </div>
      </section>

      {/* Top Games Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <h3 className="text-3xl md:text-4xl font-orbitron font-bold text-center mb-4 text-gold">
          Top Games in 6 Club Game
        </h3>
        <p className="text-center text-white/80 font-poppins mb-12 max-w-2xl mx-auto">
          All games are designed for entertainment purpose and regularly updated for seamless gaming experience
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => (
            <Link
              key={game.id}
              href={game.slug}
              className="group bg-dark-blue/50 rounded-lg overflow-hidden shadow-lg hover:shadow-gold/20 transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative h-48 overflow-hidden border-b-2 border-gold/20">
                <Image
                  src={game.image}
                  alt={`${game.title} - Play ${game.title} on 6 Club Gaming Platform | Download 6 Club APK`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                  quality={85}
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-orbitron font-bold text-gold mb-2">
                  {game.title}
                </h4>
                <p className="text-white/80 font-poppins text-sm">
                  {game.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Compatibility Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 bg-dark-blue/50">
        <h4 className="text-3xl md:text-4xl font-orbitron font-bold text-center mb-8 text-gold">
          Compatibility with 6 Club
        </h4>
        <p className="text-center text-white/90 font-poppins mb-12 max-w-2xl mx-auto text-lg">
          Our platform is designed to work on all devices. Download the 6 Club app for the best gaming experience.
        </p>

        {/* iOS Download */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="bg-dark-blue/70 rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h5 className="text-2xl font-orbitron font-bold mb-6 text-gold">
                  Download the 6 Club App for iOS
                </h5>
                <ol className="list-decimal list-inside space-y-4 text-white/90 font-poppins">
                  <li>Open the App Store on your iPhone or iPad.</li>
                  <li>Search for 6 Club in the search bar.</li>
                  <li>Tap on the 6 Club app from the search results.</li>
                  <li>Click Get to begin the download and installation.</li>
                  <li>Once installed, open the app, sign in or register, and start playing your favorite games!</li>
                </ol>
              </div>

              <div className="flex justify-center md:justify-end">
                <Image
                  src="/images/ios-appstore.webp"
                  alt="Download 6 Club App for iOS iPhone iPad - App Store Download Guide | 6Club Gaming Platform"
                  width={720}
                  height={720}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full max-w-md h-auto rounded-xl shadow-2xl border-2 border-gold/30 hover:border-gold/60 transition-all duration-300"
                  loading="lazy"
                  quality={90}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Android Download */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-dark-blue/70 rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h6 className="text-2xl font-orbitron font-bold mb-6 text-gold">
                  Download the 6 Club App for Android
                </h6>
                <ol className="list-decimal list-inside space-y-4 text-white/90 font-poppins">
                  <li>Open the Google Play Store on your Android device.</li>
                  <li>In the search bar, type 6Club.</li>
                  <li>Select the 6 Club app from the search results.</li>
                  <li>Tap Install to download the app.</li>
                  <li>After installation, launch the app, log in or sign up, and enjoy the full 6 Club gaming experience!</li>
                </ol>
              </div>

              <div className="flex justify-center md:justify-end">
                <Image
                  src="/images/android-play.webp"
                  alt="Download 6 Club App for Android - Google Play Store APK Download | 6Club Gaming Platform"
                  width={720}
                  height={720}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full max-w-md h-auto rounded-xl shadow-2xl border-2 border-gold/30 hover:border-gold/60 transition-all duration-300"
                  loading="lazy"
                  quality={90}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <h6 className="text-3xl md:text-4xl font-orbitron font-bold text-center mb-4 text-gold">
          Player Testimonials on 6 Club
        </h6>
        <p className="text-center text-white/80 font-poppins mb-12 text-xl">
          Trusted by our Players
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-dark-blue/50 rounded-lg p-6 border border-gold/20">
              <p className="text-white/90 font-poppins mb-4 italic">
                "6 Club has transformed my gaming experience. The platform is smooth, the games are engaging, and the community is amazing!"
              </p>
              <p className="text-gold font-orbitron font-bold">- Verified Player</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 bg-dark-blue/50">
        <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-center mb-12 text-gold">
          FAQs About 6 Club and 6 Club Login
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {/* General Questions */}
          <div>
            <h3 className="text-2xl font-orbitron font-bold mb-4 text-gold">What is 6 Club?</h3>
            <p className="text-white/90 font-poppins">
              6 Club is a mobile gaming and entertainment platform that offers various gaming experiences and club-based features for users worldwide.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-orbitron font-bold mb-4 text-gold">How do I download 6 Club?</h3>
            <p className="text-white/90 font-poppins">
              You can download the 6 Club APK from the official website or authorized app stores. Make sure to download from trusted sources to ensure security and get the latest version.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-orbitron font-bold mb-4 text-gold">Is 6 Club available for Android?</h3>
            <p className="text-white/90 font-poppins">
              Yes, 6 Club is available as an APK download for Android devices. Simply download the APK file and install it on your device after enabling installation from unknown sources in your settings.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-orbitron font-bold mb-4 text-gold">What features does 6 Club offer?</h3>
            <p className="text-white/90 font-poppins">
              6 Club provides various gaming options, social club features, member benefits, and exclusive access to events and promotions.
            </p>
          </div>

          {/* Login Questions */}
          <div className="pt-8 border-t border-gold/20">
            <h3 className="text-2xl font-orbitron font-bold mb-6 text-gold">6 Club Login Questions</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-orbitron font-bold mb-3 text-gold">How do I login to 6 Club?</h4>
                <p className="text-white/90 font-poppins mb-2">To login to 6 Club:</p>
                <ul className="list-disc list-inside space-y-1 text-white/90 font-poppins ml-4">
                  <li>Open the 6 Club app on your device</li>
                  <li>Click on the "Login" button</li>
                  <li>Enter your registered username/email and password</li>
                  <li>Click "Submit" to access your account</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-orbitron font-bold mb-3 text-gold">I forgot my 6 Club password. What should I do?</h4>
                <p className="text-white/90 font-poppins mb-2">If you've forgotten your password:</p>
                <ul className="list-disc list-inside space-y-1 text-white/90 font-poppins ml-4">
                  <li>Click on "Forgot Password" on the login page</li>
                  <li>Enter your registered email address</li>
                  <li>Check your email for a password reset link</li>
                  <li>Follow the instructions to create a new password</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-orbitron font-bold mb-3 text-gold">Can I login to 6 Club on multiple devices?</h4>
                <p className="text-white/90 font-poppins">
                  Yes, you can login to your 6 Club account on multiple devices using the same credentials. However, simultaneous logins may be restricted depending on the platform's policies.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-orbitron font-bold mb-3 text-gold">Why can't I login to my 6 Club account?</h4>
                <p className="text-white/90 font-poppins mb-2">Common reasons for login issues include:</p>
                <ul className="list-disc list-inside space-y-1 text-white/90 font-poppins ml-4">
                  <li>Incorrect username or password</li>
                  <li>Account suspension or deactivation</li>
                  <li>Server maintenance</li>
                  <li>Outdated app version</li>
                  <li>Internet connectivity issues</li>
                </ul>
                <p className="text-white/90 font-poppins mt-2">
                  Try resetting your password or contact customer support if the problem persists.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-orbitron font-bold mb-3 text-gold">How do I create a new 6 Club account?</h4>
                <p className="text-white/90 font-poppins mb-2">To create a new account:</p>
                <ul className="list-disc list-inside space-y-1 text-white/90 font-poppins ml-4">
                  <li>Download and open the 6 Club app</li>
                  <li>Click on "Register" or "Sign Up"</li>
                  <li>Fill in the required information (email, username, password)</li>
                  <li>Verify your email address</li>
                  <li>Complete your profile setup</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Membership & Access */}
          <div className="pt-8 border-t border-gold/20">
            <h3 className="text-2xl font-orbitron font-bold mb-6 text-gold">Membership & Access</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-orbitron font-bold mb-3 text-gold">How does 6 Club membership work?</h4>
                <p className="text-white/90 font-poppins">
                  6 Club membership gives you access to exclusive features, games, and benefits. Different membership tiers may offer varying levels of access and rewards.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-orbitron font-bold mb-3 text-gold">What are 6 Club allocations?</h4>
                <p className="text-white/90 font-poppins">
                  6 Club allocations refer to the distribution of resources, rewards, or access privileges among club members based on their membership level or participation.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-orbitron font-bold mb-3 text-gold">How do I join 6 Club?</h4>
                <p className="text-white/90 font-poppins">
                  Simply download the app, complete the registration process, and you'll automatically become a member. Premium memberships may require additional steps or payment.
                </p>
              </div>
            </div>
          </div>

          {/* Technical Support */}
          <div className="pt-8 border-t border-gold/20">
            <h3 className="text-2xl font-orbitron font-bold mb-6 text-gold">Technical Support</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-orbitron font-bold mb-3 text-gold">The 6 Club app is not working. What should I do?</h4>
                <p className="text-white/90 font-poppins mb-2">Try these troubleshooting steps:</p>
                <ul className="list-disc list-inside space-y-1 text-white/90 font-poppins ml-4">
                  <li>Check your internet connection</li>
                  <li>Update to the latest version of the app</li>
                  <li>Clear app cache and data</li>
                  <li>Restart your device</li>
                  <li>Reinstall the app if necessary</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-orbitron font-bold mb-3 text-gold">Is 6 Club safe and secure?</h4>
                <p className="text-white/90 font-poppins">
                  Yes, 6 Club implements security measures to protect user data and transactions. Always download from official sources and keep your login credentials confidential.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-orbitron font-bold mb-3 text-gold">How do I update 6 Club to the latest version?</h4>
                <p className="text-white/90 font-poppins">
                  Check for updates in your app store or download the latest APK from the official website. Regular updates ensure you have access to new features and security improvements.
                </p>
              </div>
            </div>
          </div>

          {/* Account Management */}
          <div className="pt-8 border-t border-gold/20">
            <h3 className="text-2xl font-orbitron font-bold mb-6 text-gold">Account Management</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-orbitron font-bold mb-3 text-gold">How do I change my 6 Club password?</h4>
                <ul className="list-disc list-inside space-y-1 text-white/90 font-poppins ml-4">
                  <li>Login to your account</li>
                  <li>Go to Settings or Account Settings</li>
                  <li>Select "Change Password"</li>
                  <li>Enter your current password and new password</li>
                  <li>Confirm the changes</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-orbitron font-bold mb-3 text-gold">Can I delete my 6 Club account?</h4>
                <p className="text-white/90 font-poppins">
                  Yes, you can request account deletion by contacting customer support or using the account deletion option in your settings. Note that this action may be permanent.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-orbitron font-bold mb-3 text-gold">How do I contact 6 Club support?</h4>
                <p className="text-white/90 font-poppins mb-2">You can reach 6 Club support through:</p>
                <ul className="list-disc list-inside space-y-1 text-white/90 font-poppins ml-4">
                  <li>In-app customer service</li>
                  <li>Official website contact form</li>
                  <li>Email support</li>
                  <li>Social media channels</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Rewards & Benefits */}
          <div className="pt-8 border-t border-gold/20">
            <h3 className="text-2xl font-orbitron font-bold mb-6 text-gold">Rewards & Benefits</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-orbitron font-bold mb-3 text-gold">What rewards can I earn in 6 Club?</h4>
                <p className="text-white/90 font-poppins">
                  Members can earn various rewards including bonus points, exclusive access to events, special promotions, and other membership benefits based on their activity and participation level.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-orbitron font-bold mb-3 text-gold">How do I claim my 6 Club rewards?</h4>
                <p className="text-white/90 font-poppins">
                  Rewards can typically be claimed through your account dashboard or rewards section in the app. Follow the on-screen instructions to redeem available rewards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

