import './globals.css'
import type { Metadata } from 'next'
import { Footer } from '../components/ui/footer'

export const metadata: Metadata = {
  title: '11 Pioneers - Creating the next generation of online academies',
  description: 'We build profitable Online Academies to combat the skills shortage.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <nav className="fixed top-0 w-full bg-black z-50 px-6 py-4">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <a href="/" className="text-xl font-bold text-white">11 Pioneers</a>
            <div className="space-x-8">
              <a href="/thesis" className="text-white hover:opacity-70 transition-opacity">Thesis</a>
              <a href="/investors" className="text-white hover:opacity-70 transition-opacity">For Investors</a>
              <a href="/founders" className="text-white hover:opacity-70 transition-opacity">For Founders</a>
              <a href="/team" className="text-white hover:opacity-70 transition-opacity">Team & Advisors</a>
            </div>
          </div>
        </nav>
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
