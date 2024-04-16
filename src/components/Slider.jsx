import React, { useState } from "react";
import left from "../image/left-arrow.png";
import right from "../image/right-arrow.png";
import "../style/slider.css";

export default function Slider(products) {
// Index sur l'image actuelle
const [currentIndex, setCurrentIndex] = useState(0);
// Etat pour la transition
const [isFading, setIsFading] = useState(false);

// Affichage des flèches si plus d'une image
const showArrows = products.length > 1;

const handleNext = () => {
  setIsFading(true);
  setTimeout(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    setIsFading(false);
  }, 200);
};

const handlePrev = () => {
  setIsFading(true);
  setTimeout(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + products.length) % products.length
    );
    setIsFading(false);
  }, 200);
};
console.log(products)
return (
  <div className="slide-show-container">
    <div className="slide-show-inner">
      {showArrows && (
        <button
          onClick={handlePrev}
          className="slide-show-arrow slide-show-arrow-left"
        >
          <img src={left} alt="précédent" />
        </button>
      )}
      <img
        src={products[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className={`slide-show-image ${isFading ? "fading" : ""}`}
      />
      {showArrows && (
        <button
          onClick={handleNext}
          className="slide-show-arrow slide-show-arrow-right"
        >
          <img src={right} alt="suivant" />
        </button>
      )}
      <div className="slide-show-index">
        {showArrows && `${currentIndex + 1} / ${products.length}`}
      </div>
    </div>
  </div>
);
}
