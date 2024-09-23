import { DatosProvider } from '@/context/datosContext'
import type { AppProps } from 'next/app'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
  
      <DatosProvider>
        <Component {...pageProps} />
      </DatosProvider>
  
    )
}