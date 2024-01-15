'use client'
import '@fontsource/inter';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { MoonLoader } from 'react-spinners';
import DarkMode from "../components/MenuUser/MenuConfig/DarkMode";
import ModalError from '../components/Modals/ModalError';
import ModalWarning from '../components/Modals/ModalWarning';
import { useAuth } from '../context/AuthContext';
import { auth } from "../services/Firebase";
import '../styles/globals.scss';

export default function RootLayoutPublic({ children }: { children: React.ReactNode }) {
  const [showModal, setIsModalShown] = useState(false);
  const [activeIndex, setActiveIndex] = useState(1);
  const [verifiedEmailFailed, setVerifiedEmailFailed] = useState<Boolean | undefined>(undefined);

  const router = useRouter();
  const {
    loginError,
    setLoginError,
    sendEmailError,
    showModalEmailVirified,
    setShowModalEmailVirified
  } = useAuth();

  const [time, setTime] = useState(2 * 60);
  const min = Math.floor(time / 60);
  const seg = time % 60;

  const emailIsVerified = auth.currentUser?.emailVerified;

  useEffect(() => {
    if (emailIsVerified) router.push('/AllTasks');
  }, [router, emailIsVerified]);

  useEffect(() => {
    if (!sendEmailError && showModalEmailVirified) {
      auth.currentUser?.reload();

      setTimeout(() => setTime(time -1), 1000);

      if (time <= 0) {
        auth.currentUser?.delete();

        setVerifiedEmailFailed(true);
        setShowModalEmailVirified(false);
      };
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router, sendEmailError, showModalEmailVirified, time]);

  return (
    <>
      {loginError && !showModal && (
        <ModalError
          text='Houve um problema ao tentar entrar em sua conta. Por favor, tente novamente.'
          onClose={() => {
            setIsModalShown(false);
            setLoginError(false);
          }}
        />
      )}

      {!sendEmailError && showModalEmailVirified && (
        <ModalWarning
          title="Verifique seu e-mail"
          text="Para prosseguir, por favor verifque seu e-mail e acesse o link de ativação da conta. Em seguida, volte para o sistema e entre na sua conta. Se você nao ativar no tempo estimado sua conta nao sera criada e o mesmo terá de ser cadastrada novamente."
        >
          <strong className="mt-7 ml-auto">
            {`${min.toString().padStart(2, '0')}:${seg.toString().padStart(2, '0')}`}
          </strong>

          <div className='absolute flex items-center justify-center top-6 right-5'>
            <MoonLoader color="#fff" size={18} />
          </div>
        </ModalWarning>
      )}

      {verifiedEmailFailed && time <= 0 && (
        <ModalWarning
          title="Opps... o tempo acabou!"
          text="Você perdeu o prazo de verificação do e-mail e sua conta não foi criada. Clique em voltar e tente novamente. "
        >
          <div className="mt-7 ml-auto">
            <button
              onClick={() => {
                setVerifiedEmailFailed(false);
                setTime(2 * 60);
              }}
              className="hover:text-pink-600"
            >
              Voltar
            </button>
          </div>
        </ModalWarning>
      )}

      {sendEmailError && (
        <ModalError
          text="O e-mail inserido não existe. Por favor, insira um e-mail válido!"
          onClose={null}
        />
      )}

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
    </>
  )
}