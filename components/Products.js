const Products = (props)=>{
    const {products}=props
    return (
  
        <div className="card mb-3 mr-4">
  <h3 className="card-header text-center">{products.name}</h3>
  <img src={products.image.sourceUrl} alt={products.name} 
//   style={{height:"200px", width:"100px", display:"block"}}
  />
  <div className="card-body">
    <h6 className="card-subtitle text-muted">${products.price}</h6>
    
    <div className="text-center">
    <button type="button" className="btn btn-success text-center">View</button>

      </div>

  </div>


</div>

    )

}
export default Products