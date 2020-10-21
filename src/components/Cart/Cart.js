import React from 'react';
import './cart.css'

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce( (total, crs) => total + crs.fees , 0);

    return (
        <div className='cart'>
            <h5>Your Courses</h5>
            <p>Enrolled Course: {cart.length}</p>
            <p>Total price: {total}$</p>
            <p><small>Thanks for being with us!</small></p>
        </div>
    );
};

export default Cart;