import React, { createContext, useState } from "react";
import { Products } from "../books";



export const ShopContext = createContext(null);

function getItemDefalt(){
    let cart = {};

    for(let i = 0; i < Products.length +1; ++i){
        cart[i]=0;
    }

    return cart
}





export function CardContextprovider(props){

    const[cartItem, setCartItem] = useState(getItemDefalt())


    function BookAmoutCount(){
        let totalAmount = 0;
    
        for(const item in cartItem){
            if(cartItem[item] > 0){
                let bookInfo = Products.find((product) => product.id === Number(item));

                totalAmount += cartItem[item] * bookInfo.price;
            }

        }
        return totalAmount;
    }
    


    const addBook = (bookid)=>{
        setCartItem((prev)=>({...prev, [bookid]: prev[bookid] +1}))
    }
    const removeBook = (bookid)=>{
        setCartItem((prev)=>({...prev, [bookid]: prev[bookid] -1}))
    }

    const UpdateAmount = (newAmount,bookid)=>{
        setCartItem(prev =>({...prev, [bookid]:newAmount}))
    }

    const contextValue = {
        addBook,
        removeBook,
        cartItem,
        UpdateAmount,
        BookAmoutCount
    }
    return(
        <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
    )
}