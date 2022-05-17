import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);
  
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

  const handleClick = (count) => {
    onAdd(count)
  }

  return (
    <div>
      <div className="flex justify-evenly mt-2 bg-gray-200 rounded-xl p-4">
        <button onClick={resHandler}>-</button>
        <span>{count}</span>
        <button onClick={addHandler}>+</button>
      </div>
      <button onClick = {() => handleClick (count) } className="btn mx-32 mt-4 text-white bg-black hover:text-black hover:bg-white">Agregar al Carrito</button>
    </div>
  );
};

export default ItemCount;
