export const TEST_SESSION = {
  id: "wallet address",
  name: "Alex Lu",
};

export const SOUNDS = [
  {
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    label: "Sound 1",
    address: "0x0...",
  },
  {
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    label: "Sound 2",
    address: "0x0...",
  },
  {
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    label: "Sound 3",
    address: "0x0...",
  },
  {
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    label: "Sound 4",
    address: "0x0...",
  },
  {
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    label: "Sound 5",
    address: "0x0...",
  },
  {
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
    label: "Sound 6",
    address: "0x0...",
  },
  {
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
    label: "Sound 7",
    address: "0x0...",
  },
  {
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
    label: "Sound 8",
    address: "0x0...",
  },
  // ... add more sounds
];
export interface NFT {
  title: string;
  imageUrl: string;
  audioUrl: string;
  price: number;
}

export const NFTS: NFT[] = [
  {
    title: "Track 1",
    imageUrl: "https://images.unsplash.com/photo-1586672806791-3a67d24186c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y292ZXIlMjBhcnR8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    price: Math.random(),
  },
  {
    title: "Track 2",
    imageUrl: "https://images.unsplash.com/photo-1597557316084-d7f32839141e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3542&q=80",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    price: Math.random(),
  },
  {
    title: "Track 3",
    imageUrl: "https://images.unsplash.com/photo-1680417264976-6667e357fb47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    price: Math.random(),
  },
  {
    title: "Track 4",
    imageUrl: "https://images.unsplash.com/photo-1680417265121-9b4bba3553b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    price: Math.random(),
  },
  {
    title: "Track 5",
    imageUrl: "https://images.unsplash.com/photo-1674979257021-50fe803672a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3000&q=80",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    price: Math.random(),
  },
  {
    title: "Track 6",
    imageUrl: "https://images.unsplash.com/photo-1674371602318-5ee3e7ba28f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
    price: Math.random(),
  },
];
