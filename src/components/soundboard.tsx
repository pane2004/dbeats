import { SOUNDS } from "@/constants/constants";
import React, { useEffect, useState } from "react";

interface SoundButtonProps {
  url: string;
  label: string;
  address: string;
}

const useAudio = (url: string) => {
  const [audio, setAudio] = useState<any>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    setAudio(new Audio(url));
  }, [url]);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    if (audio) {
      playing ? audio.play() : audio.pause();
    }
  }, [playing, audio]);

  useEffect(() => {
    const handleAudioEnd = () => setPlaying(false);

    if (audio) {
      audio.addEventListener("ended", handleAudioEnd);
      return () => {
        audio.removeEventListener("ended", handleAudioEnd);
      };
    }
  }, [audio]);

  return [playing, toggle];
};

const SoundButton: React.FC<SoundButtonProps> = ({ url, label, address }) => {
  const [playing, toggle] = useAudio(url);
  const [showAddress, setShowAddress] = useState(false);

  return (
    <button 
      onMouseEnter={() => setShowAddress(true)}
      onMouseLeave={() => setShowAddress(false)}
      onClick={toggle} 
      className={`sound-button p-4 rounded-full shadow-lg text-white font-bold text-lg focus:outline-none 
        ${playing ? 'bg-green-500' : 'bg-gray-700 hover:bg-gray-600'}`}
    >
      {showAddress ? address : label}
    </button>
  );
};

const SoundBoard: React.FC = () => {
  return (
    <div className="soundboard p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-gray-900 rounded-xl shadow-xl">
      {SOUNDS.map((sound) => (
        <SoundButton key={sound.label} url={sound.url} label={sound.label} address={sound.address} />
      ))}
    </div>
  );
};

export default SoundBoard;