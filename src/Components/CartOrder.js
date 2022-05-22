import { useEffect } from "react";
import { useCartContext } from "./context/CartContext";
import { Cart } from "./Cart";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const CartOrder = () => {

	const {cart, cartTotal} = useCartContext()

	useEffect(() => {
  
	}, [])

	const saveOrder = async () => {
		const buyer = {
			name : "Toro Rodriguez",
			phone : "+525524674528",
			email : "toro27@gmail.com"
		}
		const cartFiltered = cart.map (({id, title}) => ({id,title}))
		const orderToSave = {
			buyer: buyer,
			items: cartFiltered,
			total: cartTotal()
		}
		console.log(orderToSave);
		const db = getFirestore()
		const ordersCollection = collection (db, "orders")

		const response = await addDoc(ordersCollection, orderToSave)
		console.log(response);
		console.log(response.id);
	}
	


  return (
	<div>
		{/* {cart.length>0?<Cart/>:<h1>No hay carrito de compras</h1>} */}
		<button 
		className="btn mt-8 text-black bg-red-600 hover:text-black hover:bg-white"
		onClick={saveOrder}>
      Pagar
		</button>
	</div>
	)
};


export default CartOrder;
