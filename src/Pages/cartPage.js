import React, { useContext } from "react";
import { Products } from '../books';
import CartItem from "./cartItem";
import { ShopContext } from "../context/cartContext";

import {useNavigate} from 'react-router-dom'

function CartPage(props) {
  const { cartItem,BookAmoutCount } = useContext(ShopContext);
  const totalAmountbooks = BookAmoutCount();
  const navigate = useNavigate();

  return (
    <div className='cart-page'>
      <h1>Your Books</h1>
      <div className='cart-list'>
        {Products.map((bookdata) => {
          if (cartItem[bookdata.id] !== 0) {
            return <CartItem data={bookdata} key={bookdata.id} />;
          }
          return null; 
        })}
      </div>
      <div className='cart-check'>
        <p>Subtotal:${totalAmountbooks}</p>
        <div className="cart-check-options">
          <button onClick={()=>{navigate("/")}}>Back to shop</button>
          <button>checkOut</button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
