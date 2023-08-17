'use client'
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { auth } from "../../services/Firebase";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!auth.currentUser) {
      router.push('/');
    };
  }, [router, user]);

  return (
    <>
      {user ? children : null}
    </>
  )
}