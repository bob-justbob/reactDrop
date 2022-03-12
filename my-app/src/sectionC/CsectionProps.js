import React from "react";
import './CsectionProps.css'


export default function ({image,header, texts} ) {
    return (
        <div className="c-boxes">
            <div className="c-left">
                <img src={image} alt="" />
            </div>
            <div className="c-right">
            <h2>{header}</h2>
            <p>{texts}</p>
            </div>
        </div>
    )
}