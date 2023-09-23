import { useSession, signIn, signOut } from "next-auth/react";

export function AuthPage() {
  return (
    <>
      Not Logged In. <br/>
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
