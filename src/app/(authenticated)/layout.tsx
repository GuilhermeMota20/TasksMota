'use client';
import '@fontsource/inter';
import NextNProgress from 'nextjs-progressbar';
import React from "react";
import { QueryClientProvider } from 'react-query';
import Header from "../components/Header";
import { AuthContextProvider } from '../context/AuthContext';
import { queryClient } from '../services/queryClient';
import '../styles/globals.scss';

export default async function LayoutTasks({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AuthContextProvider>
        <html>
          <body className='bg-slate-200 select-none'>
            <NextNProgress
              color='rgb(219 39 119)'
              options={{
                showSpinner: false,
              }}
            />
            <QueryClientProvider client={queryClient}>
              <section className="text-slate-600 dark:bg-darkBlue-900 dark:text-slate-400 pt-5 pb-8 sm:pb-16 px-4 md:px-8 md:w-full xl:w-8/12 m-auto min-h-screen flex flex-col gap-6">
                <Header />
                {children}
              </section>
            </QueryClientProvider>
          </body>
        </html>
      </AuthContextProvider>
    </>
  )
}