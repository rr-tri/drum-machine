import React from "react";

function DrumPad(props) {
  const { id, src, keyTrigger, onClick,  playAudio } = props;
 
  //   console.log('isoN', isOn)
  const handleButtonClick = () => {
    playAudio(keyTrigger);
    onClick(keyTrigger);
  };
  return (
    
      <div className={`drum-pad `} id={id} onClick={handleButtonClick}>
        {keyTrigger}
        <audio id={keyTrigger} className="clip" src={src}></audio>
      </div>
    
  );
}

export default DrumPad;
