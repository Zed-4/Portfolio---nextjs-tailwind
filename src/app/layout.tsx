import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Abtin Ortgoli | Computer Engineer',
  description: 'Portfolio Abtin Ortgoli | Computer Engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
