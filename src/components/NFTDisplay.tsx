// src/components/NFTDisplay.tsx

import { NFTS } from "@/constants/constants";
import React from "react";

const NFTDisplay: React.FC = () => {
  return (
    <div className="w-5/6 bg-gray-800 max-h-screen p-12 overflow-auto">
      {/* Header Section */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold mb-4 text-white">
          Welcome to your dBeats Dashboard
        </h1>
        <p className="text-gray-300">
          Find unique beats and sounds for your mixes!
        </p>
      </header>

      {/* Categories Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-white">Categories:</h2>
        <div className="flex space-x-6">
          <button className="py-2 px-4 bg-blue-500 text-white rounded-full hover:bg-blue-600">
            Popular
          </button>
          <button className="py-2 px-4 bg-blue-500 text-white rounded-full hover:bg-blue-600">
            Trap Beats
          </button>
          <button className="py-2 px-4 bg-blue-500 text-white rounded-full hover:bg-blue-600">
            EDM Effects
          </button>
          {/* Add more categories as needed */}
        </div>
      </section>

      {/* NFTs Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {NFTS.map((nft, index) => (
          <div key={index} className="bg-gray-700 p-6 rounded-xl shadow-md">
            {/* NFT Title */}
            <h2 className="text-xl mb-3 line-clamp-2 text-white">
              {nft.title}
            </h2>
            <img
              src={nft.imageUrl}
              alt={nft.title}
              className="w-full h-56 object-cover rounded-md mb-4"
            />
            <audio controls className="w-full mt-4">
              <source src={nft.audioUrl} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        ))}
      </section>
    </div>
  );
};

export default NFTDisplay;
