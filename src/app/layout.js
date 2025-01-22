import './globals.css'
import Header from './components/header'
import Footer from './components/footer'
import { Analytics } from "@vercel/analytics/react"
import ClientWrapper from './components/ClientWrapper'
import RevealOnScroll from './components/RevealOnScroll'

export const metadata = {
  title: 'Duurzaamheid Op Wielen',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <head>
        <link rel="stylesheet" href='https://use.typekit.net/zsn8hgp.css'/>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-JQ2T50NHR2"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-JQ2T50NHR2');
        </script>
      </head>
      <body className='relative body '>
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
