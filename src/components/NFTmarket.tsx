import { NFT, NFTS } from "@/constants/constants";
import React, { useState } from "react";
import { Heart } from "react-feather";

const NFTmarket: React.FC = () => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );

  const handlePurchaseClick = (nft: NFT) => {
    alert(`Purchased ${nft.title}!`);
    setOpenDropdownIndex(null); // Close the dropdown
  };

  return (
    <div className="w-5/6 bg-gray-800 max-h-screen overflow-auto">
      <h1 className="text-3xl text-center font-bold text-white pt-8">Beats Marketplace</h1>
      <div className="grid grid-cols-3 gap-6 p-16">
        {NFTS.map((nft, index) => (
          <div
            key={index}
            className="p-5 border rounded-xl shadow-lg relative bg-gray-700"
          >
            {/* NFT Image */}
            <img
              src={nft.imageUrl}
              alt={nft.title}
              className="max-w-full rounded-lg mb-3 bg-gray-400"
            />

            {/* NFT Title */}
            <h2 className="text-xl mb-3 line-clamp-2 text-white">
              {nft.title}
            </h2>

            {/* Audio Player */}
            <audio controls className="mb-3 w-full">
              <source src={nft.audioUrl} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>

            {/* Purchase Options */}
            <button
              className="text-sm text-blue-500 hover:text-blue-600"
              onClick={() =>
                setOpenDropdownIndex(index === openDropdownIndex ? null : index)
              }
            >
              Purchase Options
            </button>
            {index === openDropdownIndex && (
              <div className="mt-3">
                <button
                  className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600"
                  onClick={() => handlePurchaseClick(nft)}
                >
                  Buy Now for {nft.price} ETH
                </button>
              </div>
            )}

            {/* Heart icon */}
            <button
              className="absolute bottom-3 right-3"
              onClick={() => console.log("hi")}
            >
              <Heart className="text-red-500 hover:text-red-600" size={24} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NFTmarket;
