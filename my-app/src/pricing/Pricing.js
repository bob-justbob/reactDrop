import React  from "react";
import Head from "../header/Head";
import "../pricing/Pricing.css"
import priceBanner from "../images/pricebanner.png"

export default function Pricing () {
    return (
        <div className="pricing">
        <Head /> 
        <div className="pricingBanner">
            <div className="pricingBannerImg">
                <img src={priceBanner} />
            </div>
            <div className="pricingBannerText">
                <h2>FIND THE RIGHT DROPSHIPPING PLAN FOR YOUR BUSINESS</h2>
                <p>ENJOY HIGH REVENUES BY FOCUSING ON WHAT YOU DO BEST. LET US WORRY ABOUT THE REST</p>
            </div>
        </div>
        </div>
    )
}