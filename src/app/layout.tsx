import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' });

export const metadata: Metadata = {
  title: 'UniAxis Technologies',
  description:
    'UniAxis Technologies is a Jalgaon-based IT company offering IT infrastructure, cybersecurity, SaaS development, web solutions, and internship programs. Your trusted technology partner in Maharashtra, India.',
  keywords: [
    'UniAxis Technologies',
    'IT company Jalgaon',
    'cybersecurity Maharashtra',
    'SaaS development India',
    'web development Jalgaon',
    'IT infrastructure services',
    'firewall setup',
    'server management',
    'internship program IT',
  ],
  authors: [{ name: 'UniAxis Technologies', url: 'https://www.uniaxis.tech' }],
  creator: 'UniAxis Technologies',
  publisher: 'UniAxis Technologies',
  metadataBase: new URL('https://www.uniaxis.tech'),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.uniaxis.tech',
    siteName: 'UniAxis Technologies',
    title: 'UniAxis Technologies | IT Infrastructure, Cybersecurity & SaaS Solutions',
    description:
      'Empowering businesses with secure & scalable technology solutions. IT Infrastructure, Cybersecurity, SaaS Solutions, Web Development based in Jalgaon, Maharashtra.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'UniAxis Technologies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UniAxis Technologies | IT Solutions',
    description: 'Secure & scalable technology solutions from Jalgaon, Maharashtra.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.uniaxis.tech',
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'UniAxis Technologies',
  url: 'https://www.uniaxis.tech',
  logo: 'https://www.uniaxis.tech/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'support@uniaxis.tech',
    contactType: 'customer service',
    areaServed: 'IN',
    availableLanguage: ['English', 'Hindi', 'Marathi'],
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Jalgaon',
    addressRegion: 'Maharashtra',
    addressCountry: 'IN',
  },
  sameAs: [
    'https://twitter.com/uniaxistech',
    'https://linkedin.com/company/uniaxis-technologies',
  ],
  description:
    'UniAxis Technologies is a Jalgaon-based IT company specializing in IT infrastructure, cybersecurity, SaaS development, and web solutions.',
  foundingLocation: {
    '@type': 'Place',
    name: 'Jalgaon, Maharashtra, India',
  },
  knowsAbout: [
    'IT Infrastructure',
    'Cybersecurity',
    'SaaS Development',
    'Web Development',
    'Network Security',
    'Server Management',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        <div className="site-shell">
        <Header />
        <main>{children}</main>
        <Footer />
        </div>
      </body>
    </html>
  );
}
