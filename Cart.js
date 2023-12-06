import { Divider } from '@mui/material';
import React from 'react';
import "./cart.css";
import prod from "./product1.jpeg";
const Cart = () => {
    return (
        <div className="cart_section">
            <div className="cart_container">
                <div className="left_cart">
                    <img src={prod} alt="img" />
                    <div className="cart_btn">
                        <button className='cart_btn1'>CSE</button>
                        <button className='cart_btn2'>Domain</button>
                    </div>

                </div>
                <div className="right_cart">
                    <h3>Flyer</h3>
                    <h4>Important info</h4>
                    <Divider />
                    <p className="mrp">Flyer</p>
                    <p>Deal of the Day: <span style={{ color: "#B12704" }}>625.00</span> </p> <p>You save :: <span style={{ color: "#B12704" }}> 570 (47%) </span> </p>
                    <div className="discount_box">
                        <h5>Discount : <span style={{ color: "#111" }}>Extra 10% Off</span></h5>
                        <h4>Free Delivery :<span style={{ color: "#111", fontWeight: 600 }}>Oct 8 - 21</span> Details</h4> <p>Fastest delivery: <span style={{ color: "#111", fontWeight: 600 }}>Tomorrow 11AM</span> </p>
                    </div>
                    <p className='description' >About the Iteam <span style={{ color: "#565959", fontSize: "14px", fontWeight: "500", letterSpacing: "0.4px" }}>CSE DASHBOARD</span></p>
                </div>
            </div>



        </div>
    )
}



export default Cart