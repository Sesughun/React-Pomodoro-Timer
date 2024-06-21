import React from "react";
import H5AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css"; // Import CSS for default styling

const AudioPlayerss = () => {
  return (
    <div>
      <br></br>

      <H5AudioPlayer
        autoPlay={false}
        src="/music.mp4"
        onPlay={(e) => console.log("onPlay")}
        onPause={(e) => console.log("onPause")}
        onEnded={(e) => console.log("onEnded")}
        volume={0.3}
        loop={false}
        progressJumpStep={5000}
        style={{
          maxWidth: "1900px",
          backgroundColor: "lightblue",
          maxHeight: "900px",
          border: "none",
        }}
      />
    </div>
  );
};

export default AudioPlayerss;
