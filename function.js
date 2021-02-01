export const getFloatval =(string)=>{
    console.log("string", string)

    let floatValue = string.match( /[+-]?\d+(\.\d+)?/g )[0];
	return (null !== floatValue)? parseFloat( parseFloat( floatValue ).toFixed( 2 ) ) : '';
}

export const addFirstProduct=(product)=>{
    console.log('heey from inside the addproduct')
    let productPrice = getFloatval(product.price)


    //if no item in the cart, create an n empty array and pushe the item

    let newCart ={
        products:[],
        totalProductsCount:1, 
        totalProductsPrice:productPrice
    }

    const newProduct = createNewProduct(product, productPrice, 1); //qty is 1 b/c its the first time we're creating it
newCart.products.push(newProduct);
localStorage.setItem('woo-next-cart', JSON.stringify(newCart));
return newCart
}

//CREATE A NEW PRODUCT OBJECT


export const createNewProduct =(product, productPrice, qty)=>{
    return{
        productId: product.productId,
        image:product.image,
        name:product.name,
        price:productPrice,
        qty: qty,
        totalPrice: parseFloat((productPrice * qty).toFixed(2))
    }
}
