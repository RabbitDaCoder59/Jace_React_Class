import React from "react";
import image from "../assets/vinicius-amnx-amano-OHPdgstNFGs-unsplash.jpg";
import video from "../assets/ocean-65560.mp4";
import "./LessonThree.css";

const LessonThree = () => {
  console.log({ image });
  return (
    <div>
      <h1>My Image From React</h1>

      {/* Adding Normal Image */}
      {/* <img src={image} width={400} height={500} alt="MyImg" /> */}
      {/* Adding BG Image */}
      <div className="BG" style={{ backgroundImage: `url(${image})` }}></div>
      {/* Adding Icons */}
    </div>
  );
};

export default LessonThree;
