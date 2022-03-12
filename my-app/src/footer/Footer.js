import React from "react";
import './Footer.css'


export default function() {
    return (
        <div className="footer">
            <div className="footer-one">
                <div className="footer-img">
                 <img src="https://www.365dropship.com/wp-content/uploads/2020/06/logo.png" alt="" />
                </div>
                <div className="footer-text">
                 <p> 365DropShip is a wholesale drop shipping business that provides products and order fulfillment.</p>
                </div>
            </div>
            <div className="footertwo padd">
                <ul>
                    <h2>Dropship Products</h2>
                    <li>Home & Design</li>
                    <li>Fashion</li>
                    <li>Jewelry</li>
                    <li>Beauty</li>
                </ul>
            </div>
            <div className="footerthree padd">
                <ul>
                      <h2>ABOUT</h2>

                    <li>Dropship Suppliers</li>
                    <li>Company</li>
                    <li>Pricing</li>
                    <li>Contact Us</li>
                </ul>

            </div>
            <div className="footerfour padd">
                <ul>
                  <h2>SUPPORT</h2>

                    <li>Help Center</li>
                    <li>Terms of Service</li>
                    <li>Privacy Policy</li>
                </ul>

            </div>
        </div>
    )
}