import React from "react";
import {Link} from "react-router-dom";

const CheckOut = () => {
	return (
		<>
		<div className="checkout">
          <div className="container">
           <div className="row textAlign ">
            <div className="col-6 mt-100 checkout-col">
             <h3>Add Delivery Address</h3>
              <form className="checkout-from">
				  
				<input type="text" name="name" placeholder="Full Name"/>
				<input type="text" name="number" placeholder="Phone no"/>
				<input type="text" name="name" placeholder="State"/>
				<input type="text" name="name" placeholder="City"/>
				<input type="text" name="number" placeholder="PinCode"/>
				<input type="text" name="name" placeholder="Area , Colony & House No."/>
				<input type="text" name="name" placeholder="Land Mark"/>     
				

			  </form>
            </div>
            <div className="col-6 checkout-col mt-100">
            <h3>Card Details</h3>
             <div className="checkout-card">
		         <input type="radio" value="Credit/Debit Card" name="paymeny" /> Credit/Debit Card

                <div className="checkout-subCard">
				  <input type="text" name="number" placeholder="Card No"/>
				  <input type="text" name="number" placeholder="MM / YY "/>
				  <input type="text" name="number" placeholder=" CCV "/>

		        </div>
                <input type="radio" value="Cash On Delivery" name="paymeny" /> Cash On Delivery
		      </div>
                <div>
                  <Link to="/thankU">
                         <button type="button" className="buyNow">Place Order</button>
                  </Link>
                </div>

            </div>
           </div>
          </div>
		</div>
		</>

		);

}
export default CheckOut;