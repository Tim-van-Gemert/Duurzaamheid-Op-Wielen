import './globals.css'
import Header from './components/header'
import Footer from './components/footer'
import { Analytics } from "@vercel/analytics/react"
import ClientWrapper from './components/ClientWrapper'
import RevealOnScroll from './components/RevealOnScroll'

export const metadata = {
  title: 'Tessa website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href='https://use.typekit.net/zsn8hgp.css'/>
      </head>
      <body className='relative body'>
        <ClientWrapper>
          <RevealOnScroll />
          <Header />
          {children}
          <Footer />
        </ClientWrapper>
        <Analytics />
      </body>
    </html>
  )
}
