import React from "react";
import './Banner.css';



export default function Banner () {
    return (
        <div className="banner">
            <div className="banner-content">
                <div className="content-img">
                    <img src="https://www.365dropship.com/wp-content/uploads/2020/06/356Logo.svg" alt="banner img" />
                </div>
                <div className="content-text">
                    <h4>WE GOT YOUR SUPPLY CHAIN COVERED</h4>
                    <h4 className="padding-bot">365 DAYS A YEAR!</h4>
                </div>
            </div>
            <div className="banner-sign">
                <a href="#">sign up here</a>
            </div>

        </div>
    )
} 