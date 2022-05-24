import React, {createContext, useContext, useState} from "react";

const CartContext = createContext()
export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {

	const [cart,setCart] = useState([])

	const isInCart = (id) => cart.find (producto => producto.id ===id)

	// Agregar item al carrito
	const addItem = (producto,cantidad) => {
		const newCart = [...cart]

		const productoIsInCart = isInCart (producto.id)
		if (productoIsInCart) {
			newCart[newCart.findIndex(producto => producto.id === productoIsInCart.id)].quantity+=cantidad
			setCart(newCart)
			return
		}
		producto.quantity = cantidad
		setCart ([...newCart,producto])
	}

	// Borrar item del carrito
	const removeItem = (producto) => {
		const newCart = [...cart]

		const productoIsInCart = isInCart(producto.id)
		if (!productoIsInCart) {
			return
		}
		const deleteProduct = newCart.filter((item) => item.id !==producto.id)
		setCart (deleteProduct)
	}

	// Vaciar el carrito
	const clearCart = () => setCart([])

	// Total del carrito
	const cartTotal = () => {
		let totalCart = 0
		cart.forEach (item => totalCart += (item.price*item.quantity))
		return totalCart
	}

	console.log (cart)

    return <CartContext.Provider 
	value={{cart, addItem, removeItem, clearCart, setCart, cartTotal}}>
		{children}
	</CartContext.Provider>
};

export default CartContextProvider;
