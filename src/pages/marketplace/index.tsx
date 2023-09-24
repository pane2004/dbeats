import NFTmarket from "@/components/NFTmarket";
import { Menu } from "@/components/menu";

export default function Marketplace() {
  return (
    <div className="min-h-screen flex">
      <Menu />
      <NFTmarket />
    </div>
  );
}