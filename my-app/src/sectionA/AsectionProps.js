import React from "react";

import "./AsectionProps.css"


export default function( {img, header, texts}) {
    return (
        <div className="porps">
            <div className="props-left">
                <img src={img} alt="" />
            </div>
            <div className="props-right">
                <h2>{header}</h2>
                <p>{texts}</p>
            </div>

        </div>
    )
}