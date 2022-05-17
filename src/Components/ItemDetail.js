import { useState } from "react";
import { useCartContext } from "./context/CartContext";
import {Link} from "react-router-dom";
import ItemCount from "./ItemCount";


const ItemDetail = (props) => {

  const {title,price,pictureUrl,stock, description} = props.tequila
  const [terminar, setTerminar] = useState(false)
  const {addItem} = useCartContext()

  function onAdd (count) {
    setTerminar (true)
    addItem(props.tequila, count)
  };

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={pictureUrl} alt="Imagen de Tequila" />
      </figure>
      <div className="card-body">
        <h2 className="text-center text-xl">{title}</h2>
        <h4 className="text-center font-bold text-xl">{price}</h4>
				<h4 className="text-center text-xl">{description}</h4>
        {terminar ? (
          <Link to="/cart" className="btn mx-32 mt-4 text-white bg-black hover:text-black hover:bg-white">
            Terminar Compra
          </Link>
        ) : (
        <ItemCount stock = {stock} initial = {1} onAdd= {onAdd}/>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
