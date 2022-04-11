import React from 'react';
import "./Right.css";
import arrow from '../images/arrowDown.svg'
import {Slider} from '@material-ui/core'
import { useState } from 'react';

export default function Right() {

    const [val, setVal] = useState([30, 60]);
    const updateRange = (e, data) => {
        setVal(data)
        
    }
    return (
        <div className="right-side">
           <div className='catalog'>
             <div className="categoryTop">
                 <p>Choose Categoty</p>
                <img src={arrow}/>
             </div>
             <div className="categoryBot">
             <p>Choose Categoty</p>
                 <img src={arrow}/>
             </div>
           
                <form>
                    <input type="text" className='input'  placeholder='Ship From' />
                    <input type="text" className='input'  placeholder='Ship To' />
                    <input type="text" className='input'  placeholder='Select Supplier' />
                </form>
                <div className='price'>
                    <h1>Price Range</h1>
                    <div style={{width: 200, padding: 10}}>
                    <Slider value={val} onChange={updateRange}/>
                    </div>
                    <p>Value: <span id='demo'></span></p>
                </div>
           </div>
           <div className="select">
               s
           </div>
        </div>
    )
}