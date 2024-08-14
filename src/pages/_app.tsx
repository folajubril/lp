import "@/styles/globals.css";
import localFont from "next/font/local";
import { ChakraProvider } from '@chakra-ui/react'

import type { AppProps } from "next/app";
const ppFont = localFont({
  src: "assets/fonts/ppTelegraf/PPTelegraf-Regular.otf",
});
export default function App({ Component, pageProps }: AppProps) {
  return(
  <ChakraProvider>
      <Component {...pageProps} className={ppFont.className}/>
  </ChakraProvider> 
  )
}
