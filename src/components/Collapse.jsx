import React from 'react'
import { useState } from 'react'
import "../style/collapse.css"

export default function Collapse({ title, txt}) {

    const [isOpen, setIsOpen] = useState(false);
    const toggleCollapse = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="collapse-container">
        <div className="collapse-title">
          <h3>{title}</h3>
          <div className="collapse-icon">
            <img
              className={isOpen ? "rotate" : ""}
              src={arrow}
              alt="menu collapse"
              onClick={toggleCollapse}
            />
          </div>
        </div>
        <div className="content-wrapper">
          <div className={`collapse-content ${isOpen ? "open" : ""}`}>
            <p>{txt}</p>
          </div>
        </div>
      </div>
    );
  }
