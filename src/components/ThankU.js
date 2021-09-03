import React from "react";
import {Link} from "react-router-dom";

const ThankU = () => {
	return (
		<>
		<div className="ThankU">
         <img src="./image/thanku.gif"/>
                <div className="thx-home">
                  <Link to="/">
                         <button type="button" className="buyNow">Back to Home</button>
                  </Link>
                </div>
		</div>
		</>

		);

}
export default ThankU;
