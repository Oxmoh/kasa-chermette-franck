import React from 'react'
import StarsRating from '../StarsRating';

export default function ProductsHostRating({ appart }) {
    const [firstName, lastName] = appart.host.name.split(" ");

    return (
      <div className="host-rating-container">
        <div className="host">
          <p>
            {firstName}
            <br />
            {lastName}
          </p>
          <img src={appart.host.picture} alt="nom du loueur" />
        </div>
        <div className="ratings-container">
          <StarsRating rating={appart.rating} />
        </div>
      </div>
    );
  }
  
