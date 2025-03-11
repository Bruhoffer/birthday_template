import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/birthdayvideo.css";

const BirthdayVideo = () => {
  const navigate = useNavigate();

  return (
    <div className="video-container">
      <h1>🎥 Happy Birthday, XXX! 🎥</h1>
      <p>Here’s a special video just for you!</p>

      <iframe
        width="600"
        height="400"
        src=""
        title="Birthday Video for XXX"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>


      <br />
      <br />

      <button
        className="back-button"
        onClick={() => {
          sessionStorage.setItem("comingBack", "true"); // ✅ Keep Home state
          navigate("/");
        }}
      >
        ← Back to Home
      </button>
    </div>
  );
};

export default BirthdayVideo;
