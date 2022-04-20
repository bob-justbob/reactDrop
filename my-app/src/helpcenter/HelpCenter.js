import React from "react";
import { useState } from "react";
import Footer from "../footer/Footer";
import Head from "../header/Head";
import '../helpcenter/HelpCenter.css'

export default function HelopCenter() {

    const data = [
        {
            name:" Why I’m not able to export CSV file from my account?",
            info:  "In order to export the catalog from your Inventory, you first need to choose your wanted items from the catalog and click add to inventory. CSV file will be exported without items in your Inventory."
        },
        {
            name: "What is 365DROPSHIP?",
            info: "365DROPSHIP allows you to add high demand products from our extensive catalog to sell at your store, ship the orders directly to customers all over the world, and help increase your profits an excellent solution for people with existing stores anywhere online and those of you looking to break into the eCommerce market. We propose you to download products from the hundreds of bestselling products from a variety of niches with affordable prices to choose from our catalog. We have teamed up with some of the best suppliers worldwide in order to create an attractive line of products, thousands of products ranging from fashion, cosmetics, jewelry, Holy land’s crafts, herbals, software, and more are offered for you directly on 365DROPSHIP. We at 365DROPSHIP believe that you are the key for our successful business so we offer you to earn up to 70% commission on each sale! The profit relates to the recommended retail price as mentioned in the dropship catalog."
        },
        {
            name: "What is dropshipping?",
            info: "Selling high demand products without actually stocking or drop shipping products."
        },
        {
            name: "What is Advanced Filters?",
            info: "If you have a Shopify/ woocommerce store, you connect the store to your 365DROPSHIP account.This connection is a quick way for you to sync between the catalog and your store is the fastest and easiest way. in order to connect, here is what you need to do: 1. Go to the Store List icon on the left side of the screen. 2. Press Add remote store. 3. add all store details. choose the platform, add store URL, and store Title. "
        },
        {
            name: "What is 365DROPSHIP Dashboard?",
            info: "Your account Dashboard is showing you the general information on your activity. what type of information is showing?"
        },
        {
            name: "Where can I view the money transactions?",
            info: "You can view all of the money transactions (Credit/Debit) on the Transactions section in your account."
        }
    ]
    const dataTwo = [
        {
            name: "Can I have my own logo/brand name on the packages?",
            info: "At the moment we do not provide private or white label logo branded packaging."
        },
        {
            name: "Where do you ship your products from?",
            info: "We have several logistic centers providing dropshipping services all over the globe. If you wish to receive specific details regarding specific product/s origin and logistic"
        },
        {
            name: "Does the package include product Brand/ logo?",
            info: "Our catalog contains thousands of products from various niches and brands. Packages will contain the key information required for delivery, customer details, shipping address, etc. Some Brands will arrive with their original brand logo name packaging."
        },
        {
            name: "Buying Bulk order stock",
            info: "If you wish to purchase bulk order or stock of any specific product/s we recommend you contact us and verify with us the specific amounts, costs, and quantities."
        }

    ]

    const [selected, setSelected] = useState(null)

    const toggle = (i) =>{
        if (selected === i) {
            return setSelected(null)
        }

        setSelected(i)
    }
    return (
        <div className="helpcenter">
            <Head />
            <div className="helpcenter-banner">
                <div className="helpcenter-banner-img">
                    <img src="https://365dropship.com/wp-content/uploads/2020/06/aboutheader-copy.jpg?id=156727" />
                </div>
                <div className="helpcenter-banner-text">
                    <h2>DROPSHIPKNOWLEDGE BASE</h2>
                    <h3>EVERYTHING YOU NEED TO KNOW IN ONE PLACE</h3>
                </div>
            </div>
            <div className="helpcenter-general-questions">
                <div className="general-questions-one">
                    <div className="questone-header">
                        <h2>General Questions</h2>
                        <p>Find the answers to all your drop shipping questions.</p>
                    </div>
                    <div className="question-one">
                        {data.map((item, i)=>{
                            return (
                                <div className="item">
                                    <div className="name" onClick={()=> toggle(i)}>
                                        <h2>{item.name}</h2>
                                        <span>{selected == i ? '-' : "+"}</span>
                                    </div>
                                    <div className={selected == i ? 'info show' : 'info'}>
                                        {item.info}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="question-two">
                        <h3>Orders and Shipments</h3>
                             {dataTwo.map((item, i)=>{
                            return (
                                <div className="item">
                                    <div className="name" onClick={()=> toggle(i)}>
                                        <h2>{item.name}</h2>
                                        <span>{selected == i ? '-' : "+"}</span>
                                    </div>
                                    <div className={selected == i ? 'info show' : 'info'}>
                                        {item.info}
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>

            </div>
            <Footer  />
        </div>
    )
}