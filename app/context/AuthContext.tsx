'use client'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithRedirect, signOut, UserCredential } from "firebase/auth";
import { useRouter } from "next/navigation";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { auth } from "../services/Firebase";
import { IsUserType } from "../types/User";

const AuthContext = createContext<any>({});
export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IsUserType | null>(null);
  const [loading, setLoading] = useState(true);
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

  useEffect(() => {
    if (user) return router.push('/AllTasks');
  }, [router, user]);

  async function Signup(email: string, password: string) {
    setLoading(true);
    const newUserCredential: UserCredential = await createUserWithEmailAndPassword(auth, email, password);

    await sendEmailVerification(newUserCredential.user)
      .then(() => {
        router.push('/Signup?send-email=true');
      })
      .catch(() => {
        router.push('/Signup?send-email=false');
      });
  };

  const Sign = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setLoading(true);
        router.push('/AllTasks');
      })
      .catch(() => {
        router.push('/Error=signin');
      });
  };

  const provider = new GoogleAuthProvider();
  const SignInWithGoogle = async () => {
    await signInWithRedirect(auth, provider)
      .then(() => {
        router.push('/AllTasks');
      })
      .catch(() => {
        router.push('/Error=signin')
      });
  };

  const Logout = async () => {
    setUser(null);
    signOut(auth);
    router.push('/');
  };

  return (
    <AuthContext.Provider value={{ user, Signup, Sign, Logout, SignInWithGoogle, loading, setLoading }}>
      {children}
    </AuthContext.Provider>
  )
}
