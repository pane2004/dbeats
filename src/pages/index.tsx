import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import { AuthPage } from "../../components/auth";

export default function Home() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session?.user?.name} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <AuthPage />
  );
}
