'use client';

import Link from "next/link";
import { LiaSignInAltSolid } from "react-icons/lia";
import { useAuth } from "../context/AuthContext";

export default function MarketingPage() {
  const { user } = useAuth();

  return (
    <>
      <div className="flex flex-col h-full items-center justify-between z-10">
        <div className="max-w-3xl space-y-4 mt-4 flex flex-grow flex-col items-center justify-center text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Suas ideias, documentos e planos. Unificado. Bem-vindo ao <span className="underline">ToDoTask</span>
          </h1>

          <h3 className="text-base sm:text-xl md:text-2xl font-medium">
            ToDoTask é um espaço conectado onde, <br />
            um trabalho melhor e mais rápido acontece.
          </h3>

          {user ? (
            <Link href="/AllTasks">
              <button className="px-4 py-3 bg-pink-600 text-white transition rounded-md hover:bg-pink-700 dark:shadow-transparent flex items-center justify-center">
                <LiaSignInAltSolid className="mr-2 w-6 h-6" />
                Entrar
              </button>
            </Link>
          ) : (
            <Link href="/Signin">
              <button className="px-4 py-1 bg-pink-600 text-white transition rounded-md hover:bg-pink-700 dark:shadow-transparent z-50">
                Comece agora sem pagar nada!
              </button>
            </Link>
          )}
        </div>
      </div>
    </>
  )
}