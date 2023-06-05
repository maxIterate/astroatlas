import Navbar from './components/navbar/Navbar'
import './globals.css'
import { Inter, Nunito } from 'next/font/google'

const font = Nunito({
  subsets: ['latin']
})

export const metadata = {
  title: 'Astroatlas',
  description: 'Find your way to stars!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

// min 18:38 https://www.youtube.com/watch?v=c_-b_isI4vg&ab_channel=CodeWithAntonio