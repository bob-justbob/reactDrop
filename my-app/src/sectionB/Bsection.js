import React from "react";
import './Bsection.css'
import BsectionProps from "./BsectionProps";
import pc from '../images/pc.png'
import box from '../images/box.png'
import under from '../images/boxunderphone.png'
import flying from '../images/flyingbox.png'

export default function() {
    return (
        <div className="section_b">
            <div className="b-text">
                <h2>HOW THE DROPSHIP BUSINESS WORKS?</h2>
                <p> Browse and select from our catalog. More than thousands of Dropship products available on various niches.</p>
                <p>365 <strong>DROPSHIP</strong> product catalog covers an extensive selection from some of the world’s best sellers</p>
            </div>
            <div className="b-boxes">
                <BsectionProps  bImage={pc} header={"JOIN US"} text={"Register to 365 DROPSHIP "}/>
                <BsectionProps  bImage={box} header={"FILL YOUR STORE INVENTORY"} text={"Choose, manage and sync products from the catalog directly to your online store"}/>
                <BsectionProps  bImage={under} header={"GET ORDERS"} text={"Choose manual or automatic synchronize between your online store orders and your shopping cart"}/>
                <BsectionProps  bImage={flying} header={"DIRECT SHIPPING"} text={"We will automatically ship your orders directly to your customer"}/>

            </div>
            <div className="b-singup">
                <a href="#">GET STARTED</a>
            </div>
        </div>
    )
}