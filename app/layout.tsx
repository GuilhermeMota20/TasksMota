'use client'
import 'next/font/google/index'
import '@fontsource/inter';
import type { AppProps } from 'next/app';
import { usePathname } from 'next/navigation';
import NextNProgress from 'nextjs-progressbar';
import { QueryClientProvider } from 'react-query';
import './styles/globals.scss';
import ProtectedRoute from "./components/Utilities/ProtectedRoute";
import { AuthContextProvider } from "./context/AuthContext";
import { queryClient } from "./services/queryClient";

function Page({ Component, pageProps }: AppProps) {
  const pathName = usePathname(); 
  const noAuthRequired = ['/', '/Signup'];

  return (
    <>
      <NextNProgress
        color='rgb(219 39 119)'
        options={{
          showSpinner: false,
        }}
      />

      <AuthContextProvider>
        <div className='bg-slate-200 dark:bg-darkBlue-900'>
          <QueryClientProvider client={queryClient}>

            {noAuthRequired.includes(pathName) ? (
              <Component {...pageProps} />
            ) : (
              <ProtectedRoute>
                <Component {...pageProps} />
              </ProtectedRoute>
            )}

          </QueryClientProvider>
        </div>
      </AuthContextProvider>
    </>
  )
}


export default Page;