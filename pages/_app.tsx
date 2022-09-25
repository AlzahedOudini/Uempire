import '../styles/globals.scss';
import 'tailwindcss/tailwind.css';
import '../styles/Home.module.scss';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
    
    
  )
}

export default MyApp;
