import '@fontsource/inter';
import type { AppProps } from 'next/app';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '../services/queryClient';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}
