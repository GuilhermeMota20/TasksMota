import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { MoonLoader } from "react-spinners";
import * as yup from "yup";
import { auth } from "../../Firebase";
import { useAuth } from "../../context/AuthContext";
import DarkMode from "../MenuUser/MenuConfig/DarkMode";
import ModalError from "../Modals/ModalError";
import Divider from "./Divider";
import { Input } from "./Input";
import InputGroup from "./InputGroup";

type UserFormData = {
    email: string;
    password: string;
};

const userSchema = yup.object().shape({
    email: yup.string().required('E-mail obrigatorio').email('O e-mail esta incompleto'),
    password: yup.string().required('Senha obrigatoria').min(8, 'A senha deve ter no minimo 8 caracteres'),
});

export default function LayoutAuthentication({ nameForm, email, setEmail, password, setPassword, handleFunction }) {
    const inputClass = "w-full h-full py-3 pl-4 pr-11 rounded-md bg-slate-100 focus:border-solid focus:border-pink-600 outline-transparent border-2 border-slate-200 dark:border-darkBlue-800 hover:border-pink-600 focus:border-pink-600 dark:hover:border-pink-600 dark:focus:border-pink-600 focus:outline-none transition dark:bg-darkBlue-800";

    const [activeIndex, setActiveIndex] = useState(1);
    const [showModal, setIsModalShown] = useState(false);

    const router = useRouter();
    const { loading, SignInWithGoogle } = useAuth();

    if (auth.currentUser?.emailVerified) router.push('/AllTasks');

    const { register, handleSubmit, formState: { errors } } = useForm<UserFormData>({
        resolver: yupResolver(userSchema)
    });

    return (
        <>
            {router.asPath == '/?Error=sign' && !showModal && (
                <ModalError
                    text='Houve um problema ao tentar entrar em sua conta. Por favor, tente novamente.'
                    onClose={() => {
                        setIsModalShown(false);
                        router.push('/');
                    }}
                />
            )}

            {router.asPath == '/Signup?Error=signup' && !showModal && (
                <ModalError
                    text='Houve um problema ao tentar entrar em sua conta. Por favor, tente novamente.'
                    onClose={() => {
                        setIsModalShown(false);
                        router.push('/Signup');
                    }}
                />
            )}

            <section className="dark:bg-darkBlue-800">
                <div className="text-slate-600 dark:text-slate-400 pt-5 pb-2 px-4 md:px-8 md:w-full xl:w-8/12 m-auto min-h-screen flex flex-col  justify-center items-center gap-8">
                    <div className="absolute bottom-4 right-0 p-2 bg-slate-50 dark:bg-darkBlue-900 rounded-md shadow-lg z-20">
                        <DarkMode activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
                    </div>

                    <h2 className="font-bold text-2xl">ToDoTask <span className="text-pink-600">.</span></h2>

                    <form className="form-login flex flex-col gap-4 bg-slate-50 dark:bg-darkBlue-900 p-4 md:p-10 w-full md:w-3/5 rounded-md shadow-lg z-10" onSubmit={handleSubmit(handleFunction)} >

                        <h1 className="font-medium mb-5 text-lg md:text-2xl">{nameForm}</h1>

                        <InputGroup label="E-mail">
                            <Input
                                type="email"
                                value={email}
                                className={inputClass}
                                errors={errors.email}
                                {...register('email')}
                                onChange={({ target }: { target: any }) => {
                                    setEmail(target.value);
                                }}
                                disabled={loading ? true : false}
                            />
                        </InputGroup>

                        <InputGroup label="Senha">
                            <Input
                                type="password"
                                value={password}
                                className={inputClass}
                                errors={errors.password}
                                {...register('password')}
                                onChange={({ target }: { target: any }) => {
                                    setPassword(target.value);
                                }}
                                disabled={loading ? true : false}
                            />
                        </InputGroup>

                        {loading ? (
                            <button className="bg-pink-600 py-2 w-full mt-4 rounded-md text-white flex items-center justify-center gap-4 cursor-not-allowed" disabled>
                                <MoonLoader color="#ffffff" size={18} />
                            </button>
                        ) : (
                            <button className="bg-pink-600 transition hover:bg-pink-700 py-2 w-full mt-4 rounded-md text-white">
                                {nameForm == 'Cadastre uma conta' ? 'Cadastrar' : 'Entrar'}
                            </button>
                        )}

                        <Divider />

                        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                            <Link href={router.pathname !== '/Signup' ? '/Signup' : '/'} className="w-full text-center bg-slate-200 border border-slate-300 transition dark:bg-darkBlue-700 dark:border-darkBlue-800 hover:text-pink-600 hover:bg-slate-300  py-2 rounded-md">
                                {router.pathname !== '/Signup' ? 'Cadastrar uma conta' : 'Acessar sua conta'}
                            </Link>

                            <button type="button" className="w-full flex items-center justify-center gap-4 bg-slate-200 border border-slate-300 transition dark:bg-darkBlue-700 dark:border-darkBlue-800 hover:text-pink-600 hover:bg-slate-300  py-2 rounded-md" onClick={SignInWithGoogle}>
                                Entrar com Google
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