import { useState } from "react";
import { useAppContext } from "./context/AppContext";
import { useCartContext } from "./context/CartContext";

const ItemCount = ({ stock, initial, onAdd, id }) => {
  const [count, setCount] = useState(initial);

  const {addItem} = useCartContext()
  const {tequilas} = useAppContext()
  
  const resHandler = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };
  const addHandler = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleClick = (id, cantidad) => {
    const findTequila = tequilas.find ((producto) => producto.id === id)

    if (!findTequila) {
      alert ("Error en la base de datos")
      return
    }
    addItem(findTequila, cantidad)
    onAdd(count)
  }

  return (
    <div>
      <div className="flex justify-evenly mt-2 bg-gray-200 rounded-xl p-4">
        <button onClick={resHandler}>-</button>
        <span>{count}</span>
        <button onClick={addHandler}>+</button>
      </div>
      <button onClick = {() => handleClick (id,count) } className="btn mx-32 mt-4 text-white bg-black hover:text-black hover:bg-white">Agregar al Carrito</button>
    </div>
  );
};

export default ItemCount;
