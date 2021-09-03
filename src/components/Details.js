import React,{useEffect,useState} from "react";
import {useParams} from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import {FaRupeeSign} from "react-icons/fa";
import {BsDash,BsPlus} from "react-icons/bs";
import {Link} from "react-router-dom";

const Details = () => {

const[quantity , setQuantity]=useState(1);


	const {id} = useParams();
	const dispatch = useDispatch();

    const {product}=useSelector(state=>state.ProductsReducer)

	useEffect(()=>{
     dispatch({type:'PRODUCT',id })
	},[id]);

const decQuantity = ()=>{
	if(quantity>1){
		setQuantity(quantity-1)
	}
};


	return (
		<>
		<div className="container mt-100">
          <div className="row">
            <div className="col-6 details-col">
              <div className="details-img">
               <img src={`/image/${product.image}`} alt="product-img" />
		          </div>
		        </div>
		         <div className="col-6 details-col">
                <div className="details-name">
                 {product.name}
		            </div>
		            <div className="details-price">
                 <span className="details-actualP"><FaRupeeSign className="rs-icon"/>{product.price}</span>
                 <span className="details-discountp"><FaRupeeSign className="rs-icon"/>{product.discountPrice}</span>
		            </div>
		            <div className="details-info">
				            <div className="details-incDec">
		                  <span className="dec"onClick ={decQuantity}><BsDash/></span>
		                  <span className="quantity">{quantity}</span>
		                  <span className="inc" onClick ={()=> setQuantity(quantity+1)}><BsPlus/></span>
		                  <button className="btn-default" 
		                  onClick={()=> dispatch({type:'ADD_TO_CART',payload:{product,quantity}})}
		                  >Add To Cart</button>
		                </div>
		            </div>
		            <div className="details-desc">
		               <h4>Details</h4>
		                {product.desc}
		            </div>
		            <div>
		            <Link to ="/products">
                   <button className="allpro" 
		                  >All Products</button> 
		            </Link>
		            </div>
		         </div>
		  </div>
		</div>
		</>

		);

}
export default Details;