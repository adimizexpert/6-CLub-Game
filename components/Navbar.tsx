'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AFFILIATE_LINK, navigationLinks } from '@/lib/constants'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-dark-blue border-b border-gold/20 sticky top-0 z-50 transition-all duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="6Club Guide - Official 6 Club Game Guide Logo | Download 6 Club APK"
                width={120}
                height={40}
                sizes="120px"
                className="h-10 w-auto hover:opacity-90 transition-opacity duration-200"
                priority
                quality={95}
              />
            </Link>
          </div>

          {/* Desktop Navigation Links - Hidden on mobile */}
          <div className="hidden lg:flex items-center space-x-6">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-gold transition-all duration-300 ease-in-out font-poppins transform hover:translate-y-[-2px]"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Login and Register Buttons */}
          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href={AFFILIATE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 sm:px-4 sm:py-2 bg-gold text-dark-blue font-orbitron font-bold rounded-lg hover:bg-gold/90 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 text-sm sm:text-base whitespace-nowrap"
            >
              Login
            </a>
            <a
              href={AFFILIATE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 sm:px-4 sm:py-2 bg-gold text-dark-blue font-orbitron font-bold rounded-lg hover:bg-gold/90 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 text-sm sm:text-base whitespace-nowrap"
            >
              Register
            </a>

            {/* Hamburger Menu - Only visible on mobile */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-gold hover:text-gold/80 transition-all duration-300 ease-in-out transform hover:scale-110 active:scale-95 ml-2"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Only visible on mobile */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gold/20 animate-slideIn">
            <div className="flex flex-col space-y-4">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white hover:text-gold transition-all duration-300 ease-in-out font-poppins px-4 py-2 transform hover:translate-x-1"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

