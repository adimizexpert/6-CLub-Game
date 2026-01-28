import Link from 'next/link'
import { footerLinks, SITE_NAME } from '@/lib/constants'

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

