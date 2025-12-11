import React, { useState } from "react";
import "./Middle.css";

export default function Middle() {
  const defaultImage = "assets/pictures/Gemini_Generated_Image_viqchtviqchtviqc(1).png";
  const hoverImage = "assets/pictures/transparent_output(1).png";

  const [imageSrc, setImageSrc] = useState(defaultImage);

  const swapImage = (isHover) => {
    setImageSrc(isHover ? hoverImage : defaultImage);
  };

  return (
    <div className="mid">
      <div className="container">
        <div className="visual-side">
          <div className="skewed-square"></div>

          <img
            src={imageSrc}
            alt="Photo of Me"
            className="overlapping-image"
            onMouseEnter={() => swapImage(true)}
            onMouseLeave={() => swapImage(false)}
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
