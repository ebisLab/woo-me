const Products = (props)=>{
    const {products}=props
    return (
  
        <div className="card mb-3 md-4" style={{width:"300px", margin:"20px", display:"inline-flex"}}>
  <h3 className="card-header text-center">{products.name}</h3>
  <img src={products.image.sourceUrl} alt={products.name} 
  />
  <div className="card-body">
    <h6 className="card-subtitle text-muted">{products.price}</h6>
    
    <div className="text-center">
    <button type="button" className="btn btn-success text-center">View</button>

      </div>

  </div>


</div>

    )

}
export default Products