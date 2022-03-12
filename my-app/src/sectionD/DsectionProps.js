import React from "react";





export default function DsectionProps({img, header}) {
    return (
        <div className="bottom-div">
        <div className="div-top">
            <img src={img} alt="" />
        </div>
        <div className="div-bottom">
            <p>{header}</p>
        </div>
    </div>

    )
}