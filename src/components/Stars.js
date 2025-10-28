import React, { useEffect, useRef } from "react";
import "./Stars.css";

const Stars = () => {
  const starsRef = useRef(null);

  useEffect(() => {
    const createStar = (size = 'small') => {
      const star = document.createElement("div");
      star.className = `star star-${size}`;
      star.style.left = Math.random() * 100 + "%";
      star.style.top = Math.random() * 100 + "%";
      star.style.animationDelay = Math.random() * 3 + "s";
      star.style.animationDuration = 2 + Math.random() * 3 + "s";

      if (starsRef.current) {
        starsRef.current.appendChild(star);
      }
    };

    // Crear estrellas pequeñas
    for (let i = 0; i < 40; i++) {
      createStar('small');
    }
    
    // Crear estrellas medianas
    for (let i = 0; i < 20; i++) {
      createStar('medium');
    }
    
    // Crear estrellas grandes
    for (let i = 0; i < 10; i++) {
      createStar('large');
    }
  }, []);

  return <div className="stars-container" ref={starsRef}></div>;
};

export default Stars;
