import React, { useContext } from "react";
import { ShopContext } from "../context/cartContext";


function CartItem(props){

    const{ id,BookName, price,bookImage} = props.data;

    const {addBook,removeBook,cartItem,UpdateAmount} = useContext(ShopContext)
    return(
        <div className="cart-item">
            <img src={bookImage} alt={BookName}/>
            <div className="cart-item-desc">
                <h4>{BookName}</h4>
                <p>R${price}</p>
            </div>
            <div className="cart-item-quant">
                <button onClick={()=>{addBook(id)}}>+</button>
                <input value={cartItem[id]} onchange={e=>{UpdateAmount(Number(e.target.value), id)}} />
                <button onClick={()=>{removeBook(id)}}>-</button>

            </div>
        </div>
    )
}


export default CartItem