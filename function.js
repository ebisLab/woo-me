export const getFloatval =(string)=>{
    let floatValue = string.match( /[+-]?\d+(\.\d+)?/g )[0];
 return (null !== floatValue)? parseFloat( parseFloat( floatValue ).toFixed(2) ) : '';
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
    console.log("create new prod", parseFloat((productPrice * qty).toFixed(2)))
    return{
        productId: product.productId,
        image:product.image,
        name:product.name,
        price:productPrice,
        qty: qty,
        totalPrice: parseFloat((productPrice * qty))
    }
}

export const updateCart= (existingCart, product, qtyToBeAdded, newQty=false)=>{
    const updatedProducts = getUpdatedProducts(existingCart.products, product, qtyToBeAdded, newQty);
    const addPrice = (total, item)=>{
        console.log("ADDING PRICE", total.totalPrice)
        // console.log("adding ITEM price", item.totalPrice)
        total.totalPrice += item.totalPrice;
        total.qty+= item.qty

        return total
    }

    //loop thtrough the update produt array and add the totalPrice of each item to get the totalPrice.
    console.log("updated products before reduce",updatedProducts)

    let total = updatedProducts.reduce(addPrice, {totalPrice:0, qty:0})

    console.log("updated cart", total.totalPrice)
    console.log("total so far", total)
    //updated card
    const updatedCart ={
        products: updatedProducts,
        totalProductsCount: parseInt(total.qty),
        totalProductsPrice: parseFloat(total.totalPrice)

    }
    localStorage.setItem('woo-next-cart', JSON.stringify(updatedCart))
    return updatedCart
}

//get updated products array
//updated the products if it exists
//and add the new product to existing cart

export const getUpdatedProducts =(existingProductsInCart, product, qtyToBeAdded, newQty=false)=>{
    //does product already exist in cart
    const productExistsIndex = isProductInCart(existingProductsInCart, product.productId)

    //if product exists (index of that product is found in the array), update the product qty and total price

    if(-1 <productExistsIndex){
        let updatedProducts = existingProductsInCart;
        let updatedProduct = updatedProducts[productExistsIndex];

        //if we have the new qty of the product available, set that else add tohe qtyTobeadded
updatedProduct.qty =(newQty)?parseInt(newQty):parseInt(updatedProduct.qty+qtyToBeAdded);
updatedProduct.totalPrice = parseFloat(updatedProduct.price * updatedProduct.qty).toFixed(2)
   return updatedProducts
}else{
    //if it doesnt exist, it's a new product
    let productPrice = getFloatval(product.price);
    const newProduct = createNewProduct(product, productPrice, qtyToBeAdded);
    existingProductsInCart.push(newProduct)

    return existingProductsInCart;
}

}

//return indexs of the product if it exists

export const isProductInCart=(existingProductsInCart, productId)=>{
    const returnItemThatExists = (item, index)=>{
        if(productId === item.productId){
            return item;
        }

    }
    const newArray = existingProductsInCart.filter(returnItemThatExists);
    return existingProductsInCart.indexOf(newArray[0]); //will give me the position

}