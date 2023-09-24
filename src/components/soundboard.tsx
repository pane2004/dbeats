import React from 'react';

const soundButtonStyle: React.CSSProperties = {
    width: '100px',
    height: '100px',
    margin: '10px',
    borderRadius: '50%',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    cursor: 'pointer'
};

const soundboardStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#111',
    borderRadius: '10px'
};

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
        <button onClick={playSound} style={soundButtonStyle} className="sound-button">
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
        <div style={soundboardStyle} className="soundboard">
            {sounds.map((sound, index) => (
                <SoundButton key={index} url={sound.url} label={sound.label} />
            ))}
        </div>
    );
};

export default SoundBoard;