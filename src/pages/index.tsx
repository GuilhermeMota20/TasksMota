import { useState } from "react";
import LayoutAuthentication from "../components/Utilities/LayoutAuthentication";
import { useAuth } from "../context/AuthContext";

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { Sign } = useAuth();

  const handleSignup = async () => {
    await Sign(email, password);
  };

  return (
    <>
      <LayoutAuthentication
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleFunction={handleSignup}
        nameForm='Acesse sua conta'
      />
    </>
  );
};