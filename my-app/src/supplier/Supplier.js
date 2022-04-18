import React from "react";
import Head from "../header/Head";
import '../supplier/Supplier.css'


export default function Supplier () {
    return (
        <div className="supllier">
            <Head />
            <div className="supllierBanner">
                <div className="supplier-banner-img">
                    <img src="https://365dropship.com/wp-content/uploads/2020/06/shutterstock-1639064593-copy.jpg?id=156725" />
                </div>
                <div className="suplier-banner-text">
                    <h2>BECOME ONE OF OUR TRUSTEDDROPSHIP SUPPLIERS</h2>
                    <p>DISPLAY YOUR PRODUCTS TO THOUSANDS OF BUSINESSES AND INCREASE YOUR ORDER VOLUME</p>
                </div>
            </div>
        </div>
    )
}