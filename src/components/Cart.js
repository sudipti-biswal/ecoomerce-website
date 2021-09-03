import React from "react";
import {useSelector,useDispatch} from "react-redux";
import {FaRupeeSign} from "react-icons/fa";
import {BsDash,BsPlus,BsFillTrashFill} from "react-icons/bs";
import {Link} from "react-router-dom";

const Cart = () => {
	const{products,totalPrice,totalQuantities}= useSelector(state => state.CartReducer);
    const dispatch= useDispatch();
	return (
		<>
		<div className="cart">
           <div className="container">
             
              {products.length > 0 ? 
              	<>
                  <div className="row">
                    <div className="col-9">
                      <div className="cart-heading">
	                      <div className="row textAlign">
	                        <div className="col-2">
                             picture
                            </div> 
                            <div className="col-2">
                             name
                            </div>
                            <div className="col-2">
                             price
                            </div>
                            <div className="col-2">
                             incdec
                            </div>
                            <div className="col-2">
                             total price
                            </div>
                            <div className="col-2">
                             remove
                            </div>
	                      </div>  
                      </div> 
                      {products.map(product=>(

                        <div className="row verticalAlign textAlign" key={product.id}>
                          <div className="col-2">
                            <div className="cart-img">
                             <img src={`/image/${product.image}`} alt="product img" />
                            </div>
                          </div>
                          <div className="col-2">
                            <div className="cart-name">
                             {product.name}
                            </div>
                           </div>
                          <div className="col-2">
                            <div className="cart-price">
                             <FaRupeeSign className="cicon"/>{product.discountPrice}
                            </div>
                          </div>
                          <div className="col-2">
                            <div className="details-info cart-incdec">
						        <div className="details-incDec">
				                  <span className=" dec dec-cart" onClick={() => dispatch({type:"DEC",payload:product.id})}><BsDash/></span>
				                  <span className="quantity q-cart">{product.quantity}</span>
				                  <span className=" inc inc-cart" onClick={() => dispatch({type:"INC",payload:product.id})}><BsPlus/></span>
				                  
				                </div>
				            </div>
                          </div>
                          <div className="col-2">
                            <div className="cart-total textAlign">
                             <FaRupeeSign className="cicon"/>{product.discountPrice * product.quantity}
                            </div>
                          </div>
                          <div className="col-2">
                            <div className="cart-remove" onClick={() => dispatch({type:"REMOVE",payload:product.id})}>
                             <BsFillTrashFill/>
                            </div>
                          </div>
                        </div>
                       
                      	))}
                    </div> 
                    <div className="col-3 summery-col">
                     <div className="summery">
                       <div className="summery-heading textAlign">
                        summery
                       </div>
                       <div className="summery-details">
                         <div className="row mb-10">
                           <div className="col-6">
                             Total Items:
                           </div>
                            <div className="col-6">
                             {totalQuantities}
                           </div>
                         </div>
                         <div className="row mb-10">
                           <div className="col-6">
                             Total Price:
                           </div>
                            <div className="col-6">
                             <FaRupeeSign className="cicon"/>{totalPrice}
                           </div>
                         </div>
                         <div>
                         <Link to="/checkout">
                         <button type="button" className="checkOut"
                            
                         >Buy Now</button>
                         </Link>
                         </div>
                       </div>
                     </div>
                    </div>   
                  </div>
              	</> 
              	: "Your cart is empty"}
		   </div>
		</div>
		</>

		);

}
export default Cart;