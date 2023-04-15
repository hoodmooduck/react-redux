import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Basket from "./basket/basket";
import ProductInf from './productInf/productInf'
import "./modal.scss"



function Modal() {
  const dispatch = useDispatch()
  const basket = useSelector((state)=> state.basket.value);
  const productInf = useSelector((state)=> state.productInf.value)

  return (
    <div className={basket ? "basket" : "basket hide"}>
      {productInf ? 
        <ProductInf/>
          :
        <Basket />
      }
    </div>

    
  );
}

export default Modal;