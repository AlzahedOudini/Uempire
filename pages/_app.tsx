import '../styles/globals.scss';
import 'tailwindcss/tailwind.css';
import '../styles/Home.module.scss';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
    
  )
}

export default MyApp;