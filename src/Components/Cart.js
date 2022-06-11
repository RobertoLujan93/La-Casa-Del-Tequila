import { Link } from "react-router-dom";
import { useCartContext } from "./context/CartContext";
import { RiDeleteBinFill } from "react-icons/ri";

const Cart = () => {
  const { cart } = useCartContext();
  const { removeItem } = useCartContext();
  const { clearCart, cartTotal } = useCartContext();

  return (
    <>
      {cart.length === 0 ? (
        /* Carrito vacío */
        <div className=" min-h-[300px] grid place-content-center my-6 bg-white font-fredericka w-11/12 md:w-3/4 lg:w-3/4 mx-auto pb-7">
          <div className="mx-5 text-center">
            <img
              className="my-7 rounded"
              src="https://img.freepik.com/free-photo/assortment-with-delicious-mezcal-beverage_23-2148935245.jpg?t=st=1654660044~exp=1654660644~hmac=9698932eb27b3b4a8b960779c50b31df6b6e3172946b727df643f828b380e14d"
            ></img>
            <p className="font-bold">
              ¡Tu carrito está vacío! ¡ Te invitamos a conocer nuestros tequilas
              !
            </p>
            <Link
              to="/"
              className="btn mt-5 px-3 py-2 text-white bg-zinc-900 hover:text-zinc-900 hover:bg-white text-xs font-bold rounded transition-all duration-500 font-fredericka"
            >
              Ver productos
            </Link>
          </div>
        </div>
      ) : (
        /* Carrito con productos */
        <div className="font-fredericka bg-white my-6 w-full mx-auto">
          <h2 className="self-center py-8 text-center text-zinc-900 underline text-xl md:text-2xl lg:text-2xl font-bold">
            Carrito de compras
          </h2>
          <table className="mx-auto w-full">
            <thead>
              <tr className="border-b border-zinc-900">
                <th className="items-center text-zinc-900 text-xs md:text-lg lg:text-lg">
                  Producto
                </th>
                <th className="items-center text-zinc-900 text-xs md:text-lg lg:text-lg">
                  Precio
                </th>
                <th className="items-center text-zinc-900 text-xs md:text-lg lg:text-lg">
                  Cantidad
                </th>
                <th className="items-center text-zinc-900 text-xs md:text-lg lg:text-lg">
                  Subtotal
                </th>
                <th className="items-center text-zinc-900 text-xs md:text-lg lg:text-lg">
                  Eliminar
                </th>
              </tr>
            </thead>
            {cart.map((item) => (
              <thead key={item.id}>
                <tr className="border-b border-zinc-900">
                  <th className="flex flex-col items-center ">
                    <img
                      className="h-36 w-36"
                      src={item.pictureUrl}
                      alt="Imagen de producto"
                    />
                    <div className="flex flex-col ">
                      <p className="text-zinc-900 text-xs md:text-lg lg:text-lg  ">
                        {item.title}
                      </p>
                    </div>
                  </th>
                  <th className="text-zinc-900 text-sm md:text-lg lg:text-lg">
                    ${item.price}
                  </th>
                  <th className="text-zinc-900 text-sm md:text-lg lg:text-lg">
                    {item.quantity}
                  </th>
                  <th className="text-zinc-900 text-sm md:text-lg lg:text-lg">
                    ${item.quantity * item.price}
                  </th>
                  <th>
                    <button
                      className="text-zinc-900 text-sm md:text-lg lg:text-lg"
                      onClick={() => removeItem()}
                    >
                      <RiDeleteBinFill />
                    </button>
                  </th>
                </tr>
              </thead>
            ))}
          </table>
          <div className="flex flex-col justify-between w-4/5 mx-auto mt-2 mb-2 md:flex-row">
            <button
              className="btn capitalize my-3 text-white bg-zinc-900 hover:text-zinc-900 hover:bg-white text-base md:text-xl lg:text-xl font-bold rounded transition-all duration-500 w-full md:w-1/3"
              onClick={() => clearCart()}
            >
              Vaciar Carrito
            </button>

            <div className="flex flex-col self-start w-full md:w-2/5">
              <div className="flex flex-row justify-between my-2 text-sm md:text-lg lg:text-lg font-bold ">
                <p>Cantidad de productos:</p>
                <p>{cart.reduce((acc, ite) => acc + ite.quantity, 0)}</p>
              </div>
              <div className="flex flex-row justify-between my-2 text-base md:text-xl lg:text-xl font-bold ">
                <p className="underline">Total:</p>
                <p>${cartTotal()}</p>
              </div>
              <div className="flex flex-row justify-between my-2 text-sm md:text-lg lg:text-lg font-bold">
                <p>¡Envío gratis!</p>
              </div>
              <Link
                to="/checkout"
                className="btn capitalize mt-3 mb-6 text-white bg-zinc-900 hover:text-zinc-900 hover:bg-white text-base md:text-xl lg:text-xl font-bold rounded transition-all duration-500"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
