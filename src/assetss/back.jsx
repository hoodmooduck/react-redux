import React, { useEffect } from "react";
import "./products.scss"
import { fetchCustomers } from '../../02_modules/asyncFetch/asyncFetch'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, } from '../../02_modules/counterReducer/counterReducer'
import {addC, removeC} from '../../02_modules/customerReducer/customerReducer'
import ProductCard from "./cardProduct/productCard";




function Products(props) {
  const products = useSelector((state) => state.products.value);
  const dispatch = useDispatch();
  const count = useSelector((state)=> state.counter.value);
  const customer = useSelector((state)=> state.customer.value);

  useEffect(()=>{
    dispatch(fetchCustomers)
  })
  // const addCus = (name)=>{
  //   const cust = {
  //     id: Date.now(),
  //     name,
  //   }
  //   dispatch((addC(cust)))
  // }
  // const removeCus = (el)=>{
  //   dispatch(removeC(el.id))
  // }
  return (
    <div className="products">
      <button onClick={()=>dispatch(fetchCustomers())}>sdgsdgsd</button>
        {products.map((e, idx) => (
          <div key={idx}>idx</div>
        ))}
          {/* <div className="productsIncrement">
            <span>{count}</span>
            <button onClick={()=>dispatch(increment(Number(prompt())))} className="productsBtn">+1</button>
            <button onClick={()=>dispatch(decrement(Number(prompt())))} className="productsBtn">-1</button>
          </div>
          <div className="productsCustomers">
            
            <button onClick={()=>addCus(prompt())} className="productsBtn">+1</button>
            <button onClick={()=>dispatch(fetchCustomers())} className="productsBtn">+many users</button>
            <div>
              {
                customer.map((e, idx) => (
                <div onClick={()=>removeCus(e)} key={idx}>{e.name}</div>))
              }
            </div>
          </div> */}
    </div>
  );
}

export default Products;