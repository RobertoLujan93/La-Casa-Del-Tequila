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
    <section className="product rounded-md">
    <div className="product__photo">
          <img src={pictureUrl} alt="imagen de tequila" className="rounded-tl-md"/>
    </div>
    <div className="product__info">
      <div className="title">
      <h2 className="">{title}</h2>
      </div>
      <div className="price">
      <h4 className="font-bold text-xl text-zinc-900">${price}</h4>
      </div>
      <h4 className="py-3 text-base text-zinc-900">{description}</h4>
      {terminar ? (
    <Link to="/cart" className="btn rounded my-2 mx-14 text-white bg-zinc-900 hover:text-zinc-900 hover:bg-white">
      Terminar Compra
    </Link>
  ) : (
  <ItemCount stock = {stock} initial = {1} onAdd= {onAdd}/>
  )}
    </div>
  </section>
  );
};

export default ItemDetail;