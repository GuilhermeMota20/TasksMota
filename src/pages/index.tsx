import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from "react";
import Header from "../components/Header";

export default function Home() {
  const [email, setEmail] = useState('guidroidbr.2007@gmail.com');
  const [password, setPassword] = useState('12345678');

  const auth = getAuth();

  const signupForm = (event) => {
    event.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((cred)=> {
        console.log('user created:', cred.user);
      })
      .catch((err)=> {
        console.error('user created is not found:', err.message);
      })
  };

  return (
    <section className="text-slate-600 dark:bg-darkBlue-900 dark:text-slate-400 pt-5 pb-8 sm:pb-16 px-4 md:px-8 md:w-full xl:w-8/12 m-auto min-h-screen flex flex-col gap-6">
      <Header />

      <form className="flex flex-col gap-4 w-96" onSubmit={signupForm} >
        <div className="flex flex-col gap-2">
          <label htmlFor="email">E-mail</label>
          <input
            className="rounded-md p-2"
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
            className="rounded-md p-2"
            type="password"
            name="password"
            value={password}
            onChange={(({ target }) => {
              setPassword(target.value);
            })}
          />
        </div>

        <button className="bg-pink-600 py-2 w-full mt-4 rounded-md">
          Entrar
        </button>
      </form>
    </section>
  );
};