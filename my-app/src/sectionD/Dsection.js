import React from "react";
import './Dsection.css'
import DsectionProps from "./DsectionProps";
import lione from "../images/li-one.svg"
import litwo from "../images/li-two.svg"
import lithree from "../images/li-three.svg"
import litfour from "../images/li-four.svg"
import litfive from "../images/li-five.svg"
import lisix from "../images/li-six.svg"





export default function() {
    return (
        <div className="sectionD">
            <div className="Dsection-top">
                <h2>DROPSHIP PRODUCT FEATURES</h2>
            </div>
            <div className="Dsection-bottom">
                <ul>
                    <li>
                        <DsectionProps img={lione} header={"Advanced UI"} />
                    </li>
                    <li>
                        <DsectionProps img={litwo} header={"Activity Dashboard"} />
                    </li>
                    <li>
                        <DsectionProps img={lithree} header={"Products sync"} />
                    </li>
                    <li>
                        <DsectionProps img={litfour} header={"Transaction board"} />
                    </li>
                    <li>
                        <DsectionProps img={litfive} header={"Supply & support"} />
                    </li>
                    <li>
                        <DsectionProps img={lisix} header={"Account setup"} />
                    </li>
                </ul>
          

            </div>
            <div className="botconteiner">
                <div className="D-left">
                    <img src="https://www.365dropship.com/wp-content/uploads/2020/06/5-2048x1151.jpg" alt="saas" />
                </div>
                <div className="D-right">
                    <h2>Advanced  UI</h2>
                    <p>In the 365 <strong>DROPSHIP</strong>  platform you’ll find the most user-friendly UI enabling easy product search, inventory management, and order placement.</p>
                    <p>Our User Interface is simple and sophisticated at the same time. Using a modern product search system, you can find anything you need in seconds.</p>
                    <p>Here you can easily manage your inventory and place the desired orders. The interface is adjusted to your needs and designed so that everything is straightforward from your first click. Our advanced user interface saves your time and allows you to easily surf through the dropship platform features.</p>
                </div>
            </div>
        <div className="D-button">
            <a href="#">GET STARTED</a>
        </div>
        </div>
    )
}