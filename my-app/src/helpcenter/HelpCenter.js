import React from "react";
import Head from "../header/Head";
import '../helpcenter/HelpCenter.css'

export default function HelopCenter() {
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
        </div>
    )
}