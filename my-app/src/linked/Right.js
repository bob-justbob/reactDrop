import React from 'react';
import "./Right.css";
import arrow from '../images/arrowDown.svg'
import {Slider} from '@material-ui/core'
import { useState } from 'react';
import magnify from '../images/loupe.png'
import { useEffect } from 'react';

export default function Right() {
    const [data, setData] = useState([])
   
    const [val, setVal] = useState([200,500]);


    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then((response)=>response.json())
            .then((fetchedData) => setData(fetchedData))
    }, [])

            console.log('Data', data)

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
                    <Slider max={1000} min={0} value={val} onChange={updateRange}/>
                    </div>
                    <div className='pricese'>
                        <p>$: <span id='demo'>{val[0]}</span></p>
                        <p>$: <span id='demo'>{val[1]}</span></p>
                     
                    </div>

                </div>
           </div>
           <div className="select">
                <div className="selectTop">
                    <div className="selectAll">
                        <p>select all</p>
                    </div>
                    <div className='selecttext'>
                        <p>selected 0 out of 0 products</p>
                    </div>
                    <div className="search">
                        <input type="search"  className='searching' placeholder='search...'/>
                        <img src={magnify} />
                    </div>
                    <div className="inventory">
                        <p>ADD TO INVENTORY</p>
                    </div>
                    <button className='btn'>?</button>
                </div>
                <div className="selectBot">
                    <label for="sort" className='label'>Sort By:</label>
                    <select name="items" id="sort">
                        <option value="new">New Arrivals</option>
                        <option value="HTL">Price: High To Low</option>
                        <option value="LTH">Price: High To Low</option>
                        <option value="AZ">Profit: Alphabetic</option>
                        <option value="ZA">Profit: Non-Alphabetic</option>
                    </select>
                </div>
                <div className='prodacts'>
                    {
                        data.map(prodacts=> {
                            return (
                            <div className="staff">
                                <div className='staffImage'>
                                    <img src={prodacts.image} />
                                </div>
                                <div className="staffTitle">
                                    <p>{prodacts.title}</p>
                                </div>
                                <div className="staffPrice">
                                    <p>${prodacts.price}</p>
                                </div>
                            </div>
                            )
                        })
                    }
                </div>
           </div>   
        </div>
    )
}