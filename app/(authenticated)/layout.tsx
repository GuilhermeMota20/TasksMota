'use client';
import '@fontsource/inter';
import React, { useEffect } from "react";
import Header from "../components/Header";
import { ModalProvider } from '../components/Providers/ModalsProvider';
import { cn } from '../lib/utils';
import { useLayoutSystem } from '../services/hooks/useLayoutSystem';
import { Toaster } from "sonner";
import '../styles/globals.scss';

export default function RootLayoutTasks({ children }: { children: React.ReactNode }) {
  const { isNavHorizontal, isLayoutExpanded } = useLayoutSystem((state) => state);

  useEffect(() => {

  }, []);

  return (
    <>
      <section
        className={cn(
          "flex flex-col gap-6 text-slate-600 dark:bg-darkBlue-900 dark:text-slate-400",
          !isNavHorizontal
            ? "pt-5 pb-8 sm:pb-16 px-4 md:px-8 md:w-full xl:w-8/12 m-auto min-h-screen"
            : "pt-20 pb-8 px-4 w-full min-h-screen",
          !isLayoutExpanded
            ? "px-8 md:px-16 lg:px-20 xl:px-24"
            : ""
        )}>
        <Header />
        {children}
      </section>
      
      <ModalProvider />
      <Toaster position="bottom-center" />
    </>
  )
}