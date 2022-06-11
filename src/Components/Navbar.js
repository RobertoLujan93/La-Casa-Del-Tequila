import { useState } from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const Navbar = () => {
  let [open, setOpen] = useState(false);

  return (
    <div className="lg:sticky flex flex-wrap items-center justify-between p-6 bg-white relative z-50">
      <div className="block md:hidden z-auto cursor-pointer">
        <button
          onClick={() => setOpen(!open)}
          id="button"
          className="flex items-center px-3 py-2 text-zinc-900 border-2 border-zinc-900 rounded"
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="flex-1">
        <li className="text-xl font-bold text-center md:text-left md:ml-7 lg:ml-7 lg:text-left list-none font-fredericka">
          <Link to="/">La Casa del Tequila</Link>
        </li>
      </div>
      {/* Menu responsive */}
      <div
        id="menu"
        className={`w-full left-0 bg-white z-10 absolute md:static block md:flex md:items-center md:w-auto transition-all duration-500 ease-in ${
          open
            ? "top-[76px] opacity-100"
            : "top-[-490px] md:top-0 md:opacity-100 opacity-0"
        }`}
      >
        <hr className="border-zinc-900 w-full mx-auto md:hidden" />
        <li className="effect block px-3 py-3 text-center text-base font-bold text-zinc-900 font-fredericka">
          <Link to="/tequilas/reposados">Tequilas Reposados</Link>
        </li>
        <li className="effect block px-3 py-3 text-center text-base font-bold text-zinc-900 font-fredericka">
          <Link to="/tequilas/blancos">Tequilas Blancos</Link>
        </li>
        <li className="effect effect3 block px-3 py-3 text-center text-base font-bold text-zinc-900 font-fredericka">
          <Link to="/tequilas/añejos">Tequilas Añejos</Link>
        </li>
      </div>
      {/* Icono del carrito */}
      <div className="inline-block px-2 py-2 text-sm leading-none text-zinc-900 rounded hover:border-transparent lg:mt-0">
        <CartWidget />
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
