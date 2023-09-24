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
      {/* Main Content */}
      <div className="w-5/6 bg-gray-800 p-6">
        {/* Here you can include the components or content for the Dashboard, Marketplace, Soundboard */}
        <h2 className="text-2xl font-bold mb-4">Browse Music NFTs</h2>
        {/* Example of NFT cards. You can map through your NFT data to render them */}
        <div className="grid grid-cols-3 gap-4">
          {/* NFT Card */}
          <div className="bg-white p-4 rounded shadow">
            <img
              src="/path/to/nft.jpg"
              alt="NFT name"
              className="rounded mb-2"
            />
            <h3 className="text-lg font-semibold">NFT Name</h3>
            <p className="text-gray-600">Artist Name</p>
          </div>
          {/* ... more NFT cards */}
        </div>
      </div>
    </div>
  );
}
