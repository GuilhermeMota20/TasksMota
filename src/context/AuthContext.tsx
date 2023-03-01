import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getRedirectResult, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signInWithRedirect, signOut } from "firebase/auth";
import { auth } from "../Firebase";
import { useRouter } from "next/router";
import { stringify } from "querystring";

const AuthContext = createContext<any>({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    console.log(user);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    uid: user.uid,
                    email: user.email,
                });
            } else {
                setUser(null);
            };

            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const Signup = (email: string, password: string) => {
        return createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                setLoading(true);
                Sign(email, password);
            })
    };

    const Sign = (email: string, password: string) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                setLoading(true);
                router.push('/AllTasks');
            })
    };

    const provider = new GoogleAuthProvider();
    
    const SignInWithGoogle = async () => {
        await signInWithRedirect(auth, provider)
            .then((result)=> {
                console.log(result);
                router.push('/AllTasks');
            });
    };

    const Logout = async () => {
        setUser(null);
        await signOut(auth);
    };

    return (
        <AuthContext.Provider value={{ user, Signup, Sign, Logout, SignInWithGoogle, loading, setLoading }}>
            {children}
        </AuthContext.Provider>
    )
}
