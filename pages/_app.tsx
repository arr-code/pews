import type { AppProps } from 'next/app'
import '../styles/globals.css'
import '../public/css/animate.css'
import '../public/css/tiny-slider.css'
import '../public/fonts/lineicons/font-css/LineIcons.css'
import '../public/css/tailwindcss.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
