import { AFFILIATE_LINK } from '@/lib/constants'

interface CTAButtonProps {
  text: string
  variant?: 'primary' | 'secondary'
  className?: string
}

export default function CTAButton({ text, variant = 'primary', className = '' }: CTAButtonProps) {
  const baseClasses = 'px-5 py-3 sm:px-8 sm:py-4 rounded-lg font-orbitron font-bold text-sm sm:text-base transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95'
  const variantClasses = variant === 'primary' 
    ? 'bg-gold text-dark-blue hover:bg-gold/90' 
    : 'bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-dark-blue'

  return (
    <a
      href={AFFILIATE_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {text}
    </a>
  )
}

