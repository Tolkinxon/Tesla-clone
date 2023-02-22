import { AuthUserProvider } from '@/context/AuthUserContext'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <AuthUserProvider><Component {...pageProps} /></AuthUserProvider>
}
