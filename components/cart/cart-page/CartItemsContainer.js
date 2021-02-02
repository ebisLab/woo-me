import { useContext } from "react"
import { removeItemFromCart } from "../../../function"
import { AppContext } from "../../context/AppContext"
import CartItem from "./CartItem"

const CartItemsContainer =()=>{
    const [cart, setCart]=useContext(AppContext)
    const handleRemoveProductClick=(e, productId)=>{
        console.log("clicky me")
        const updateCart = removeItemFromCart(productId)
        //update contex api
        setCart(updateCart)
    }
    return(
        <div>
            {cart ?(
                <div className="woo-next-cart-wrapper container">
                    <h1 className="woo-next-cart-heading mt-5">Cart</h1>
                    <table className="table table-hover">
                        <thead>
                            <tr className="woo-next-cart-header-container">
                                <th className="woo-next-cart-heading" scope="col"/>
                                <th className="woo-next-cart-heading" scope="col"/>
                                <th className="woo-next-cart-heading" scope="col">Product</th>
                                <th className="woo-next-cart-heading" scope="col">Price</th>
                                <th className="woo-next-cart-heading" scope="col">Quantity</th>
                                <th className="woo-next-cart-heading" scope="col">Total</th>

                            </tr>
                        </thead>
                        <tbody>
                            {cart.products.length && (cart.products.map(item=>(
                                <CartItem
                                key={item.productId}
                                item={item}
                                setCart={setCart}
                                handleRemoveProductClick={(e)=>handleRemoveProductClick(e, item.productId)}
                                />
                            )))}
                        </tbody>
                    </table>
                    {/* Cart total */}

                    <div className="row woo-next-cart-total-container">
                        <div className="col-6">
                            <h2>Cart Total</h2>
                            <table className="table table-hover">
                                <tbody>
                                    <tr className="table-light">
                                        <td className="woo-next-cart-element-total">SubTotal</td>
                                        <td className="woo-next-cart-element-amt">{cart.totalProductsPrice}</td>
                                    </tr>
                                    <tr className="table-light">
                                        <td className="woo-next-cart-element-total">Total</td>
                                        <td className="woo-next-cart-element-amt">{cart.totalProductsPrice}</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            ):''}
        </div>
    )
}

export default CartItemsContainer