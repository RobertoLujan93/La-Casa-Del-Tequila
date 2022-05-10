import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { tequilasData } from "../data/tequilasData";
import {Link} from "react-router-dom";
import ItemCount from "./ItemCount";


const ItemDetail = () => {
  const { tequilaId } = useParams();
  const [tequila, setTequila] = useState({});

  const [terminar, setTerminar] = useState(false)

  function onAdd (count) {
    setTerminar (true)
    console.log(count);
  };

  useEffect(() => {
    setTequila(tequilasData.find((t) => t.id == tequilaId));
  }, [tequilaId]);

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={tequila.pictureUrl} alt="Imagen de Tequila" />
      </figure>
      <div className="card-body">
        <h2 className="text-center text-xl">{tequila.title}</h2>
        <h4 className="text-center font-bold text-xl">{tequila.price}</h4>
				<h4 className="text-center text-xl">{tequila.description}</h4>
        {terminar ? (
          <Link to="/cart" className="btn mx-32 mt-4 text-white bg-black hover:text-black hover:bg-white">
            Terminar Compra
          </Link>
        ) : (
        <ItemCount stock = {tequila.stock} initial = {1} onAdd= {onAdd}/>
        )}
      </div>
    </div>
  );
};
export default ItemDetail;
