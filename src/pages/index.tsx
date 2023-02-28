import { useState } from "react";
import LayoutAuthentication from "../components/Utilities/LayoutAuthentication";
import { useAuth } from "../context/AuthContext";

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, Sign } = useAuth();

  console.log('MyUser:', user);

  const handleSignup = async (e: any) => {
    e.preventDefault();

    try {
      await Sign(email, password);

    } catch (error) {
      console.log(error.message);
    };
  };

  return (
    <>
      <LayoutAuthentication
        email={email
        } setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleFunction={handleSignup}
        nameForm='Acesse sua conta'
      />
    </>
  );
};