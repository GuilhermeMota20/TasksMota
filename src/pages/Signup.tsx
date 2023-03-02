import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";
import ModalError from "../components/Modals/ModalError";
import ModalWarning from "../components/Modals/ModalWarning";
import LayoutAuthentication from "../components/Utilities/LayoutAuthentication";
import { useAuth } from "../context/AuthContext";
import { auth } from "../Firebase";

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [time, setTime] = useState(2 * 60);
  const { Signup } = useAuth();
  const router = useRouter();

  const min = Math.floor(time / 60);
  const seg = time % 60;

  useEffect(() => {
    if (router.asPath == '/Signup?send-email=true') {
      auth.currentUser?.reload();

      setTimeout(() => setTime(time - 1), 1000);

      if (time <= 0) {
        setTime(0);
        auth.currentUser?.delete();
        router.push('Signup?verified-email=false');
      };
    }

  }, [router, router.asPath, time]);

  if (router.asPath == '/Signup?send-email=false') {
    auth.currentUser?.delete();
  };

  const handleSignup = async () => {
    await Signup(email, password);
  };

  return (
    <>
      {router.asPath == '/Signup?send-email=true' && (
        <ModalWarning
          title="Verifique seu e-mail"
          text="Para prosseguir, por favor verifque seu e-mail e acesse o link de ativação da conta. Em seguida, volte para o sistema e entre na sua conta. Se você nao ativar no tempo estimado sua conta nao sera criada e o mesmo terá de ser cadastrada novamente e repetir este processo."
        >
          <strong className="mt-7 ml-auto">
            {`${min.toString().padStart(2, '0')}:${seg.toString().padStart(2, '0')}`}
          </strong>

          <div className='absolute flex items-center justify-center top-6 right-5'>
            <MoonLoader color="#fff" size={18} />
          </div>
        </ModalWarning>
      )}

      {router.asPath == '/Signup?verified-email=false' && time <= 0 && (
        <ModalWarning
          title="Opps... o tempo acabou!"
          text="Você perdeu o prazo de verificação do e-mail e sua conta não foi criada. Clique em voltar e tente novamente. "
        >
          <div className="mt-7 ml-auto">
            <Link href='/' className="hover:text-pink-600">Voltar</Link>
          </div>
        </ModalWarning>
      )}

      {router.asPath == '/Signup?send-email=false' && (
        <ModalError
          text="O e-mail inserido não existe. Por favor, insira um e-mail válido!"
          onClose={null}
        />
      )}

      <LayoutAuthentication
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleFunction={handleSignup}
        nameForm='Cadastre uma conta'
      />
    </>
  );
}