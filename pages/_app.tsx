import '../styles/globals.css'
import type { AppProps } from 'next/app'
import DefaultLayout from '@/components/DefaultLayout'
import { ToastProvider } from 'contexts/toaster'

export default function App({ Component, pageProps }: AppProps) {
  return <ToastProvider>
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  </ToastProvider>
}
