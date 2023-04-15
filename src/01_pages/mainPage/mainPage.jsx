import React from "react";
import SideBar from "../../03_components/sidebar/sidebar.jsx";
import Products from "../../03_components/products/products.jsx";
import './mainPage.scss'


function mainPage(props) {
  
  
  return (
    <div className="mainPage">
        <SideBar nameLinks={props.links}/>
        <Products products={props.products}/>
    </div>
  );
}

export default mainPage;