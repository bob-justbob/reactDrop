import React from "react";
import Head from "../header/Head";
import '../supplier/Supplier.css'
import supplier from '../images/supplier.JPG'
import suppliertwo from '../images/supplierTwo.JPG'
import Footer from "../footer/Footer";


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
                <div className="supplier-section-one">
                    <div className="section-one-img">
                        <img src={supplier}/>
                    </div>
                    <div className="section-one-text">
                        <h2>Why You Should Sell Your Products with 365DROPSHIP</h2>
                        <p>At 365DROPSHIP, we help you showcase your products through our online business partners across the globe, increase your order volumes, and ultimately grow your business. Apart from connecting you with our worldwide partners, we also make it easy to sell your products with us.</p>
                        <p>Here’s what we can offer you as a dropship supplier:</p>
                        <p>Free, no obligation to Sign Up – We won’t charge you a thing when you start selling your products with us.
                        Add as many dropship products as you can – There are no limits to how many products you want to add to our network. Whether you’re selling a niche collection or distributing bulk orders, you’ll find customers with 365DROPSHIP.
                        API integration – With our cutting-edge API, we’ll help you inform your customers about item availability and new products in real-time. This way, your customers get updated information about your products.</p>
                    <p>Apart from connecting you with companies to dropship from we also facilitate understanding of the trade principles and help you easily adapt to the business world, If you’re an experienced Dropship supplier or just new to the Dropshipping business, Our Dropship Platform will help you connect with e-commerce, shopify & Wix professionals and their worldwide customers. To sell your quality dropship items with 365DROPSHIP.</p>
                    <div className="supplier-button">
                    <a href="">BE A SUPPLIER</a>
                    </div>
                    </div>
                </div>
                <div className="supplier-section-two">
                    <div className="supplier-section-two-text">
                        <h2>What We Look for in Our Dropship Suppliers</h2>
                        <p>We want to help dropship suppliers who share the same values with us at 365DROPSHIP. We want to make sure that customers are always happy with the quality of the products we deliver to them.</p>
                        <p>We also look for the following in our supply partners:</p>
                        <p>Manufacturers – We’re looking for efficient manufacturers who want to get their quality products out there for an affordable price. We’re more than happy to help you find interested customers.
                        Wholesalers and Distributors – We’d like to partner with distributors and bulk sellers who carry genuine, name-brand products. After all, brand loyalty is still a powerful part of sales.
                        Retailers – We’re also looking for retailers who sell interesting and unique dropship products in different niches. We want to cover a wide range of customers, from dropship fashion enthusiasts to pet lovers.</p>
                        <p>Whether you’re an experienced supplier or just new to the business, we’ll help you connect with e-commerce professionals and their customers worldwide. Sell your quality items with us today.</p>
                        <div className="supplier-section-text-button">
                            <a href="#">BE A SUPPLIER</a>
                        </div>
                    </div>
                    <div className="supplier-section-two-img">
                        <img src={suppliertwo} />
                    </div>
                </div>
                <Footer />
        </div>
    )
}