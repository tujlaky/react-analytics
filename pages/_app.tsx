import '../styles/globals.css'
import type { AppProps } from 'next/app'
import DefaultLayout from '@/components/layouts/DefaultLayout'
import { ToastProvider } from 'contexts/toaster'
import initAuth from 'initAuth'

initAuth();

export default function App({ Component, pageProps }: AppProps) {
  return <ToastProvider>
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  </ToastProvider>
}
