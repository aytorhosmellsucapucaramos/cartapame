import React from "react";
import "./Letter.css";

const Letter = ({ isOpen }) => {
  return (
    <div className={`letter ${isOpen ? "open" : ""}`}>
      <div className="letter-border"></div>
      <div className="letter-content">
        <div className="letter-header">
          <div className="decorative-line"></div>
          <h1 className="title">
            <span className="title-emoji">✨</span>
            Para la persona más especial
            <span className="title-emoji">✨</span>
          </h1>
          <h2 className="subtitle">Pamela</h2>
          <div className="decorative-line"></div>
        </div>

        <div className="text-content">
          <p className="paragraph">
            <span className="first-letter">E</span>n este universo infinito de
            posibilidades, encontrarte fue como descubrir la estrella más
            brillante en la noche más oscura. Tu presencia ilumina cada rincón
            de mi vida con una luz que jamás imaginé que existiera.
          </p>

          <div className="quote-container">
            <p className="paragraph quote">
              "Cada palabra tuya es como una melodía que mi corazón no puede
              dejar de escuchar, cada sonrisa tuya pinta mi mundo de colores que
              antes no conocía. Eres esa razón por la que los días tienen más
              sentido y las noches son menos frías."
            </p>
          </div>

          <p className="paragraph">
            Quiero que sepas que{" "}
            <span className="highlight">te quiero mucho</span>, con una
            intensidad que va más allá de las palabras. Eres mi inspiración, mi
            alegría, mi refugio y mi hogar. En ti encontré todo lo que no sabía
            que estaba buscando.
          </p>

          <p className="paragraph">
            Gracias por existir, por ser quien eres, por permitirme ser parte de
            tu vida. Eres simplemente{" "}
            <span className="highlight">extraordinaria</span>, y cada día a tu
            lado es un regalo que atesoro en lo más profundo de mi corazón.
          </p>

          <div className="hearts-container">
            <span className="heart">💝</span>
            <span className="heart">💖</span>
            <span className="heart">💗</span>
            <span className="heart">💕</span>
            <span className="heart">💘</span>
          </div>

          <div className="signature-container">
            <p className="signature">
              Con todo mi amor,
              <br />
              <span className="signature-name">Siempre tuyo/a</span>
            </p>
            <div className="signature-hearts">❤️</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Letter;
