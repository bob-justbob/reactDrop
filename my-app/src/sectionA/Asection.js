import React from "react";
import './Asection.css'
import AsectionProps from "./AsectionProps";
import FirstImg from '../images/first.svg'
import secondImg from '../images/second.svg'
import theerdImg from '../images/therd.svg'



export default function Asection() {
    return (
        <div className="sectionA">
            <div className="A-text">
                <h2>DISCOVER GLOBAL DROPSHIPPING PRODUCTS</h2>
                <p><strong>PARTNER WITH THE MOST EXPERIENCED DROPSHIPPING TEAM IN THE INDUSTRY!</strong></p>
                <p><strong>ONE</strong> <span>POINT OF CONTACT PROVIDING TOP DROPSHIP PRODUCTS FROM WORLDWIDE SUPPLIERS </span> </p>
            </div>
            <div className="A-boxes">
                <div className="box-content">
                    <div className="box-img"></div>
                    <div className="box-content">
                        <AsectionProps   img={FirstImg}  header={70} texts={"Unique Suppliers"}/>
                        <AsectionProps img={secondImg} header={200000} texts={"Products"}/>
                        <AsectionProps img={theerdImg} header={150} texts={'Destinations'}/>
                    </div>
                </div>

            </div>
        </div>
    )
}