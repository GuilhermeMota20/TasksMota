import { useState } from "react";
import LayoutAuthentication from "../components/Utilities/LayoutAuthentication";
import { useAuth } from "../context/AuthContext";

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { Signup } = useAuth();

  const handleSignup = async () => {
    await Signup(email, password);
  };

  return (
    <>
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