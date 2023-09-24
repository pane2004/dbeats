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
        // You can handle the submission here, e.g., send it to a server.
    };

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <Label htmlFor="title">Title:</Label>
                <InputField
                    id="title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />

                <Label htmlFor="description">Description:</Label>
                <InputField
                    id="description"
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />

                <Label htmlFor="mp3">Upload an MP3:</Label>
                <InputField
                    id="mp3"
                    type="file"
                    accept=".mp3"
                    onChange={(e) => setMp3File(e.target.files ? e.target.files[0] : null)}
                    required
                />

                <Label htmlFor="png">Upload a PNG:</Label>
                <InputField
                    id="png"
                    type="file"
                    accept=".png"
                    onChange={(e) => setPngFile(e.target.files ? e.target.files[0] : null)}
                    required
                />

                <Button type="submit">Submit</Button>
            </form>
        </Container>
    );
};

export default FileUploadComponent;
