'use client'
import '@fontsource/inter';
import { useRouter } from "next/navigation";
import NextNProgress from 'nextjs-progressbar';
import { useState } from "react";
import { QueryClientProvider } from "react-query";
import DarkMode from "../components/MenuUser/MenuConfig/DarkMode";
import { AuthContextProvider } from "../context/AuthContext";
import { auth } from "../services/Firebase";
import { queryClient } from "../services/queryClient";
import '../styles/globals.scss';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [showModal, setIsModalShown] = useState(false);
  const [activeIndex, setActiveIndex] = useState(1);

  const router = useRouter();

  if (auth.currentUser?.emailVerified) router.push('/AllTasks');

  return (
    <>
      {/* {pathName == '/?Error=sign' && !showModal && (
        <ModalError
          text='Houve um problema ao tentar entrar em sua conta. Por favor, tente novamente.'
          onClose={() => {
            setIsModalShown(false);
            router.push('/');
          }}
        />
      )}

      {pathName == '/Signup?Error=signup' && !showModal && (
        <ModalError
          text='Houve um problema ao tentar entrar em sua conta. Por favor, tente novamente.'
          onClose={() => {
            setIsModalShown(false);
            router.push('/Signup');
          }}
        />
      )} */}


      <AuthContextProvider>
        <html>
          <body className='bg-slate-200 select-none'>
            <NextNProgress
              color='rgb(219 39 119)'
              options={{
                showSpinner: false,
              }}
            />
            <div className='bg-slate-200 dark:bg-darkBlue-900'>
              <QueryClientProvider client={queryClient}>
                <section className="dark:bg-darkBlue-800">
                  <div className="text-slate-600 dark:text-slate-400 pt-5 pb-2 px-4 md:px-8 md:w-full xl:w-8/12 m-auto min-h-screen flex flex-col  justify-center items-center gap-8">
                    <div className="absolute bottom-4 right-0 p-2 bg-slate-50 dark:bg-darkBlue-900 rounded-md shadow-lg z-20">
                      <DarkMode activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
                    </div>

                    <h2 className="font-bold text-2xl">ToDoTask <span className="text-pink-600">.</span></h2>

                    {children}
                  </div>
                </section>

                <div className="fixed -bottom-[40rem] -left-48 w-[400rem] h-2/3 bg-slate-50 rotate-12 dark:bg-darkBlue-900">
                  <div className="absolute w-96 h-16 -top-6 bg-pink-600 opacity-80 rounded-md">
                    <div className="absolute w-28 h-16 -top-6 bg-red-500 opacity-80 rounded-md"></div>
                  </div>

                  <div className="absolute w-96 h-16 -top-12 right-[280rem] bg-pink-600 opacity-80 rounded-md"></div>
                </div>
                <div className="fixed border-r border-dashed border-slate-300 h-full top-0 dark:border-slate-700 left-[80px]"></div>
                <div className="fixed border-r border-dashed border-slate-300 h-full top-0 dark:border-slate-700 left-[30rem]"></div>
                <div className="fixed border-r border-dashed border-slate-300 h-full top-0 dark:border-slate-700 right-[30rem]"></div>
                <div className="fixed border-r border-dashed border-slate-300 h-full top-0 dark:border-slate-700 right-[80px]"></div>
              </QueryClientProvider>
            </div>
          </body>
        </html>
      </AuthContextProvider>
    </>
  )
}