import { Menu } from "@/components/menu";
import SoundBoard from "@/components/soundboard";

export default function Soundboard() {
  return (
    <div className="min-h-screen flex">
      <Menu />
      <div className="w-5/6 bg-gray-800 p-6 max-h-screen min-h-screen overflow-x-hidden overflow-y-auto">
        <div className="text-center p-4 mb-10">
        <h1 className="text-3xl font-bold text-white">My Soundboard</h1>
        <p className="text-gray-500">0x9144f659c82Fa8eca42f09eF8062403D8fB22261</p>
        </div>
        <SoundBoard />
      </div>
    </div>
  );
}
