import React from 'react';
import "./Right.css";
import arrow from '../images/arrowDown.svg'

export default function Right() {
    return (
        <div className="right">
            <div className="catalog">
                <div className="choose-category flex dark">
                <p>Choose Category</p>
                <div className="icon">
                    <img src={arrow} alt="" />
                </div>
                </div>
                <div className="choose-category flex notDark">
                <p>Choose Niche</p>
                <div className="icon">
                    <img src={arrow} alt="" />
                </div>
                </div>

            </div>
            <div className="form">
                <form>
                    <input type="text" id='shipForm' name='ship' placeholder='Ship From' />
                    <input type="text" id='to' name='to'  placeholder='Ship To' />
                    <input type="text" id='supplier' name='supplier' placeholder='Select Supplier' />
                </form>
            </div>
            <div className="prise">
                <p>Price Range</p>
            </div>
            <div className="select"></div>
        </div>
    )
}