
import "./products.scss"
import ProductCard from './cardProduct/productCard'
import { fetchCustomers } from '../../02_modules/asyncFetch/asyncFetch'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from "react";


function addProd(dispat) {
  dispat(fetchCustomers())
}



function Products(props) {
  const customer = useSelector((state)=> state.customer.value);
  const dispatch = useDispatch();
  useEffect(()=>{
    addProd(dispatch)
  },[])



  return (
    <div className="products">
      {props.products.length !== 0 ? 
      <div className="productsColumn">
      {
        customer.map((e, idx) => (
          <ProductCard info={e} key={idx}></ProductCard>
        ))
      }
    </div>
      :
      <div className="productsColumn">
        <div className="productRow">
          <div className="productBasketPic">
            <img src="https://www.freeiconspng.com/thumbs/shopping-basket-icon/grocery-basket-icon-11.png" alt="basket" />
          </div>
          <div className="productText">В данной категории товаров пока нет</div>
        </div>
      </div>
      }
    </div>
  );
}

export default Products;