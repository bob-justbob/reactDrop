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
            <div className="procingSec">
                <div className="priceArea">
                   <div className="priceLeft">
                       <div className="spac"></div>
                       <div>
                           <h3>Data Feed</h3>
                           <p>Export products information and stay up to date with the inventory.</p>
                       </div>
                       <div>
                           <h3>Support</h3>
                           <p>Email and live chat support.</p>
                       </div>
                       <div>
                           <h3>Store integration</h3>
                           <p>Synchronize your inventory to numerous online shops.</p>
                       </div>
                       <div>
                           <h3>Automated synchronization</h3>
                           <p>Get your inventory products automatically into your online shop.</p>
                       </div>
                       <div>
                           <h3>Training & Webinars</h3>
                           <p>Get the tools you need to succeed.</p>
                       </div>
                       <div>
                           <h3>Weekly news & Updates</h3>
                           <p>Get ahead of the game with insightful industry news.</p>
                       </div>
                       <div>
                           <h3>Wholesale Services</h3>
                           <p>Access wholesale customer support and get special bulk delivery options.</p>
                       </div>
                       <div>
                           <h3>5% Product Discount</h3>
                           <p>Get 5% discount on all products and increase your revenue.</p>
                       </div>
                       <div>
                           <h3>Account Management</h3>
                           <p>Enjoy from the highest level of customer service.</p>
                       </div>
                   </div>
                   <div className="priceRight">
                       <div className="priceRightBox" >
                             <div className="top-price priceTegone">
                                <p>STARTER 365</p>
                            </div>
                           <div>
                           <h2>$19</h2>
                           <p>PER MONTH</p>
                           </div>
                           <div>
                               <h3>500 products</h3>
                           </div>
                           <div>
                               <h3>Email</h3>
                           </div>
                           <div>
                               <h3>1 store</h3>
                           </div>
                           <div className="space"></div>
                           <div>
                               <img src="https://www.365dropship.com/wp-content/uploads/2020/06/icons8-checkmark.svg" />
                           </div>
                           <div>
                               <img src="https://www.365dropship.com/wp-content/uploads/2020/06/icons8-checkmark.svg" />
                           </div>
                           <div className="space"></div>
                           <div className="space"></div>
                           <div className="space"></div>
                            <div>
                                <a href="">GET STARTED</a>
                            </div>
                       </div>
                       <div className="priceRightBox">
                       <div className="top-price priceTegTwo ">
                                <p>ADVANCED 365</p>
                        </div>
                           <div>      
                           <h2>$39</h2>
                           <p>PER MONTH</p>
                           </div>
                           <div>
                               <h3>2,500 products</h3>
                           </div>
                           <div>
                               <h3>Email, Live Chat</h3>
                           </div>
                           <div>
                               <h3>2 stores</h3>
                           </div>
                           <div>
                               <h3>For Shoppify, WooCommerce </h3>
                           </div>
                           <div>
                           <img src="https://www.365dropship.com/wp-content/uploads/2020/06/icons8-checkmark.svg" />
                           </div>
                           <div>
                           <img src="https://www.365dropship.com/wp-content/uploads/2020/06/icons8-checkmark.svg" />

                           </div>
                           <div>
                           <img src="https://www.365dropship.com/wp-content/uploads/2020/06/icons8-checkmark.svg" />

                           </div>
                           <div className="space"></div>
                           <div className="space"></div>
                           <div>
                           <a href="">GET STARTED</a> 
                           </div>
                       </div>
                       <div className="priceRightBox">
                       <div className="top-price priceTegThree">
                                <p>PRO 365</p>
                        </div>
                           <div>
                           <h2>$79</h2>
                           <p>PER MONTH</p>
                           </div>
                           <div>
                               <h3>5,000 products</h3>
                           </div>
                           <div>
                               <h3>Email, Live Chat, Phone support</h3>
                           </div>
                           <div>
                               <h3>10 stores</h3>
                           </div>
                           <div>
                               <h3>For Shoppify, WooCommerce</h3>
                           </div>
                           <div>
                           <img src="https://www.365dropship.com/wp-content/uploads/2020/06/icons8-checkmark.svg" />

                           </div>
                           <div>
                           <img src="https://www.365dropship.com/wp-content/uploads/2020/06/icons8-checkmark.svg" />

                           </div>
                           <div>
                           <img src="https://www.365dropship.com/wp-content/uploads/2020/06/icons8-checkmark.svg" />

                           </div>
                           <div>
                           <img src="https://www.365dropship.com/wp-content/uploads/2020/06/icons8-checkmark.svg" />

                           </div>
                           <div>
                           <img src="https://www.365dropship.com/wp-content/uploads/2020/06/icons8-checkmark.svg" />

                           </div>
                           <div className="padd">
                           <a href="">GET STARTED</a> 
                           </div>
                       </div>
                   </div>
                </div>
            </div>
        </div>
    )
}