import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
const PlaceOrder = () => {

  const {getTotalCartAmount}= useContext(StoreContext)



  return (
   <form className="place-order">
    <div className="place-order-left">
      <p className='title'>Delivery Information</p>
      <div className="multi-fields">
        <input type="text" placeholder='First Name'/>
        <input type="text" placeholder='Last Name' />
      </div>
      <input type="text" placeholder='Email' />
      <input type="text" placeholder='Street'/>
      <div className="multi-fields">
        <input type="text" placeholder='City'/>
        <input type="text" placeholder='State' />
      
        <input type="text" placeholder='Zip code'/>
        <input type="text" placeholder='Country' />
      
      <input type="text"  placeholder='Phone'/>
      
      </div>
    </div>
    <div className="place-order-right">
    <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
          <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>₹{getTotalCartAmount()===0?0:40}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>₹{getTotalCartAmount()===0?0:getTotalCartAmount()+40}</b>
            </div>
          </div>
          <button >PROCEED TO Payment</button>
        </div>
    </div>
   </form>
  )
}

export default PlaceOrder