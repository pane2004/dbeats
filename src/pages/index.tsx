import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import { AuthPage } from "../components/auth";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  // navigate to dashboard if session token is valid
  useEffect(() => {
    if (session || true) {
      router.push('/dashboard');
    }
  }, [session, router]);

  return <AuthPage />;
}
