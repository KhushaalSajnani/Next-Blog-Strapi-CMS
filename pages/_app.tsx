import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Nav from "@/Components/Navbar/Nav";
import Container from "@/Components/Layout/LayoutContainer/Container";

export default function App({ Component, pageProps }: AppProps) {
  return(
      <>
          <Nav/>
              <Component {...pageProps} />

      </>

  )
}
