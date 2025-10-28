import React, { useState } from "react";
import "./App.css";
import Envelope from "./components/Envelope";
import Letter from "./components/Letter";
import FloatingHearts from "./components/FloatingHearts";
import Stars from "./components/Stars";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const handleOpenLetter = () => {
    setIsOpen(true);
    setShowButton(false);
  };

  return (
    <div className="App">
      <Stars />
      <FloatingHearts isActive={isOpen} />

      <div className="container">
        <div className="envelope-wrapper">
          <Envelope isOpen={isOpen} />
          <Letter isOpen={isOpen} />
        </div>

        {showButton && (
          <button className="open-button" onClick={handleOpenLetter}>
            Abrir carta ❤️
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
