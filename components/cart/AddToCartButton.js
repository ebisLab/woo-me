import Link from 'next/link';
import {useState, useContext} from 'react'
import {AppContext } from '../context/AppContext'
import { addFirstProduct } from '../../function';

const AddToCartButton =(props)=>{
    const {product}=props
    const [cart, setCart]=useContext(AppContext);

    const handleAddToCartClick=()=>{
        if(process.browser){
            let existingCart = localStorage.getItem('woo-next-cart');

            //if cart has item(s) already, then update the exiting
            if(existingCart){

            }else{
                
                //if no item in the cart, create an empty array and push the item
                const newCart = addFirstProduct(product);
                setCart(newCart)
            }
        }
        console.log("hello there")
    }
    return(
        <>
        <button onClick={handleAddToCartClick} className="btn btn-secondary">Add to cart</button>
        </>
    )
}

export default AddToCartButton