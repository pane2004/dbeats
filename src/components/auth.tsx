import { useSession, signIn, signOut } from "next-auth/react";

export function AuthPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900">
      <h1 className="text-2xl text-white font-bold mb-4 text-center">dBeats</h1>
      <p className="text-gray-600 text-center mb-4">
        The Ultimate Sound Platform for DJs.
      </p>
      <p className="text-gray-600 text-center mb-4">
        Tap into an exclusive community and discover the most unique sounds, beats, and effects for your sets.
      </p>
      <div className="flex justify-center">
        <a
          href={`/api/auth/signin`}
          onClick={(e) => {
            e.preventDefault();
            signIn("worldcoin");
          }}
          className="text-white bg-blue-500 hover:bg-blue-600 px-10 py-4 rounded font-medium transition duration-200"
        >
          Get Started
        </a>
      </div>
    </div>
  );
}
