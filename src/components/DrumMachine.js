import React, { useState, useRef } from "react";
import DrumPad from "./DrumPad";
const drumPadsData = [
  {
    id: "Heater-1",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    keyTrigger: "Q",
    displayText: "Heater 1",
  },
  {
    id: "Heater-2",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    keyTrigger: "W",
    displayText: "Heater 2",
  },
  {
    id: "Heater-3",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    keyTrigger: "E",
    displayText: "Heater 3",
  },
  {
    id: "Heater-4",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    keyTrigger: "A",
    displayText: "Heater 4",
  },
  {
    id: "Clap",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    keyTrigger: "S",
    displayText: "Clap",
  },
  {
    id: "Open-HH",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    keyTrigger: "D",
    displayText: "Open HH",
  },
  {
    id: "Kick-n-Hat",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    keyTrigger: "Z",
    displayText: "Kick-n-Hat",
  },
  {
    id: "Kick",
    src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    keyTrigger: "X",
    displayText: "Kick",
  },
  {
    id: "Closed-HH",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    keyTrigger: "C",
    displayText: "Closed HH",
  },
];

function DrumMachine() {
  const [displayText, setDisplayText] = useState("");
  const [volume, setVolume] = useState(0.5); // Initial volume set to 50%
 

  const handlePadClick = (audioId) => {
    const drumPad = drumPadsData.find((pad) => pad.keyTrigger === audioId);
    if (drumPad) {
      setDisplayText(drumPad.displayText);
    
    }
  };
  const keyPressHandler = useRef(null);
  
  const handleVolumeChange = (event) => {
    const newVolume = event.target.value;
    setVolume(newVolume);
    const audioElements = document.querySelectorAll(".clip");
    audioElements.forEach((audio) => {
      audio.volume = newVolume;
    });
  };

  // produce sound without delay when the same key is pressed successively and quickly
  const playAudio = (audioId) => {
    const audioElement = document.getElementById(audioId);
    audioElement.currentTime = 0; // Reset audio to start
    audioElement.play();
  };
  React.useEffect(() => {
    const handleKeyPress = (event) => {
        const keyTrigger = event.key.toUpperCase();
        const drumPad = drumPadsData.find((pad) => pad.keyTrigger === keyTrigger);
        if (drumPad) {
          playAudio(keyTrigger);
          setDisplayText(drumPad.displayText);
         
        }
      };
    // Set the ref to the keydown event listener
    keyPressHandler.current = handleKeyPress;
    window.addEventListener('keydown', keyPressHandler.current);
    return () => {
      window.removeEventListener('keydown', keyPressHandler.current);
    };
  }, []);
  return (
    <div id="drum-machine">
      <div id="display">{displayText}</div>
      <div className="drum-pads">
        {drumPadsData.map((pad) => (
          <DrumPad
            key={pad.id}
            id={pad.id}
            src={pad.src}
            keyTrigger={pad.keyTrigger}
            onClick={handlePadClick}
            playAudio={playAudio}
            
          />
        ))}
      </div>
        <div className="volume-slider">
          <label htmlFor="volume">Volume:</label>
          <input
            type="range"
            id="volume"
            name="volume"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
          />
        </div>
    </div>
  );
}

export default DrumMachine;
