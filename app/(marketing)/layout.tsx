'use client';

import '@fontsource/inter';
import Image from 'next/image';
import React from "react";
import HeaderMarketing from '../components/Header/HeaderMarketing';
import '../styles/globals.scss';
import backrgoundLight from '../assets/images/dashboard.png';
import backrgoundDark from '../assets/images/dashboardDark.png';

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <section className="flex flex-col gap-6 w-full h-screen text-slate-600 dark:bg-darkBlue-900 dark:text-slate-400 pt-5 pb-8 sm:pb-16 px-4 md:px-8 md:w-full xl:w-8/12 m-auto min-h-screen">
        <HeaderMarketing />
        {children}

        <div className='fixed box-content w-full left-0 top-48 sm:-bottom-3/4 flex items-center justify-center p-2 z-10 sm:z-20'>
          <Image
            src={backrgoundLight}
            alt="aaa"
            width={520}
            height={520}
            loading="lazy"
            className="rounded-md border-8 border-slate-200 block dark:hidden"
          />
          <Image
            src={backrgoundDark}
            alt="aaa"
            width={520}
            height={520}
            loading="lazy"
            className="rounded-md border-8 dark:border-darkBlue-900 hidden dark:block"
          />
        </div>

        <div className="fixed -bottom-[40rem] -left-48 w-[400rem] h-2/3 bg-slate-50 rotate-12 dark:bg-darkBlue-700 z-10">
          <div className="absolute w-96 h-16 bg-pink-600 opacity-80 rounded-md top-2/3 sm:-top-6" >
            <div className="absolute w-28 h-16 bg-red-500 opacity-80 rounded-md -top-6" />
          </div>

          <div className="absolute w-[860px] h-16 -top-12 right-[240rem] bg-pink-600 opacity-80 rounded-md" />
        </div>
        <div className="fixed border-r border-dashed border-slate-300 h-full top-0 dark:border-slate-700 left-[80px] hidden sm:block"></div>
        <div className="fixed border-r border-dashed border-slate-300 h-full top-0 dark:border-slate-700 left-[30rem] hidden sm:block"></div>
        <div className="fixed border-r border-dashed border-slate-300 h-full top-0 dark:border-slate-700 right-[30rem] hidden sm:block"></div>
        <div className="fixed border-r border-dashed border-slate-300 h-full top-0 dark:border-slate-700 right-[80px] hidden sm:block"></div>
      </section>
    </>
  )
}