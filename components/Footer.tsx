import Link from 'next/link'
import { footerLinks, SITE_NAME, TELEGRAM_URL } from '@/lib/constants'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-blue border-t border-gold/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="font-orbitron text-xl font-bold text-gold mb-4">
              {SITE_NAME}
            </h3>
            <p className="text-white/80 font-poppins text-sm">
              Your official guide to 6 Club gaming platform. Download the app, play games, and join the community.
            </p>
          </div>

          {/* Main Links */}
          <div>
            <h4 className="font-orbitron text-lg font-bold text-gold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerLinks.main.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-gold transition-all duration-300 ease-in-out font-poppins text-sm transform hover:translate-x-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-orbitron text-lg font-bold text-gold mb-4">
              Legal
            </h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-gold transition-all duration-300 ease-in-out font-poppins text-sm transform hover:translate-x-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-orbitron text-lg font-bold text-gold mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-white/80 font-poppins text-sm">
              <li>
                <Link
                  href="/contact"
                  className="hover:text-gold transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>Email: support@6clubguide.com</li>
              <li>Website: 6clubguide.com</li>
            </ul>
            <div className="mt-4">
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-white transition-all hover:opacity-90"
                style={{ backgroundColor: '#229ED9' }}
                aria-label="Join 6Club on Telegram"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gold/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 font-poppins text-sm">
              © {currentYear} {SITE_NAME}. All rights reserved.
            </p>
            <p className="text-white/60 font-poppins text-sm mt-4 md:mt-0">
              This is an affiliate website. Play responsibly.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

