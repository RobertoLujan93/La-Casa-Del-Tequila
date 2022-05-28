import { useState } from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import { useCartContext } from "./context/CartContext";

const Navbar = () => {
  const {cart} = useCartContext()
  let [open, setOpen] = useState(false)


return (
  <div className=" lg:sticky flex flex-wrap items-center justify-between p-6 bg-white relative z-50 mb-7">
  <div  className="block md:hidden z-auto cursor-pointer">
    <button onClick={() =>setOpen(!open)} id="button" className="flex items-center px-3 py-2 text-zinc-900 hover:border border-zinc-900 rounded ">
      <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div className="flex-1">
    <li className="ml-8 text-base font-bold text-left uppercase list-none" ><Link to='/'>La Casa del Tequila</Link></li>
  </div>
  
  <div id="menu" className={`w-full left-0 bg-white z-10 absolute md:static block md:flex md:items-center md:w-auto transition-all duration-500 ease-in ${open ? 'top-[76px] opacity-100':'top-[-490px] md:top-0 md:opacity-100 opacity-0'}`}>
    <li className="effect block px-3 py-2 text-base font-medium text-zinc-900"><Link to = "/tequilas/reposados">Tequilas Reposados</Link></li>
    <li className="effect block px-3 py-2 text-base font-medium text-zinc-900"><Link to = "/tequilas/blancos">Tequilas Blancos</Link></li>
    <li className="effect effect3 block px-3 py-2 text-base font-medium text-zinc-900"><Link to = "/tequilas/añejos">Tequilas Añejos</Link></li>
  </div>
  <div className="inline-block px-2 py-2 text-sm leading-none text-zinc-900 rounded hover:border-transparent lg:mt-0">
    {cart.length>0 ? <CartWidget /> : <h2 className="hidden">oculto</h2>}
  </div>
  <div >
  </div>
</div>
	)}

export default Navbar