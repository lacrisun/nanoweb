import './globals.css'
import Favicon from '../public/favicon.ico'
import localFont from 'next/font/local'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

require('dotenv').config()
config.autoAddCss = false
 
const myFont = localFont({ src: '../public/fonts/HeliosExt.otf' })

export const metadata = {
  title: 'NanoWeb',
  description: 'Desain grafis dan pembuatan website dengan cepat dan murah',
  icons: [{ rel: 'icon', url: Favicon.src }] 
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  )
}
