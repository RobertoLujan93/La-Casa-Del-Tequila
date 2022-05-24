import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import { useCartContext } from "./context/CartContext";

const Navbar = () => {
  const {cart} = useCartContext()

	return (
<div className="navbar bg-base-100 mb-5">
  <div>
    <li className="btn btn-ghost normal-case text-xl"><Link to = "/">Logo</Link></li>
  </div>
  <div className="flex-1 justify-evenly">
    <li className="list-none"><Link to = "/tequilas/reposados">Tequilas Reposados</Link></li>
    <li className="list-none"><Link to = "/tequilas/blancos">Tequilas Blancos</Link></li>
    <li className="list-none"><Link to = "/tequilas/añejos">Tequilas Añejos</Link></li>
  </div>
  <div className="flex-none">
    {cart.length>0?<CartWidget/>:<h1 className="hidden"></h1>}
  </div>
</div>
	)}

export default Navbar
