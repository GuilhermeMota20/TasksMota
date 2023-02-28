import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!user) {
            router.push('/');
        }
    }, [router, user]);

    return (
        <>
            {user ? children : null}
        </>
    )
}