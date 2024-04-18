import React from 'react'
import "../style/starsrating.css"

export default function StarsRating({ rating }) {
    const totalStars = 5;
    let stars = [];
  
    // Composition des étoiles  en fonction de la note récupérée dans le fichier json
  
    for (let i = 1; i <= totalStars; i++) {
      if (i <= rating) {
        stars.push(<img src={activeStar} alt="active star" key={i} />);
      } else {
        stars.push(<img src={inactiveStar} alt="inactive star" key={i} />);
      }
    }
  
    return <div className="star">{stars}</div>;
  };
