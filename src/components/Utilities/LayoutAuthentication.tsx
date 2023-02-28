import { MoonLoader } from "react-spinners";
import { useAuth } from "../../context/AuthContext";
import { FcGoogle } from "react-icons/fc";
import Divider from "./Divider";
import { useRouter } from "next/router";
import Link from "next/link";

export default function LayoutAuthentication({ nameForm, email, setEmail, password, setPassword, handleFunction }) {
    const inputClass = "w-full h-full py-3 pl-4 pr-11 rounded-md bg-slate-100 focus:border-solid focus:border-pink-600 outline-transparent border-2 border-slate-200 dark:border-darkBlue-800 hover:border-pink-600 focus:border-pink-600 dark:hover:border-pink-600 dark:focus:border-pink-600 focus:outline-none transition dark:bg-darkBlue-800";

    const { loading, SignInWithGoogle } = useAuth();

    const router = useRouter();
    console.log(router.pathname)

    return (
        <>
            <section className="dark:bg-darkBlue-800">
                <div className="text-slate-600 dark:text-slate-400 pt-5 pb-8 sm:pb-16 px-4 md:px-8 md:w-full xl:w-8/12 m-auto min-h-screen flex flex-col  justify-center items-center gap-8">
                    <h2 className="font-bold text-2xl">ToDoTask <span className="text-pink-600">.</span></h2>

                    <form className="form-login flex flex-col gap-4 bg-slate-50 dark:bg-darkBlue-900 p-14 md:w-3/5 rounded-md shadow-md z-10" onSubmit={handleFunction} >
                        <h1 className="font-medium mb-5 text-lg md:text-2xl">{nameForm}</h1>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="email">E-mail</label>
                            <input
                                className={`rounded-md p-2 ${inputClass}`}
                                type="email" name="email"
                                value={email}
                                onChange={(({ target }) => {
                                    setEmail(target.value);
                                })}
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="password">Senha</label>
                            <input
                                className={`rounded-md p-2 ${inputClass}`}
                                type="password"
                                name="password"
                                value={password}
                                onChange={(({ target }) => {
                                    setPassword(target.value);
                                })}
                            />
                        </div>

                        {loading ? (
                            <button className="bg-pink-600 py-2 w-full mt-4 rounded-md text-white flex items-center justify-center gap-4 cursor-not-allowed" disabled>
                                <MoonLoader color="#ffffff" size={18} />
                            </button>
                        ) : (
                            <button className="bg-pink-600 py-2 w-full mt-4 rounded-md text-white">
                                {nameForm == 'Cadastre uma conta' ? 'Cadastra' : 'Entrar'}
                            </button>
                        )}

                        <Divider />

                        <div className="flex items-center justify-between">
                            <Link href={router.pathname !== '/Signup' ? '/Signup' : '/'} className="w-full text-center transition hover:text-pink-600">
                                {router.pathname !== '/Signup' ? 'Cadastrar uma conta' : 'Acessar sua conta'}
                            </Link>

                            <button type="button" className="w-full flex items-center justify-center gap-4 transition hover:text-pink-600" onClick={SignInWithGoogle}>
                                Entrar com o Google
                                <FcGoogle size={18} />
                            </button>
                        </div>
                    </form>
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