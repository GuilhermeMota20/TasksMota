import '@fontsource/inter';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { QueryClientProvider } from 'react-query';
import ProtectedRoute from '../components/Utilities/ProtectedRoute';
import { AuthContextProvider } from '../context/AuthContext';
import { queryClient } from '../services/queryClient';
import '../styles/globals.scss';

const noAuthRequired = ['/', '/Signup'];

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <AuthContextProvider>
      <div className='bg-slate-200 dark:bg-darkBlue-900'>
        <QueryClientProvider client={queryClient}>

          {noAuthRequired.includes(router.pathname) ? (
            <Component {...pageProps} />
          ) : (
            <ProtectedRoute>
              <Component {...pageProps} />
            </ProtectedRoute>
          )}

        </QueryClientProvider>
      </div>
    </AuthContextProvider>
  )
}
