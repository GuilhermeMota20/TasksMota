import { useState } from "react";
import LayoutAuthentication from "../components/Utilities/LayoutAuthentication";
import { useAuth } from "../context/AuthContext";

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { user, Signup } = useAuth();
  
    console.log('MyUser:', user);
  
    const handleSignup = async (e: any) => {
      e.preventDefault();
  
      try {
        await Signup(email, password);
  
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
          nameForm='Cadastre uma conta'
        />
      </>
    );
}