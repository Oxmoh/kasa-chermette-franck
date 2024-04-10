import React from 'react'
// import { Slide } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css'
import "../style/slider.css";

export default function Slider(product) {
    console.log(product);
    return (
        <div className="slide-container">
        <div key= {product.id}>
            <img src={product.pictures} alt="appartement" />
            </div>
            
            {/* <Slide> */}
                {/* {images.map((pictures, index) => (
                    <div key={index}>
                        <div style={{ ...divStyle, 'backgroundImage': `url(${pictures.url})` }}>
                            <span style={spanStyle}>{pictures.caption}</span> */}
                        {/* </div>
                    </div>
                ))} */}
            {/* </Slide> */}
        </div>
    )
}
