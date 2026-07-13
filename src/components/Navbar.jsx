import './navbar.css'
function Navbar() {
  return (
    <div>
      <h2>Farmer to Customer</h2>

      <nav>
        <a href="/">Home</a> |
        <a href="/login"> Login</a> |
        <a href="/register"> Register</a> |
        <a href="/products"> Products</a>|
        <a href="/Farmer"> Farmer</a> |
        <a href="/Customer"> Customer</a> 
      </nav>

      <hr />
    </div>
  );
}

export default Navbar;