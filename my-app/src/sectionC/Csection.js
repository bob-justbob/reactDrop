import React from "react";
import './Csection.css';
import CsectionProps from "./CsectionProps";
import hand from "../images/hand.svg"

export default function () {
    return (
        <div className="sectionC">
            <div className="c-text">
                <h2>BENEFITS</h2>
                <p>Easily sync dropship products into your online shop.</p>
                <p>Manage your process manually or automatically, exporting all product details</p>
            </div>
            <div className="c-image">
                <CsectionProps  image={hand} header={'Only one point of contact'} texts={"365 DROPSHIP will take care of the supply chain, no need to talk to hundreds of different suppliers, just choose the products and we will take care of the rest!"}/>
                <CsectionProps  image={hand} header={'Unique international suppliers'} texts={"365 DROPSHIP will take care of the supply chain, no need to talk to hundreds of different suppliers, just choose the products and we will take care of the rest!"}/>
                <CsectionProps  image={hand} header={'Profit %'} texts={"365 DROPSHIP will take care of the supply chain, no need to talk to hundreds of different suppliers, just choose the products and we will take care of the rest!"}/>
                <CsectionProps  image={hand} header={'Most advanced UI'} texts={"365 DROPSHIP will take care of the supply chain, no need to talk to hundreds of different suppliers, just choose the products and we will take care of the rest!"}/>
            </div>
        </div>
    )
}