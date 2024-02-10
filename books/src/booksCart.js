import React,{useContext} from 'react'

import {ShopContext} from './context/cartContext';


function BooksCart(props){
    const {id,BookName,price,bookImage} =props.data;
    const {addBook, cartItem} = useContext(ShopContext);
    
    const bookAmount = cartItem[id]
    
    
    return(
        <div className='product-card'>
      <img className='product-img' alt={BookName} src={bookImage} />
      <p className='product-price'>Price: R$ {price}</p>
      <h3 className='product-title'>{BookName}</h3>
      <button className='product-btn-cart' onClick={()=>addBook(id)}>
         Add To Cart { bookAmount > 0 && <>({bookAmount}) </>}
         </button>
    </div>       
    )
}


export default BooksCart