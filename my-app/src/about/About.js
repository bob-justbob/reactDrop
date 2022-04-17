import { lightBlue } from "@material-ui/core/colors";
import React from "react";
import Head from "../header/Head";
import aboutImg from "../images/aboutImg.JPG"
import aboutImgTwo from "../images/aboutImgTwo.JPG"
import Footer from "../footer/Footer"
import './About.css';



export default function About () {
    return (
        <div className="about">
            <Head  />
            <div className="aboutBanner">
                <div className="aboutText">
                    <h2>THIS IS WHO WE ARE</h2>
                    <p>A COMPANY THAT'S PASSIONATE ABOUT ECOMMERCE & BUILDING RELATIONSHIPS</p>
                </div>
            </div>
            <div className="aboutSecOne" >
                <div className="secOneImage">
                    <img src={aboutImg}/>
                </div>
                <div className="secOnetext">
                    <h2>Out Story</h2>
                    <div>
                    <p>After years of learning and studying the e-Commerce industry, we combined all our knowledge and experience and established 365DROPSHIP to help you create revenue from sales online. We studied how to create a great online store, how to market across the Internet, manage affiliate programs and deal with credit card companies so you don’t have to. We sourced and built long-term relationships with reliable suppliers around the world, which you can now tap into All this knowledge and experience gives us the ability to help you start, manage, and enjoy a lasting, profitable presence online.We offer an excellent solution for people with existing stores anywhere online and those of you looking to break into the e-Commerce market.</p>
                    </div>
                    <a>contact us</a>
                </div>
            </div>
            <div className="aboutSecTwo">
                <div className="secTwoText">
                    <h2>365DROPSHIP Means:</h2>
                    <div>
                    <p>At 365DROPSHIP, we help you showcase your products through our online business partners across the globe, increase your order volumes, and ultimately grow your business. Apart from connecting you with our worldwide partners, we also make it easy to sell your products with us.Here’s what we can offer you as a supplier:Free, no obligation to Sign Up – We won’t charge you a thing when you start selling your products with us.Add as many products as you can – There are no limits to how many products you want to add to our network. Whether you’re selling a niche collection or distributing bulk orders, you’ll find customers with 365DROPSHIP.API integration – With our cutting-edge API, we’ll help you inform your customers about item availability and new products in real-time. This way, your customers get updated information about your products.</p>
                    </div>
                    <a href="#">be a supplier</a>
                </div>
                <div className="secTwoImage">
                    <img src={aboutImgTwo}/>
                </div>
            </div>
            <Footer />

        </div>
    )
}