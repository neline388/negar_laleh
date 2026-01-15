import React from "react";
import "./Works.css";

const base = import.meta.env.BASE_URL;

export default function Works() {
  const projects = [
    {
      title: "Shop",
      image: `${base}assets/pictures/formal.png`,
      link: "https://formal-1.netlify.app/",
    },
    {
      title: "Polaroid",
      image: `${base}assets/pictures/polaroid.png`,
      link: "https://neline388.github.io/polaroid/",
    },
    {
      title: "Gym",
      image: `${base}assets/pictures/Gym.png`,
      link: "https://neline388.github.io/gym/",
    },
  ];

  return (
    <div className="works-page">
      <h1>My Works</h1>
      <div className="works-grid">
        {projects.map((p, i) => (
          <a key={i} href={p.link} target="_blank" rel="noopener noreferrer" className="work-card">
            <img src={p.image} alt={p.title} />
            <p>{p.title}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
