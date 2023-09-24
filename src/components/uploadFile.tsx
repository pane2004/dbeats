import React, { useState } from 'react';
import styled from '@emotion/styled';
import { storeAsset } from '../../NFT-creation/scripts/store-asset.mjs';
import { mintNFT } from '../../NFT-creation/scripts/mint-nft.mjs';
import { deployContract } from '../../NFT-creation/scripts/deploy-contract.mjs';

const Container = styled.div`
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 400px;
    margin: 0 auto;
`;

const InputField = styled.input`
    margin-bottom: 20px;
`;

const Label = styled.label`
    display: block;
    margin-bottom: 10px;
`;

const Button = styled.button`
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: #0056b3;
    }
`;

const FileUploadComponent: React.FC = () => {
    const [mp3File, setMp3File] = useState<File | null>(null);
    const [pngFile, setPngFile] = useState<File | null>(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ mp3File, pngFile, title, description });
        storeAsset(mp3File, pngFile, title, description);
        deployContract();
        mintNFT();
        // You can handle the submission here, e.g., send it to a server.
    };

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <form onSubmit={handleSubmit} className="bg-white p-10 rounded-lg shadow-xl max-w-xl">
                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">Title:</label>
                    <input 
                        id="title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        className="p-2 w-full border rounded-md"
                    />
                </div>
    
                <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">Description:</label>
                    <input 
                        id="description"
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        className="p-2 w-full border rounded-md"
                    />
                </div>
    
                <div className="mb-4">
                    <label htmlFor="mp3" className="block text-sm font-medium text-gray-700 mb-2">Upload an MP3:</label>
                    <input 
                        id="mp3"
                        type="file"
                        accept=".mp3"
                        onChange={(e) => setMp3File(e.target.files ? e.target.files[0] : null)}
                        required
                        className="p-2 w-full border rounded-md"
                    />
                </div>
    
                <div className="mb-4">
                    <label htmlFor="png" className="block text-sm font-medium text-gray-700 mb-2">Upload a PNG:</label>
                    <input 
                        id="png"
                        type="file"
                        accept=".png"
                        onChange={(e) => setPngFile(e.target.files ? e.target.files[0] : null)}
                        required
                        className="p-2 w-full border rounded-md"
                    />
                </div>
    
                <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-md transition duration-300">
                    Submit
                </button>
            </form>
        </div>
    );
    
};

export default FileUploadComponent;
