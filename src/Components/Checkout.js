import { useCartContext } from "./context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { cart, cartTotal, clearCart } = useCartContext();
  const [showModal, setShowModal] = useState(false);
  const [orderId, setOrderId] = useState({ id: "" });

  const [buyer, setBuyer] = useState({
    name: "",
    surname: "",
    telephone: "",
    email: "",
    emailConfirm: "",
  });

  // Obtener los datos del formulario
  const inputDatos = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  // Guardar el orden y generar ID
  const saveOrder = async () => {
    const cartFiltered = cart.map(({ id, title, quantity }) => ({
      id,
      title,
      quantity,
    }));
    const orderToSave = {
      buyer: buyer,
      items: cartFiltered,
      total: cartTotal(),
    };
    console.log(orderToSave);
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");

    const response = await addDoc(ordersCollection, orderToSave);
    setOrderId(response);
    console.log(response.id);
  };

  // Regex para email y telephone
  const emailRegex =
    /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  const telephoneRegex =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{1,6}$/im;

  return (
    <>
      <div className="flex flex-col justify-start items-start w-full mt-6 lg:mt-0 mb-3">
        <form className="space-y-6">
          <h2 className="text-white text-xl text-center">Para finalizar la compra, completa el siguiente formulario:</h2>
          <input
            className="px-2 focus:outline-none focus:ring-white focus:border-gray-600 border-b border-gray-200 placeholder-gray-600 py-4 w-full "
            id="name"
            type="text"
            name="name"
            required
            onChange={inputDatos}
            placeholder="Nombre"
          />
          <input
            className="px-2 focus:outline-none focus:ring-white focus:border-gray-600 border-b border-gray-200 placeholder-gray-600 py-4 w-full "
            id="surname"
            type="text"
            name="surname"
            required
            onChange={inputDatos}
            placeholder="Apellido"
          />
          <input
            className="px-2 focus:outline-none focus:ring-white focus:border-gray-600 border-b border-gray-200 placeholder-gray-600 py-4 w-full "
            id="telephone"
            type="tel"
            name="telephone"
            required
            onChange={inputDatos}
            placeholder="Teléfono (insertar como mínimo 7 dígitos)"
          />
          <input
            className="px-2 focus:outline-none focus:ring-white focus:border-gray-600 border-b border-gray-200 placeholder-gray-600 py-4 w-full "
            id="email"
            type="email"
            name="email"
            required
            onChange={inputDatos}
            placeholder="E-mail"
          />
          <input
            className="px-2 focus:outline-none focus:ring-white focus:border-gray-600 border-b border-gray-200 placeholder-gray-600 py-4 w-full "
            id="emailConfirm"
            type="email"
            name="emailConfirm"
            required
            onChange={inputDatos}
            placeholder="Confirmar e-mail"
          />
        </form>

        {buyer.name &&
        buyer.surname &&
        buyer.telephone &&
        buyer.email === buyer.emailConfirm &&
        telephoneRegex.test(buyer.telephone) &&
        emailRegex.test(buyer.email, buyer.emailConfirm) ? (
          // Botón de pago habilitado
          <input
            onClick={() => {
              saveOrder();
              setShowModal(true);
            }}
            className=" focus:outline-none text-white bg-gray-700 focus:ring-transparent w-full text-center py-3 cursor-pointer mt-6"
            type="submit"
            value="Proceder al pago"
          />
        ) : (
          // Botón de pago deshabilitado
          <input
            className=" focus:outline-none text-white bg-gray-400 focus:ring-transparent w-full text-center py-3 mt-6"
            type="submit"
            value="Proceder al pago"
            disabled
          />
        )}
      </div>

      {/* Contenedor modal final */}
      <div
        className={`${
          showModal ? "flex" : "hidden"
        } inset-0 fixed w-full h-full bg-gray-800`}
      >
        <div className="container mx-auto justify-center items-center px-4 md:px-10 py-20 place-self-center">
          <div className="bg-white px-3 md:px-4 py-12 flex flex-col justify-center items-center">
            <h2 className={"text-center md:w-9/12 lg:w-7/12"}>
              ¡Muchas gracias por tu compra {buyer.name.toUpperCase()}!
            </h2>
            <p className={"mt-6 text-center md:w-9/12 lg:w-7/12 "}>
              Enviaremos un mail a {buyer.email.toLowerCase()} con tu orden de
              compra ID: {orderId.id}. ¡Te agradecemos por haber escogido La Casa del Tequila y esperamos que nos visites de nuevo pronto!
            </p>
            <Link to="/" className="mt-6 flex justify-center">
              <button
                onClick={clearCart}
                className={
                  " focus:outline-none text-white bg-gray-700 focus:ring-transparent w-40 text-center py-3 cursor-pointer"
                }
              >
                Volver al inicio
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
