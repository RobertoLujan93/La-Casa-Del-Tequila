import { useCartContext } from "./context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/solid";

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
      <div className="flex justify-center items-center mx-auto xl:mx-auto px-10 my-6 xl:px-20 bg-white">
        <div className="flex w-full flex-col justify-center items-center">
          {/* Detalles de compra */}
          <h1 className="self-center py-8 text-center text-zinc-900 underline text-xl md:text-2xl lg:text-2xl font-bold font-fredericka">
            Checkout
          </h1>
          <div className="flex w-full flex-col lg:flex-row justify-start items-start">
            <div className="flex flex-col self-start w-full md:w-1/2 mr-6">
              <h2 className="font-semibold text-base text-zinc-900 font-fredericka">
                Resumen de tu compra
              </h2>
              <div className="flex flex-col border border-zinc-900 p-4 mt-6">
                <div className="flex flex-row justify-between font-bold text-sm text-zinc-900 font-fredericka">
                  <p className="mb-3">Cantidad de productos:</p>
                  <p>{cart.reduce((acc, item) => acc + item.quantity, 0)}</p>
                </div>
                <div className="flex flex-row justify-between font-bold text-sm text-zinc-900 font-fredericka">
                  <p>Costo de envío:</p>
                  <p>¡Envío gratis!</p>
                </div>
                <div className="flex flex-row justify-between font-semibold mt-10 text-base text-zinc-900 font-fredericka">
                  <p>Total:</p>
                  <p>${cartTotal()}</p>
                </div>
              </div>
              {/* Regresar al carrito */}
              <Link
                to="/cart"
                className="font-bold text-sm text-zinc-900 tracking-wide leading-normal flex flex-row items-center mt-3 lowercase font-fredericka"
              >
                <ArrowLeftIcon className="h-4 w-4 mr-1" />
                Volver al carrito
              </Link>
            </div>
            {/* Formulario */}
            <div className="flex flex-col justify-start items-start w-full lg:ml-5 mt-6 lg:mt-0 mb-10">
              <form className="space-y-6">
                <h2 className="font-bold text-base text-zinc-900 font-fredericka">
                  Favor de completar los siguientes datos para recibir la
                  factura:
                </h2>
                <input
                  className="px-2 focus:outline-1 focus:ring-white border-2 border-zinc-300 placeholder-gray-600 py-4 w-full font-bold text-sm text-gray-600 tracking-wide leading-normal font-fredericka"
                  id="name"
                  type="text"
                  name="name"
                  required
                  onChange={inputDatos}
                  placeholder="Nombre"
                />
                <input
                  className="px-2 focus:outline-1 focus:ring-white border-2 border-zinc-300 placeholder-gray-600 py-4 w-full font-bold text-sm text-gray-600 tracking-wide leading-normal font-fredericka"
                  id="surname"
                  type="text"
                  name="surname"
                  required
                  onChange={inputDatos}
                  placeholder="Apellido"
                />
                <input
                  className="px-2 focus:outline-1 focus:ring-white border-2 border-zinc-300 placeholder-gray-600 py-4 w-full font-bold text-sm text-gray-600 tracking-wide leading-normal font-fredericka"
                  id="telephone"
                  type="tel"
                  name="telephone"
                  required
                  onChange={inputDatos}
                  placeholder="Teléfono"
                />
                <input
                  className="px-2 focus:outline-1 focus:ring-white border-2 border-zinc-300 placeholder-gray-600 py-4 w-full font-bold text-sm text-gray-600 tracking-wide leading-normal font-fredericka"
                  id="email"
                  type="email"
                  name="email"
                  required
                  onChange={inputDatos}
                  placeholder="E-mail"
                />
                <input
                  className="px-2 focus:outline-1 focus:ring-white border-2 border-zinc-300 placeholder-gray-600 py-4 w-full font-bold text-sm text-gray-600 tracking-wide leading-normal font-fredericka"
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
                  // Botón habilitado
                  <input
                    onClick={() => {
                      saveOrder();
                      setShowModal(true);
                    }}
                    className="btn text-base font-bold select-none rounded w-full text-white bg-zinc-900 hover:text-zinc-900 hover:bg-white transition-all duration-500 text-center py-3 cursor-pointer mt-6 mb-3 font-fredericka"
                    type="submit"
                    value="Proceder al pago"
                  />
                ) : (
                  // Botón deshabilitado
                  <input
                    className="text-base font-bold  select-none rounded w-full text-white bg-zinc-900 text-center py-3 mt-6 mb-3 font-fredericka"
                    type="submit"
                    value="Favor de llenar los datos"
                    disabled
                  />
                )}
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      <div
        className={`${
          showModal ? "flex" : "hidden"
        } inset-0 fixed w-full h-full bg-zinc-900`}
      >
        <div className="container mx-auto justify-center items-center px-4 md:px-10 py-20 place-self-center">
          <div className="bg-white px-3 md:px-4 py-12 flex flex-col justify-center items-center">
            <h2 className="text-center md:w-9/12 lg:w-7/12 font-medium text-lg text-zinc-900 tracking-wider leading-tight uppercase">
              ¡Muchas gracias por tu compra {buyer.name.toUpperCase()}!
            </h2>
            <p className={"mt-6 text-center md:w-9/12 lg:w-7/12 "}>
              Enviaremos un mail a {buyer.email.toLowerCase()} con tu orden de
              compra ID: {orderId.id}. ¡Te agradecemos por haber escogido La
              Casa del Tequila y esperamos que nos visites de nuevo pronto!
            </p>
            <Link to="/" className="mt-6 flex justify-center">
              <button
                onClick={clearCart}
                className="btn font-medium text-xxs leading-normal uppercase select-none text-white bg-zinc-900 hover:text-zinc-900 hover:bg-white rounded w-40 text-center py-3 cursor-pointer transition-all duration-500"
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
