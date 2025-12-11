import React, { useState } from "react";
import "./Middle.css";

// ⭐ Import images so Vite rewrites URLs correctly
import defaultImage from "/assets/pictures/Gemini_Generated_Image_viqchtviqchtviqc(1).png";
import hoverImage from "/assets/pictures/transparent_output(1).png";

export default function Middle() {
  const [imageSrc, setImageSrc] = useState(defaultImage);

  return (
    <div className="mid">
      <div className="container">
        <div className="visual-side">
          <div className="skewed-square"></div>

          <img
            src={imageSrc}
            alt="Photo of Me"
            className="overlapping-image"
            onMouseEnter={() => setImageSrc(hoverImage)}
            onMouseLeave={() => setImageSrc(defaultImage)}
          />
        </div>

        <div className="text-side">
          <div className="text-container">
            <p className="text">
              Hi! I build websites and analyze data — part coder, part data nerd, 100% curious.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
