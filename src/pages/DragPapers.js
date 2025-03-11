import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/dragpapers.css";

const DragPapers = () => {
  const navigate = useNavigate();

  useEffect(() => {
    let highestZ = 1;
    document.querySelectorAll(".paper").forEach((paper) => {
        let holdingPaper = false;
        let offsetX = 0, offsetY = 0;
        let rotation = Math.random() * 30 - 15;
      
        paper.style.position = "absolute"; // ✅ Ensure absolute positioning
        paper.style.transform = `rotateZ(${rotation}deg)`;
      
    paper.addEventListener("mousedown", (e) => {
        holdingPaper = true;
        paper.style.zIndex = highestZ++;

        offsetX = e.clientX - paper.offsetLeft;
        offsetY = e.clientY - paper.offsetTop;
        
        e.preventDefault(); 
    });
    
    document.addEventListener("mousemove", (e) => {
        if (holdingPaper) {
        paper.style.left = `${e.clientX - offsetX}px`;
        paper.style.top = `${e.clientY - offsetY}px`;
        }
    });
    
    document.addEventListener("mouseup", () => {
        holdingPaper = false;
    });
    });
    
  }, []);

  return (
    <div className="drag-container">
      <h1 className="title">drag the paper!</h1>

      <div className="paper-container">
        <div className="paper heart"></div>

        <div className="paper image">
          <p> words </p>
          <p> </p>
          <img src="" alt="Image 1" />
        </div>

        <div className="paper image">
          <p> words</p>
          <p> </p>
          <img src="" alt="Image 2" />

        </div>

        <div className="paper image">
          <p> words </p>
          <p> </p>
          <img src="" alt="Image 3" />

        </div>

        <div className="paper image">
          <p> words</p>
          <p> </p>
          <img src="" alt="Image 4" />

        </div>

        <div className="paper red">
          <p className="p1">words</p>
          <p className="p2"></p>
        </div>

        <div className="paper">
          <p className="p1"></p>
          <p className="p1"><span style={{ color: "red" }}>❤️</span></p>
        </div>

        <div className="paper">
          <p className="p1"></p>
        </div>
      </div>

      {/* Back Button to Home */}
      <button
        className="back-button"
        onClick={() => {
          sessionStorage.setItem("comingBack", "true"); // Keep Home state
          navigate("/");
        }}
      >
        ← Back to Home
      </button>
    </div>
  );
};

export default DragPapers;
