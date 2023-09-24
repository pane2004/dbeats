import React from 'react';

interface SoundButtonProps {
    url: string;
    label: string;
}

const SoundButton: React.FC<SoundButtonProps> = ({ url, label }) => {
    const playSound = () => {
        const audio = new Audio(url);
        audio.play();
    };

    return (
        <button onClick={playSound} className="sound-button">
            {label}
        </button>
    );
};

const SoundBoard: React.FC = () => {
    const sounds = [
        { url: 'https://path-to-sound1.mp3', label: 'Sound 1' },
        { url: 'https://path-to-sound2.mp3', label: 'Sound 2' },
        // ... add more sounds
    ];

    return (
        <div className="soundboard">
            {sounds.map((sound, index) => (
                <SoundButton key={index} url={sound.url} label={sound.label} />
            ))}
        </div>
    );
};

export default SoundBoard;