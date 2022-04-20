import React from "react";
import Head from "../header/Head";
import './Blog.css'
import Footer from "../footer/Footer";
import img1 from '../images/blogImageOne.JPG'
import img2 from '../images/blogImageTwo.JPG'
import img3 from '../images/blogImaggeThree.JPG'
import img4 from '../images/blogImageFour.JPG'
import img5 from '../images/blogImageFive.JPG'
import img6 from '../images/blogImageSix.JPG'
import img7 from '../images/blogImageSeven.JPG'
import img8 from '../images/blogImageEight.JPG'
import img9 from '../images/blogImageNine.JPG'










export default function Blog() {
    const data = [
        {
            image: img1 ,
            title: "Top Dropshipping Toy products for kids 2021",
            info: "Nowadays, there are more than 2.2 billion children in the world. Parents are trying their best to take care of their children and give them the opportunity to develop with the help of different toys. That is why more...",
            date: "November 30, 2021"
        },
        {
            image: img2,
            title: "Top Dropship wholesale health products 2021",
            info: "In recent months, the consequences of COVID-19 pandemic have shown once again that health and wellbeing is the most important thing in life of any human. To tell the truth, healthcare and beauty products can now be considered to...",
            date: "October 2, 2021"
        },
        {
            image: img3,
            title: 'Dropshipping Home and Design products 2021',
            info: 'What exactly is dropshipping?  Dropshipping is a delivery method where the seller does not actually have a physical stock of the product they are selling. In the case of dropshipping products, the seller usually buys them from a third-party supplier...',
            date: "October 2, 2021"
        },
        {
            image: img4,
            title: 'How to have a successful dropshipping business in 2021',
            info: 'We all want to have our own business and become financially free. I bet you have thought about it too! However, starting a business is not an easy task. It can be really competitive, costly, and risky. At that point,...',
            date: 'March 16, 2021'
        },
        {
            image: img5,
            title: 'Top 5 Dropshipping Trends for 2021',
            info: "Online business is changing over time. The eCommerce businesses are dependent on customers' needs. Therefore, different actions of people create new dropshipping trends, which you do not want to miss! 2020 was the game-changer year for an eCommerce business. In...",
            date: 'May 4, 2021'
        },
        {
            image: img6,
            title: "365dropship coupon code – 5% OFF",
            info: "365dropship is a great platform to turn your eCommerce website into a dropshipping store with a wide range of products and customized services. Whether you are a beginner or an experienced dropshipper, this offer will encourage you to find...",
            date: 'March 23, 2021'
        },
        {
            image: img7,
            title: 'Dropshipping fashion items: everything you need to know',
            info: 'Dropshipping allows you to start your online store with low running costs and less risk. This business model is becoming increasingly popular for its profitability and flexibility. As the retailer doesn’t hold inventory, he purchases the item from a third...',
            date: 'January 25, 2021'
        },
        {
            image: img8,
            title: 'Dropshipping sex toys in 2021',
            info: 'The global sex toys market size is growing rapidly. It was valued at $33.64 billion in 2020 and is estimated to grow by 8.04% from 2021 to 2028. The world pandemic situation showed a lot of increased interest in...',
            date: 'February 16, 2021'
        },
        {
            image: img9,
            title: 'Dropshipping business tips for beginners',
            info: 'A lot of people think that the online business model is hard to set up because of costs and management issues. But did you know that consumers will spend more than $4.8 before 2023 on online shopping – yes, that...',
            date: 'March 9, 2021'
        }
    ]
    return (
        <div className="blog">
            <Head />
            <div className="blog-banner">
                <div className="blog-banner-img">
                    <img src="https://365dropship.com/wp-content/uploads/2020/06/terms.png?id=157364" />
                </div>
                <div className="blog-banner-text">
                    <h2>365DROPSHIP</h2>
                    <h2>BLOG</h2>
                </div>
            </div>
            <div className="blog-wrap">
                <div className="blog-container">
                    {data.map((item)=>{
                        return (
                            <div className="blog-prodact">
                                <div className="blog-image">
                                    <img src={item.image}/>
                                </div>
                                <div className="blog-title">
                                    <h2>{item.title}</h2>
                                </div>
                                <div className="blog-info">
                                   <p>{item.info}</p>
                                </div>
                                <div className="bring-it-on">
                                <div className="blog-date">
                                    <p>{item.date}</p>
                                </div>
                                <div className="blog-batton">
                                    <a href="#">Read More</a>
                                </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <Footer />
        </div>
    )
}