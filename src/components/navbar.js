import React from "react";
import {ShoppingCart} from 'phosphor-react'
import { Link } from "react-router-dom";


export const Navbar = (props)=>{

    return(
        <div className='navbar-container'>
            <Link to={"/"}><h1> Book-Store</h1></Link>
             
            <Link to={"/cart"}>
                 <ShoppingCart className='navbar-shop' />
            </Link>
            
            
      </div>
    )

}