import { ContextPokemonProvider } from '@/context/context_Pokemon'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContextPokemonProvider>
      <Component {...pageProps} />
    </ContextPokemonProvider>
  )
}
