import { lightBlue } from "@material-ui/core/colors";
import React from "react";
import Head from "../header/Head";
import one from "../images/aboutImg.JPG"
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
                    <img src={one}/>
                </div>
                <div className="secOnetext">
                    <h2>Out Story</h2>
                    <div>
                    <p>After years of learning and studying the e-Commerce industry, we combined all our knowledge and experience and established 365DROPSHIP to help you create revenue from sales online. We studied how to create a great online store, how to market across the Internet, manage affiliate programs and deal with credit card companies so you don’t have to. We sourced and built long-term relationships with reliable suppliers around the world, which you can now tap into All this knowledge and experience gives us the ability to help you start, manage, and enjoy a lasting, profitable presence online.We offer an excellent solution for people with existing stores anywhere online and those of you looking to break into the e-Commerce market.</p>
                    </div>
                    <a>contact us</a>
                </div>
            </div>
        </div>
    )
}