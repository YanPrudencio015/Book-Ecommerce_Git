import React from 'react'
import { Products } from '../books'
import BooksCart from '../booksCart'

function ShopBooksPage(props){
    return(
        <div className='shop-books'>
        <h1>Books Online</h1>
        <div className='shop-books-container'>
            {Products.map(bookInfo =>{
               return(<BooksCart data={bookInfo}/>) 
            })}
        </div>
    </div>
    )
}



export default ShopBooksPage