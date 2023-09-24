import { signOut, useSession } from "next-auth/react";
import { TEST_SESSION } from "../../constants/constants";
import { Home, ShoppingCart, Music, LogOut, Settings, Feather } from "react-feather";
import { useRouter } from "next/router";
import Link from "next/link";
import { Menu } from "@/components/menu";
import NFTDisplay from "@/components/NFTDisplay";

export default function Dashboard() {
  const { data: session } = useSession();
  const router = useRouter();
  if (!session && false) {
    return <>Access Denied. Please log in.</>;
  }
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <Menu/>
      <NFTDisplay />
    </div>
  );
}
