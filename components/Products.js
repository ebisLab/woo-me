import Link from 'next/link'
import AddToCartButton from './cart/AddToCartButton'

const Products = (props)=>{
    const {products}=props
    return (
  
        <div className="card mb-3 md-4" 
        // style={{width:"300px", margin:"20px", display:"inline-flex"}}
        >
  <h3 className="card-header text-center">{products.name}</h3>
  <Link as={`/product/${products.slug}-${products.productId}`} href={`/product?slug=${products.slug}-${products.productId}`}>
    <a>
    <img src={products.image.sourceUrl} alt={products.name} 
  />
    </a>

  </Link>

  
  <div className="card-body">
    <h6 className="card-subtitle mb-3">{products.price}</h6>
    <AddToCartButton product={products} />
    
    {/* <div className="text-center">
    <button type="button" className="btn btn-success text-center">View</button>

      </div> */}

  </div>


</div>

    )

}
export default Products