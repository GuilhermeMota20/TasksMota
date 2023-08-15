'use client'
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { MoonLoader } from "react-spinners";
import * as yup from "yup";
import Divider from "../../../components/Utilities/Divider";
import { Input } from "../../../components/Utilities/Input";
import InputGroup from "../../../components/Utilities/InputGroup";
import { useAuth } from "../../../context/AuthContext";

type UserFormData = {
  email: string;
  password: string;
};

const userSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatorio').email('O e-mail esta incompleto'),
  password: yup.string().required('Senha obrigatoria').min(8, 'A senha deve ter no minimo 8 caracteres'),
});

export default function RootPage() {
  const inputClass = "w-full h-full py-3 pl-4 pr-11 rounded-md bg-slate-100 focus:border-solid focus:border-pink-600 outline-transparent border-2 border-slate-200 dark:border-darkBlue-800 hover:border-pink-600 focus:border-pink-600 dark:hover:border-pink-600 dark:focus:border-pink-600 focus:outline-none transition dark:bg-darkBlue-800";

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { Signup, loading, SignInWithGoogle } = useAuth();

  const handleSignup = async () => {
    await Signup(email, password);
  };

  const { register, handleSubmit, formState: { errors } } = useForm<UserFormData>({
    resolver: yupResolver(userSchema)
  });

  return (
    <>
      <form
        className="form-login flex flex-col gap-4 bg-slate-50 dark:bg-darkBlue-900 p-4 md:p-10 w-full md:w-3/5 rounded-md shadow-lg z-10"
        onSubmit={handleSubmit(handleSignup)}
      >
        <h1 className="font-medium mb-5 text-lg md:text-2xl">
          Cadastre seu acesso
        </h1>

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
          <button
            className="bg-pink-600 py-2 w-full mt-4 rounded-md text-white flex items-center justify-center gap-4 cursor-not-allowed" disabled
          >
            <MoonLoader color="#ffffff" size={18} />
          </button>
        ) : (
          <button className="bg-pink-600 transition hover:bg-pink-700 py-2 w-full mt-4 rounded-md text-white">
            Cadastrar
          </button>
        )}

        <Divider />

        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          <Link
            href='/'
            className="w-full text-center bg-slate-200 border border-slate-300 transition dark:bg-darkBlue-700 dark:border-darkBlue-800 hover:text-pink-600 hover:bg-slate-300  py-2 rounded-md"
          >
            Acesse sua conta
          </Link>

          <button
            type="button"
            className="w-full flex items-center justify-center gap-4 bg-slate-200 border border-slate-300 transition dark:bg-darkBlue-700 dark:border-darkBlue-800 hover:text-pink-600 hover:bg-slate-300  py-2 rounded-md"
            onClick={SignInWithGoogle}
          >
            Entrar com Google
            <FcGoogle size={18} />
          </button>
        </div>
      </form>
    </>
  )
}