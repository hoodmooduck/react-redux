import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.scss"
import logo from "./../../assetss/image/logo.svg";
import basket from "./../../assetss/image/basket.svg";
import { changeBasket } from "../../02_modules/basketReducer/basketReducer";
import { useSelector, useDispatch} from "react-redux";
import { changeProduct } from "../../02_modules/productInf/productInfReducer";


function Header() {
    const products = useSelector((state)=> state.products.value);
    const dispatch = useDispatch();
    const [quantityGoods, setQuantityGoods] = useState(products.length);

    const openBasket = ()=>{
      const action = true
      dispatch(changeBasket(action))
      dispatch(changeProduct(!action))
    }

    useEffect(()=>{
      setQuantityGoods(products.length)
    },[products])

  return (
    
    <div className="header">
        <div className="headerColumn">
            <div className="headerLeftSide">
                <NavLink className="headerLogo" to="/">
                        <img src={logo} alt="logo" />
                </NavLink>
                <nav className="headerNavBar">
                    <NavLink className={`headerLink ${({isActive})=> isActive? 'active':''}`} to="/electrical">Электроприборы</NavLink>
                    <NavLink className={`headerLink ${({isActive})=> isActive? '':'active'}`} to="/furniture">Мебель</NavLink>
                </nav>
                </div>
            <div onClick={() => openBasket()} className="headerBasket">
                <img src={basket} alt="basket" />
                <div className="headerQuantityGoods">{ quantityGoods }</div>
            </div>
        </div>
    </div>
  );
}

export default Header;