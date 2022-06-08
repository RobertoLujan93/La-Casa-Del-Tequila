import { useState } from "react";
import { HiOutlineMinus } from "react-icons/hi";
import { HiOutlinePlus } from "react-icons/hi";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  /* Restar cantidad */
  const resHandler = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };
  /* Sumar cantidad */
  const addHandler = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  /* Agregar producto con cantidad indicada */
  const handleClick = (count) => {
    onAdd(count);
  };

  return (
    <>
      <div className="flex items-center gap-4 mt-4">
        <div className="flex flex-row space-x-4 md:mr-8 lg:mr-8">
          <button
            className="rounded p-2 bg-zinc-900 text-white"
            onClick={resHandler}
          >
            <HiOutlineMinus />
          </button>
          <label className="p-2 font-bold">{count}</label>
          <button
            className="rounded p-2 bg-zinc-900 text-white"
            onClick={addHandler}
          >
            <HiOutlinePlus />
          </button>
        </div>
        <div>
          <button
            onClick={() => handleClick(count)}
            className="btn my-3 text-white bg-zinc-900 hover:text-zinc-900 hover:bg-white text-xs font-bold rounded transition-all duration-500"
          >
            Agregar al Carrito
          </button>
        </div>
      </div>
    </>
  );
};

export default ItemCount;
