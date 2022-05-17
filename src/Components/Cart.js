import { Link } from "react-router-dom";
import { useCartContext } from "./context/CartContext";

const Cart = () => {
	const { cart } = useCartContext();
  const { removeItem } = useCartContext()
  const { clearCart} = useCartContext()

  return <div className="container mx-auto">
		<h1 className="text-white text-center text-5xl p-4 mb-6">Carrito de compras</h1>
		{
      cart.length === 0? (
        <div className="h-[calc(100vh-300px)] grid place-content-center">
          <p className="text-white text-xl">Tu carrito está vacío</p>
          <Link to="/" className="btn mt-12 text-black bg-red-600 hover:text-black hover:bg-white">Ver productos</Link>
        </div>
      ) : (
      <div className="flex justify-center">
        <button className="btn text-black bg-red-600 hover:text-black" onClick={clearCart}>Vaciar carrito</button>
      </div>)
    }
	{cart.map((item) => (
        <div key={item.id} className="flex flex-row p-4 items-center justify-center gap-4">
          <img src={item.pictureUrl}  alt={item.title} />
          <div>
            <h2 className="text-white text-xl">{item.title}</h2>
            <p className="text-white text-xl"><span>Cantidad: </span>{item.quantity}</p>
						<button className="btn mt-12 text-black bg-red-600 hover:text-black" onClick={()=>removeItem(item)}>Eliminar</button>
          </div>
        </div>
      ))}  
	</div>;
};

export default Cart;
