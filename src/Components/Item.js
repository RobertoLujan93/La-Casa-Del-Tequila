import { Link } from "react-router-dom";

const Item = (props) => {
  const {id,title,price,pictureUrl} = props.item
  return (
  <div className="card card-compact w-96 bg-base-100 shadow-xl">
    <figure><img src={pictureUrl} alt="Imagen de Tequila" /></figure>
    <div className="card-body">
      <h2 className="text-center text-xl">{title}</h2>
      <h4 className="text-center font-bold text-xl">${price}</h4>
      <Link to= {`/tequila/${id}`} className="btn mx-32 mt-4 text-white bg-black hover:text-black hover:bg-white">Ver Detalle</Link>
    </div>
  </div>
  )}
export default Item;

