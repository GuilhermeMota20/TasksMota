'use client'
import { usePathname } from 'next/navigation';
import { QueryClientProvider } from 'react-query';
import ProtectedRoute from './components/Utilities/ProtectedRoute';
import { AuthContextProvider } from './context/AuthContext';
import RootHead from './head';
import { queryClient } from './services/queryClient';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();
  const noAuthRequired = [
    '/',
    '/Signup',
    '/Signin',
  ];

  return (
    <>
      <html lang="pt-br" className='scroll-smooth'>
        <RootHead />

        <AuthContextProvider>
          <QueryClientProvider client={queryClient}>
            <body className="bg-slate-200 dark:bg-darkBlue-900 select-none">
              {noAuthRequired.includes(pathName) ? (
                <>{children}</>
              ) : (
                <ProtectedRoute >
                  {children}
                </ProtectedRoute>
              )}
            </body>
          </QueryClientProvider>
        </AuthContextProvider>
      </html>
    </>
  )
}