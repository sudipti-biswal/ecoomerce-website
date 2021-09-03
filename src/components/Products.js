import React from "react";
//eske throw ham global store excess kar sakte he
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {FaRupeeSign} from "react-icons/fa";



const Products = () => {

	const {products} = useSelector(state => state.ProductsReducer)
	console.log(products)
	return (
		<>
		<div className="container mt-100">
             <div className="row">
              {products.map(product =>(
              	<div className="col-3" key ={product.id}>

                  <div className="product">

                   <div className="product-img">
                     <Link to={`/details/${product.id}`}>
                       <img src={`/image/${product.image}`} alt="product name" />
                     </Link>
                   </div>

                   <div className="product-name">
                      {product.name}
                   </div>

                   <div className="row">
                      <div className="col-6">
                        <div className="product-price">
                           <span className="actual-price"><FaRupeeSign className="rs-icon"/>{product.price}</span>
                           <span className="discount"> {product.discount}%</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="product-discount-price">
                         <FaRupeeSign className="rs-icon" />{product.discountPrice}
                        </div>
                      </div>
                   </div>

                  </div>

              	</div>

              	))}
		     </div>
		  </div>		</>

		);

}
export default Products;