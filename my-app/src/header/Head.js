import React from "react";
import "./Head.css";
import Logo from "../images/logo.png"


export default function Head () {
    return (
        <header>
            <div className="hed">
                <div className="left">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="right">
                    <nav>
                        <ul>
                            <li>about</li>
                            <li>catalog</li>
                            <li>pricing</li>
                            <li>supplier</li>
                            <li>helpcenter</li>
                            <li>blog</li>
                        </ul>
                    </nav>
                    <div className="sign">
                        <div>
                          <a href="#">sign up now</a>
                        </div>
                    </div>
                    <div className="face">
                        <div>
                        <a href="#">loging</a>
                        </div>
                    </div>
                    <div className="facebooklogo">
                        <img src="https://bob-justbob.github.io/364Dropship/image/facebook.svg" alt="" />
                    </div>
                </div>
            </div>
            
        </header>
    )
}