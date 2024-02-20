'use client'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signInWithRedirect, signOut, UserCredential } from "firebase/auth";
import { useRouter } from "next/navigation";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { auth } from "../services/Firebase";
import { IsUserType } from "../types/User";

const AuthContext = createContext<any>({});
export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IsUserType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [loginError, setLoginError] = useState<boolean | undefined>(undefined);
  const [sendEmailError, setSendEmailError] = useState<boolean | undefined>(undefined);
  const [showModalEmailVirified, setShowModalEmailVirified] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          emailVerified: user ? user?.emailVerified : false,
        });
      } else {
        setUser(null);
      };

      if (user)
        setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // useEffect(() => {
  //   if (user) return router.push('/AllTasks');
  // }, [router, user]);

  async function Signup(email: string, password: string) {
    setLoading(true);

    const newUserCredential: UserCredential = await createUserWithEmailAndPassword(auth, email, password);

    await sendEmailVerification(newUserCredential?.user)
      .then(() => {
        setSendEmailError(false);
        setShowModalEmailVirified(true);
        setLoading(false);
      })
      .catch(() => {
        setSendEmailError(true);
        setShowModalEmailVirified(false);
        setLoading(false);
      });
  };

  const Sign = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setLoading(true);
        setLoginError(false);
        router.push('/AllTasks');
      })
      .catch(() => {
        setLoginError(true);
      });
  };

  const provider = new GoogleAuthProvider();
  const SignInWithGoogle = async () => {
    await signInWithPopup(auth, provider)
      .then(() => {
        setLoginError(false);
        router.push('/AllTasks');
      })
      .catch(() => {
        setLoginError(true);
      });
  };

  const Logout = async () => {
    setUser(null);
    signOut(auth);
    router.push('/');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        Signup,
        Sign,
        Logout,
        SignInWithGoogle,
        loading,
        setLoading,
        loginError,
        setLoginError,
        sendEmailError,
        setSendEmailError,
        showModalEmailVirified,
        setShowModalEmailVirified
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
