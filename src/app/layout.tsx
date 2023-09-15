'use client'
import { usePathname } from 'next/navigation';
import { QueryClientProvider } from 'react-query';
import ProtectedRoute from './components/Utilities/ProtectedRoute';
import { AuthContextProvider } from './context/AuthContext';
import { queryClient } from './services/queryClient';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();
  const noAuthRequired = [
    '/',
    '/Signup',
    '/Error=signin',
    '/Signup?send-email=true',
    '/Signup?send-email=false',
    '/Signup?verified-email=true',
    '/Signup?verified-email=false',
  ];

  return (
    <>
      <html lang="pt-br">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link href="https://rsms.me/inter/inter.css" rel="stylesheet" />
          <link rel="icon" type="image/x-icon" href="./favicon.svg" />
          <title>ToDoTasks.</title>
        </head>

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