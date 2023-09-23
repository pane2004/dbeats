import { signOut, useSession } from "next-auth/react";
import {
  Home,
  ShoppingCart,
  Music,
  LogOut,
  Settings,
  Feather,
  MessageCircle,
} from "react-feather";
import { useRouter } from "next/router";
import Link from "next/link";

export function Menu() {
  const router = useRouter();

  return (
    <div className="w-1/6 bg-gray-700 text-white p-6 flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold mb-6">dBeats</h2>
        <ul>
          <li
            className={`mb-4 p-3 rounded-xl flex items-center ${
              router.pathname === "/dashboard"
                ? "bg-gray-500"
                : "hover:bg-gray-500"
            }`}
          >
            <Home className="mr-3" />
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li
            className={`mb-4 p-3 rounded-xl flex items-center ${
              router.pathname === "/community"
                ? "bg-gray-500"
                : "hover:bg-gray-500"
            }`}
          >
            <MessageCircle className="mr-3" />
            <Link href="/community">Community</Link>
          </li>
          <li
            className={`mb-4 p-3 rounded-xl flex items-center ${
              router.pathname === "/marketplace"
                ? "bg-gray-500"
                : "hover:bg-gray-500"
            }`}
          >
            <ShoppingCart className="mr-3" />
            <Link href="/marketplace">Marketplace</Link>
          </li>
          <li
            className={`mb-4 p-3 rounded-xl flex items-center ${
              router.pathname === "/soundboard"
                ? "bg-gray-500"
                : "hover:bg-gray-500"
            }`}
          >
            <Music className="mr-3" />
            <Link href="/soundboard">Soundboard</Link>
          </li>
          <li
            className={`mb-4 p-3 rounded-xl flex items-center ${
              router.pathname === "/mint" ? "bg-gray-500" : "hover:bg-gray-500"
            }`}
          >
            <Feather className="mr-3" />
            <Link href="/mint">Mint</Link>
          </li>
        </ul>
      </div>
      <ul>
        <li className="mb-4 hover:bg-gray-500 p-3 rounded-xl flex items-center">
          <Settings className="mr-3" />
          <Link href="/settings">Settings</Link>
        </li>
        <li className="mb-4 hover:bg-gray-500 p-3 rounded-xl flex items-center">
          <LogOut className="mr-3" />
          <button onClick={() => signOut()}>Sign out</button>
        </li>
      </ul>
    </div>
  );
}
