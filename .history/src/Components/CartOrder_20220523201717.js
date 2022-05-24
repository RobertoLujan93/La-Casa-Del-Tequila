import { useCartContext } from "./context/CartContext";
import { doc, addDoc, updateDoc, collection, getFirestore, writeBatch } from "firebase/firestore";

const CartOrder = () => {
  const { cart, cartTotal } = useCartContext();

  const saveOrder = async () => {
    const buyer = {
      name: "Toro Rodriguez",
      phone: "+525524674528",
      email: "toro27@gmail.com",
    };
    const cartFiltered = cart.map(({ id, title }) => ({ id, title }));
    const orderToSave = {
      buyer: buyer,
      items: cartFiltered,
      total: cartTotal(),
    };
    console.log(orderToSave);
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");

    const response = await addDoc(ordersCollection, orderToSave);
    console.log(response.id);
  };

	const updateOrder = async () => {
		const docId = "
    pP7qQWTMMMd1PkbsxVyF"

		const db = getFirestore();
		const orderDoc = doc (db,"orders", docId)
		const response = await updateDoc (orderDoc, {total:2000})
		console.log (response)
	}

	const batchUpdate = () => {
		const db = getFirestore();
		const batch = writeBatch(db)

		const doc1 = doc (db, "orders", "lH32uvkcgjfVmEIBT9Ji")
		batch.update (doc1, {total:2500})

		const doc2 = doc (db, "orders", "aHXJ2fXRgbuUHXQWGSHX")
		batch.update (doc2, {total:2500})

		batch.commit()
	}

  return (
    <div>
      <button
        className="btn mt-8 text-black bg-red-600 hover:text-black hover:bg-white"
        onClick={saveOrder}
      >
        Pagar
      </button>
			<button
        className="btn mt-8 text-black bg-red-600 hover:text-black hover:bg-white"
        onClick={updateOrder}
      >
        Actualizar Orden
      </button>
			<button
        className="btn mt-8 text-black bg-red-600 hover:text-black hover:bg-white"
        onClick={batchUpdate}
      >
        Batch
      </button>
    </div>
  );
};

export default CartOrder;
