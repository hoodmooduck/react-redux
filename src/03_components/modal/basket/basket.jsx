import React, { useState } from "react";
import close from '../../../assetss/image/close.svg'
import BasketCard from "./basketCard/basketCard";
import "./basket.scss"
import { useDispatch, useSelector } from "react-redux";
import { changeBasket } from "../../../02_modules/basketReducer/basketReducer";
import { clearProducts } from "../../../02_modules/productsReducer/productsReducer";
import { addOrder } from "../../../02_modules/orderReducer/orderReducer";


function Basket() {
  const products = useSelector((state) => state.products.value);
  const [name, setName] = useState('');
  const [adress, setAdress] = useState('');
  const [number, setNumber] = useState('');
  const [err, setErr] = useState(0);
  const [acceptOrder, setAcceptOrder] = useState(false);
  const dispatch = useDispatch();
  const formObj = {
    id: '',
    name: name,
    number: number,
    adress: adress,
  };

  const setNameChange = (e)=>{
    setName(e.target.value);
  }
  const setNumberChange = (e)=>{
    setNumber(e.target.value);
  }
  const setAdressChange = (e)=>{
    setAdress(e.target.value);
  }



  const clearInputs = ()=>{
    setName('');
    setAdress('');
    setNumber('');
  }
  
  const acceptOrderCheck = () =>{
    setAcceptOrder(true);
    setTimeout(()=>setAcceptOrder(false),5000);
  }

  const addOrd = (action) => {
    if(formObj.name !== ''){
      if(formObj.number !== ''){
        if(formObj.adress !== ''){
          formObj.id = Date.now();
          action = formObj;
          dispatch(addOrder(action));
          dispatch(clearProducts());
          clearInputs();
          acceptOrderCheck();
          setErr(0);
        } else{
          setErr(3);
        }
      } else{
        setErr(2);
      }
    } else{
      setErr(1);
    }
  }



  const closeBasket = () => {
    const action = false
    dispatch(changeBasket(action))
  }

  return (
    <React.Fragment>
      {products.length?
      <div className="basketColumn">
        <div className="basketRow order">
          <div className="basketText">Оформить заказ</div>
          <div onClick={() => closeBasket()} className="basketClose">
            <img src={close} alt="close" />
          </div>
        </div>
        <div className="basketRow">
          <div className="basketText">В корзине:</div>
          <div className="basketProducts">
            {products.map((el,idx)=>(
              <BasketCard el={el} key={idx}/>
            ))}
          </div>
        </div>
        <div className="basketRow">
          <form className="basketForm" action="#">
            <span>
              <label htmlFor="name">Имя</label>
              <input 
                value={name}
                onChange={setNameChange}
                id="name" 
                type="text" 
                className={err === 1 ? 'errorInput':''}
              />
              {err === 1 ? <span className="error" >Введите имя</span> : <span></span>}
            </span>
            <span>
              <label htmlFor="phone">Телефон</label>
              <input 
                value={number}
                onChange={setNumberChange}
                id="phone" 
                type="tel" 
                className={err === 2 ? 'errorInput':''}
              />
              {err === 2 ? <span className="error" >Введите номер</span> : <span></span>}
            </span>
            <span>
              <label htmlFor="adress">Полный адрес</label>
              <input 
                value={adress}
                onChange={setAdressChange}
                id="adress" 
                type="text" 
                className={err === 3 ? 'errorInput':''}
              />
              {err === 3 ? <span className="error" >Введите адресс</span> : <span></span>}
            </span>      
            <input
              onClick={addOrd}
              className="buttonProduct basketBtn" 
              value="Заказать" 
              type="button" 
            />
            
          </form>
        </div>
      </div>
       :
      <div className="basketColumn">
         <div className="basketRow order">
          <div className="basketText">Оформит заказ</div>
          <div onClick={() => closeBasket()} className="basketClose">
            <img src={close} alt="close" />
          </div>
        </div>
        <div className="basketRow emptyBasket">
          <div className="basketImg">
            <img src={acceptOrder ? "https://svgsilh.com/svg/27098.svg" : "https://www.freeiconspng.com/thumbs/shopping-basket-icon/grocery-basket-icon-11.png"} alt="basket" />
          </div>
          <div className="basketTitle">{!acceptOrder ? <span>В корзине ничего нет</span> : <span>Заказ принят</span>}</div>
        </div>
      </div>      
      }
    </React.Fragment>
  );
}

export default Basket;