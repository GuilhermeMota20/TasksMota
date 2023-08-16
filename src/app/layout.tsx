'use client'
import { usePathname } from 'next/navigation';
import { QueryClientProvider } from 'react-query';
import ProtectedRoute from './components/Utilities/ProtectedRoute';
import { AuthContextProvider } from './context/AuthContext';
import { queryClient } from './services/queryClient';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();
  const noAuthRequired = ['/', '/Signup'];

  return (
    <>
      <html lang="pt-br">
        <head />

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