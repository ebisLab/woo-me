import {useState} from 'react';

const CartItem=({item, setCart, handleRemoveProductClick})=>{
    const [productCount, setProductCount]=useState(item.qty)
    const handleQtyChange=(e)=>{
        if(process.browser){ //since info is coming from the server side, make sure it's loaded in the client
            // const newQty = e.target.value
            setProductCount(e.target.value)

            //update the cart
        }
        

    }

    return(
        <tr className="woo-next-cart-item" key={item.productId}>
            {/* cross icon image */}
            <th className="woo-next-cart-element woo-next-cart-el-close">
                <span className="woo-next-cart-close-icon" onClick={(event)=>handleRemoveProductClick()}>
                    <i className="fa fa-times-circle"></i>
                </span>
            </th>
            {/* image */}
            <td className="woo-next-cart-element">
                <img src={item.image.sourceUrl} srcSet={item.image.sourceUrl} width="64px" alt={item.image.title} />
            </td>

            {/* name */}
            <td className="woo-next-cart-element">{item.name}</td>

            {/* price */}
            <td className="woo-next-cart-element">{item.price.toFixed(2)}</td>

            {/* quantity */}
            <td className="woo-next-cart-element">
                <input 
 
                type="number"
                value={productCount}
                name=""
                min="1"
                className="woo-next-cart-qty-input"
                onChange={handleQtyChange}/>
            </td>

            {/* total */}
            <td className="woo-next-cart-element">{parseFloat(item.totalPrice).toFixed(2)}</td>
            {/* <td className="woo-next-cart-element">{item.totalPrice.toFixed(2)}</td> */}


            


        </tr>
    )
}

export default CartItem