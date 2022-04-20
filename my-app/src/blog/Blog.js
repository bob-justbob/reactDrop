import React from "react";
import Head from "../header/Head";
import './Blog.css'


export default function Blog() {
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
        </div>
    )
}