// src/components/NFTDisplay.tsx

import React from 'react';

interface NFT {
    title: string;
    imageUrl: string;
    audioUrl: string;
}

const nfts: NFT[] = [
    {
        title: "Artwork 1",
        imageUrl: "https://path-to-your-image1.jpg",
        audioUrl: "https://path-to-your-audio1.mp3"
    },
    {
        title: "Artwork 2",
        imageUrl: "https://path-to-your-image2.jpg",
        audioUrl: "https://path-to-your-audio2.mp3"
    }
    // Add more hardcoded NFTs as needed
];

const NFTDisplay: React.FC = () => {
    return (
        <div>
            {nfts.map((nft, index) => (
                <div key={index} style={{ margin: '20px', padding: '20px', border: '1px solid #e0e0e0', borderRadius: '8px' }}>
                    <img src={nft.imageUrl} alt={nft.title} style={{ maxWidth: '300px', borderRadius: '8px' }} />
                    <audio controls style={{ marginTop: '10px' }}>
                        <source src={nft.audioUrl} type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                </div>
            ))}
        </div>
    );
};

export default NFTDisplay;