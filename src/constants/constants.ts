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
    imageUrl: "https://images.unsplash.com/photo-1586672806791-3a67d24186c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y292ZXIlMjBhcnR8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    price: Math.random(),
  },
  {
    title: "Track 3",
    imageUrl: "https://images.unsplash.com/photo-1586672806791-3a67d24186c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y292ZXIlMjBhcnR8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    price: Math.random(),
  },
  {
    title: "Track 4",
    imageUrl: "https://images.unsplash.com/photo-1586672806791-3a67d24186c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y292ZXIlMjBhcnR8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    price: Math.random(),
  },
  {
    title: "Track 5",
    imageUrl: "https://images.unsplash.com/photo-1586672806791-3a67d24186c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y292ZXIlMjBhcnR8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    price: Math.random(),
  },
  {
    title: "Track 6",
    imageUrl: "https://images.unsplash.com/photo-1586672806791-3a67d24186c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y292ZXIlMjBhcnR8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
    price: Math.random(),
  },
];
