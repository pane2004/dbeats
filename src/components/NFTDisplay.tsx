// src/components/NFTDisplay.tsx

import { NFTS } from '@/constants/constants';
import React from 'react';

const NFTDisplay: React.FC = () => {
    return (
        <div>
            {NFTS.map((nft, index) => (
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