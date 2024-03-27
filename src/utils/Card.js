import React from 'react'

const Card = ({ title }) => {
    return (
      <li className="card">
        <img
          src={title.pictures.png}
          alt={"logement" + title}
        />
      </li>
    );
  };

  export default Card;