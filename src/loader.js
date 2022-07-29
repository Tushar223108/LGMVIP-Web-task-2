import React, { Fragment } from "react";
import loader from "./loader.gif";
const Loader = () => (
  <Fragment>
    <img
      src={loader}
      alt="Loading..."
      style={{ width: "180px", margin: "auto", display: "grid", padding: "2px"}}
    />
    <p style={{textAlign:"center" , color: "black" , fontSize:"30px"}}>Please! 🕕 Wait While The Page Load The Data
    </p>
  </Fragment>
);
export default Loader;