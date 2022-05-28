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
      <div className="flex justify-evenly mt-2 text-white bg-zinc-900 rounded p-2">
        <button onClick={resHandler}>-</button>
        <span>{count}</span>
        <button onClick={addHandler}>+</button>
      </div>
      <button onClick = {() => handleClick (count) } className="btn rounded my-6 mx-12 text-white bg-zinc-900 hover:text-zinc-900 hover:bg-white">Agregar al Carrito</button>
    </div>
  );
};

export default ItemCount;
