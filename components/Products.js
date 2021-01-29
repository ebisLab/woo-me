const Products = (props)=>{
    const {products}=props
    return (
  
        <div className="card mb-3">
  <h3 className="card-header">{products.name}</h3>
  <div className="card-body">
    <h5 className="card-title">${products.price}</h5>
    <h6 className="card-subtitle text-muted">Support card subtitle</h6>
  </div>
  <img src={products.images[0].src} alt={products.name} 
//   style={{height:"200px", width:"100px", display:"block"}}
  />

</div>

    )

}
export default Products