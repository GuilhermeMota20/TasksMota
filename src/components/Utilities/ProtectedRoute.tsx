import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { auth } from "../../Firebase";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
    const { user } = useAuth();
    const router = useRouter();

    // auth

    useEffect(() => {
        if (!auth.currentUser) {
            router.push('/');
        }
    }, [router, user]);

    return (
        <>
            {user ? children : null}
        </>
    )
}