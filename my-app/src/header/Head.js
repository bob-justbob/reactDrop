import React from "react";
import "./Head.css";
import Logo from "../images/logo.png"
// import { useNavigate } from 'react-router-dom';
// import React,{useState} from 'react';
import {Link} from 'react-router-dom'


export default function Head () {
    // const history = useNavigate();
    // const go = ()=> {

    //     history.push("/Linked")
    // }

    return (
        <header>
            <div className="hed">
                <div className="left">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="right">
                    <nav>
                        <ul>
                       
                            <li>

                                <Link to="/">
                                   about
                                </Link>
                            </li>
                            <li > 
                                <Link to="/Linked">
                                     catalog 
                                 </Link>
                            </li>
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