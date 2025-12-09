import '../styles/globals.css'
import { IBM_Plex_Sans, Inter } from 'next/font/google'

const ibmPlexSans = IBM_Plex_Sans({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-ibm-plex',
})

const inter = Inter({
  weight: ['600'],
  subsets: ['latin'],
  variable: '--font-brsonoma',
})

export default function App({ Component, pageProps }) {
  return (
    <div className={`${ibmPlexSans.variable} ${inter.variable}`}>
      <Component {...pageProps} />
    </div>
  )
}

