import React from "react";
import './BsectionProps.css';


export default function({bImage,header, text }) {
    return (
        <div className="b-props">
            <div className="b-image">
                <img src={bImage} alt="" />
            </div>
            <div className="b-image-text">
                <h2>{header}</h2>
                <p>{text}</p>
            </div>
        </div>
    )
}