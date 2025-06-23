import './globals.css'
import { Inter } from 'next/font/google'
import Providers from '@/components/ThemeProviders'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

// ✅ Moved themeColor here
export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#111827' }
  ]
}

// ✅ Keep metadata clean
export const metadata = {
  title: 'Artistly - Book Top Talent',
  description: 'Discover and book exceptional artists for your events',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="en" 
      suppressHydrationWarning
      className={`${inter.variable} scroll-smooth`}
    >
      <body 
        className={`${inter.className} antialiased min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200`}
        suppressHydrationWarning
      >
        <Providers>
          <div className="min-h-screen flex flex-col">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}
