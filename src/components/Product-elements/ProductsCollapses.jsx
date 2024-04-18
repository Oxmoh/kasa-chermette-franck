import React from 'react'
import Collapse from '../Collapse';

export default function ProductsCollapses({ appart }) {
    const equipmentList = appart.equipments.map((equipment, index) => (
        <li key={index}>{equipment}</li>
      ));
    
      return (
        <div className="collapses">
          <div className="description">
            <Collapse
              title={"Description"}
              txt={appart.description}
              arrowUp={"/arrow-up.png"}
            />
          </div>
          <div className="equipments">
            <Collapse
              title={"Équipements"}
              txt={equipmentList}
              arrowUp={"/arrow-up.png"}
            />
          </div>
        </div>
      );
    }
