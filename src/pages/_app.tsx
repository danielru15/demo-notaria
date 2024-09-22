import { AuthProvider } from '@/context/authContext' 
import { DatosProvider } from '@/context/datosContext'
import type { AppProps } from 'next/app'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <DatosProvider>
        <Component {...pageProps} />
      </DatosProvider>
    </AuthProvider>  
    )
}