import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - 6 Club Guide',
  description: 'Contact 6clubguide.com for questions, support, or inquiries. We\'re here to help with any questions about 6 Club gaming platform.',
  openGraph: {
    url: 'https://6clubguide.com/contact',
    title: 'Contact Us - 6 Club Guide',
    description: 'Contact 6clubguide.com for questions, support, or inquiries.',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

