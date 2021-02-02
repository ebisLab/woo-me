import { useContext } from "react"
import { AppContext } from "../../context/AppContext"
import CartItem from "./CartItem"

const CartItemsContainer =()=>{
    const [cart, setCart]=useContext(AppContext)
    const handleRemoveProductClick=()=>{
        console.log("clicky me")
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
                                handleRemoveProductClick={handleRemoveProductClick}
                                />
                            )))}
                        </tbody>
                    </table>
                </div>
            ):''}
        </div>
    )
}

export default CartItemsContainer