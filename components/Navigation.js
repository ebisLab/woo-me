import Link from 'next/link';
const Navigation =()=>{
return (
<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
<a className="navbar-brand" href="#">WooCommerce Shop</a>
<div className="collapse navbar-collapse" id="navbarColor01">
  <ul className="navbar-nav mr-auto">
    <li className="nav-item active">
      <a className="nav-link" href="#">Home
        {/* <Link>
        <a className="nav-link" href="/">Woo next</a>
        </Link> */}
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Categories</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Pricing</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">My Account</a>
    </li>
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <a className="dropdown-item" href="#">Something else here</a>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item" href="#">Separated link</a>
      </div>
    </li>
  </ul>

</div>

</nav>
)

}

export default Navigation