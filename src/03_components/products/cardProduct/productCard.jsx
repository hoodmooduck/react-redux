import React from "react";
import ButtonProduct from "../../../04_UI/buttonProduct/buttonProduct";
import { addProducts } from '../../../02_modules/productsReducer/productsReducer'
import { addProductInf } from "../../../02_modules/productInfState/productInfStateReducer";
import "./productCard.scss"
import { useDispatch } from "react-redux";
import { changeBasket } from "../../../02_modules/basketReducer/basketReducer";
import { changeProduct } from "../../../02_modules/productInf/productInfReducer";
import { selectComments } from "../../../02_modules/commsentsReducer/commsentsReducer";





function ProductCard(props) {
  const dispatch = useDispatch();

  const openBasket = ()=>{
    const action = true
    dispatch(changeBasket(action))
    dispatch(changeProduct(action))
  }
  
  const addProductsInfo = (inf) => {
    const prod = {
          id: Date.now(),
          idProd: inf.id,
          name: inf.title,
          img: inf.url,
          price: `${inf.id} 000P`
    }
    dispatch(addProductInf(prod))
    dispatch(selectComments(prod.idProd))
    openBasket()
  }

  const addProductsBasket = (inf) => {
    const prod = {
          id: Date.now(),
          idProd: inf.id,
          name: inf.title,
          img: inf.url,
          price: `${inf.id} 000P`
    }
    dispatch(addProducts(prod))
  }

  return (
    <div className="productCard">
      <div className="productCardPicture">
        <img src={props.info.url} alt="123" />
      </div>
      <div onClick={()=>addProductsInfo(props.info)} className="productCardTitle">{props.info.title.split(' ')[0]}</div>
      <div className="productCardPrice">{`${props.info.id} 000Р`}</div>
      <span  onClick={()=>addProductsBasket(props.info)} className="productCardBtn">
        <ButtonProduct />
      </span>
      
    </div>
  );
}

export default ProductCard;