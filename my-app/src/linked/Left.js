import React from 'react';
import "./Left.css";
import profile from '../images/profile.png';
import drop from '../images/logo.png';
import img1 from '../images/leftone.png'
import img2 from '../images/lefttwo.png'
import img3 from '../images/leftthree.png'
import img4 from '../images/leftfoure.png'
import img5 from '../images/leftfive.png'
import img6 from '../images/leftsix.png'


export default function Left () {
    return (
        <div className="left-side">
        
            <nav >
                <div className="logo">
                  <a href="/">
                      <img src={drop} />
                  </a>
                </div>
                <div className="list">
                    <img src={profile} />
                </div>
                <div className="list">
                    <a href="#"><img src={img1}/></a>
                </div>
                <div className="list smoller">
                    <a href="#"><img src={img2}/></a>
                </div>
                <div className="list smoller">
                    <a href="#"><img src={img3}/></a>
                </div>
                <div className="list smoller">
                <a href="#"><img src={img4}/></a>
                </div>
                <div className="list" >
                <a href="#"><img src={img5}/></a>
                </div>
                <div className="list" >
                <a href="#"><img src={img6}/></a>
                </div>

            </nav>
                
        </div>
    )
}