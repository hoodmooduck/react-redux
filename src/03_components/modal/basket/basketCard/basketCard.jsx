import React from "react";
import { removeProducts } from "../../../../02_modules/productsReducer/productsReducer";
import { useDispatch } from "react-redux";
import "./basketCard.scss"


function BasketCard(props) {
  const dispatch = useDispatch()
  return (
    <div className="basketCard">
        <div className="basketCardRow imgBlock">
          <img src={props.el.img} alt={props.el.name} />
        </div>
        <div className="basketCardRow">
          <div className="basketCardTitle text">{props.el.name.split(' ')[0]}</div>
          <div className="basketCardPrice text">{`${props.el.idProd} 000Р`}</div>
          <div onClick={()=>dispatch(removeProducts(props.el.id))} className="basketCardRemoveBtn">Убрать из корзины</div>
        </div>
    </div>
  );
}

export default BasketCard;