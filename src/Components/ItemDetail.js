import { useState } from "react";
import { useCartContext } from "./context/CartContext";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail = (props) => {
  const { title, price, pictureUrl, stock, description } = props.tequila;
  const [terminar, setTerminar] = useState(false);
  const { addItem } = useCartContext();

  function onAdd(count) {
    setTerminar(true);
    addItem(props.tequila, count);
  }

  return (
    /* Contenedor principal */
    <div className="w-10/12 md:w-3/4 lg:w3/4 bg-white mb-7 font-fredericka">
      <div className="flex flex-col items-center justify-center max-w-full mx-auto lg:flex-row lg:max-w-7xl lg:items-star">
        {/* Imagen */}
        <div className="relative overflow-hidden group md:w-2/3 lg:w-1/3">
          <img src={pictureUrl} alt="Imagen de Tequila" />
        </div>
        {/* Info del item */}
        <div className="w-full px-6 lg:py-6 lg:w-1/2">
          <h1 className="mb-3 text-xl font-bold text-zinc-900">{title}</h1>
          <p className="text-lg font-bold text-zinc-900">${price}</p>
          <hr className="border-zinc-900 my-3 w-full mx-auto" />
          <p className="text-base font-bold text-gray-800">{description}</p>
          <hr className="border-zinc-900 mt-3 w-full mx-auto" />
          <div className="flex justify-center">
            {/* Habilitar el botón para ir al carrito */}
            {terminar ? (
              <Link
                to="/cart"
                className="btn my-3 text-white bg-zinc-900 hover:text-zinc-900 hover:bg-white text-xs font-bold rounded transition-all duration-500"
              >
                Terminar Compra
              </Link>
            ) : (
              <ItemCount stock={stock} initial={1} onAdd={onAdd} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
