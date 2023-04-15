import React from "react";
import { useDispatch, useSelector } from "react-redux";
import close from '../../../assetss/image/close.svg'
import { changeBasket } from "../../../02_modules/basketReducer/basketReducer";
import "./productInf.scss"
import { useState } from "react";
import Comment from "./comment/comment";
import { addComment } from "../../../02_modules/commsentsReducer/commsentsReducer";



function ProductInf() {
  const [reviews, setReviews] = useState(true)
  const [inputValue, setInputValue] = useState('');
  const [textValue, setTextValue] = useState('');
  const productInf = useSelector((state)=> state.productInfState.value);
  const comments = useSelector((state)=> state.comments.commentSelected);
  const dispatch = useDispatch()
  const changePar = (el) => {
    setReviews(el)

  }

  const inpChange = (e) => {
    setInputValue(e.target.value)
  }
  const txtChange = (e) => {
    setTextValue(e.target.value)
  }

  const send = () => {
    if((inputValue !== '')&&(textValue !== '')){
      const el = {
        postId: 1,
        id: Date.now(),
        name: inputValue,
        email: inputValue,
        body: textValue
      }
      setReviews(true)
      setInputValue('')
      setTextValue('')
      dispatch(addComment(el))
    }
  }

  const closeBasket = () => {
    const action = false
    dispatch(changeBasket(action))
  }

  return (
    <div className="productInf">
     <div className="productInfColumn basketColumn">
        <div className="productRow basketRow order">
          <div className="basketText">Информация</div>
          <div onClick={() => closeBasket()} className="basketClose">
            <img src={close} alt="close" />
          </div>
        </div>
        <div className="productInfCard">
          <div className="productInfCardRow">
            <div className="productInfCardImg">
              <img src={productInf.img} alt="ss" />
            </div>
            <div className="productInfDescription">
              <div className="productInfCardTitle">{productInf.name?.split(' ')[0]}</div>
              <div className="productInfCardPrice">{`${productInf.idProd} 000Р`}</div>
            </div>
          </div>
          <div className="productInfCardRow">
            <div className="productInfCardNav">
              <div 
                onClick={() => changePar(true)} 
                className={reviews ? "productInfCardItem active":"productInfCardItem"}
              >
              Отзывы
              </div>
              <div 
                onClick={() =>changePar(false)} 
                className={reviews ? "productInfCardItem":"productInfCardItem active"}
              >
              Оставить отзыв
              </div>
            </div>
            <div className="productInfCardPar">
              {
                reviews ? 
                <div className="productInfCardComments">
                {comments.map((el,idx) => (
                  <Comment inf={el} key={idx}/>
                ))}
              </div>
                :
                <div className="productInfCardSendComment">
                <form action="#">
                  <div>
                    <label htmlFor="name">Имя</label>
                    <input onChange={inpChange} value={inputValue} type="text" id="name" />
                  </div>
                  <div>
                    <label htmlFor="rev">Отзыв</label>
                    <textarea onChange={txtChange} value={textValue} id="rev" /> 
                  </div>
                  <button onClick={()=>send()}>Отправить отзыв</button>
                </form>
              </div>
              }
              

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInf;