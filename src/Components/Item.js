import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

function onAdd (count) {
    alert (`Se agregaron ${count} productos al carrito`)
  };

const Item = (props) => {
  const {id,title,price,pictureUrl,stock} = props.item
  return (
  <div className="card card-compact w-96 bg-base-100 shadow-xl">
    <figure><img src={pictureUrl} alt="Imagen de Tequila" /></figure>
    <div className="card-body">
      <h2 className="text-center text-xl">{title}</h2>
      <h4 className="text-center font-bold text-xl">{price}</h4>
      <ItemCount stock = {stock} initial = {1} onAdd= {onAdd}/>
      <Link to= {`/tequila/${id}`} className="btn mx-32 mt-4 text-white bg-black hover:text-black hover:bg-white">Ver Detalle</Link>
    </div>
  </div>
  )}
export default Item;

