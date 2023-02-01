import '@fontsource/inter';
import type { AppProps } from 'next/app';
import { QueryClientProvider } from 'react-query';
import { makeServer } from '../services/mirage';
import { queryClient } from '../services/queryClient';
import '../styles/globals.css';

// makeServer();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}
