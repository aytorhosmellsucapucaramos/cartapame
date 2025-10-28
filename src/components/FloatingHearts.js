import React, { useEffect, useState } from "react";
import "./FloatingHearts.css";

const FloatingHearts = ({ isActive }) => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        const newHeart = {
          id: Date.now() + Math.random(),
          left: Math.random() * 100,
          delay: Math.random() * 2,
          duration: 3 + Math.random() * 2,
          size: 20 + Math.random() * 30,
          emoji: ["❤️", "💕", "💖", "💗", "💝", "💘"][
            Math.floor(Math.random() * 6)
          ],
        };

        setHearts((prev) => [...prev, newHeart]);

        setTimeout(() => {
          setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
        }, (newHeart.duration + newHeart.delay) * 1000);
      }, 300);

      setTimeout(() => {
        clearInterval(interval);
      }, 5000);
    } else {
      const backgroundInterval = setInterval(() => {
        const newHeart = {
          id: Date.now() + Math.random(),
          left: Math.random() * 100,
          delay: Math.random(),
          duration: 4 + Math.random() * 2,
          size: 20 + Math.random() * 20,
          emoji: ["❤️", "💕"][Math.floor(Math.random() * 2)],
        };

        setHearts((prev) => [...prev, newHeart]);

        setTimeout(() => {
          setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
        }, (newHeart.duration + newHeart.delay) * 1000);
      }, 2000);

      return () => clearInterval(backgroundInterval);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <div className="floating-hearts-container">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="floating-heart"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
          }}
        >
          {heart.emoji}
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
