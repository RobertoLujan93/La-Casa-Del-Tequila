import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { tequilasData } from "../data/tequilasData";

const ItemDetail = () => {
  const { tequilaId } = useParams();
  const [tequila, setTequila] = useState({});

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
      </div>
    </div>
  );
};
export default ItemDetail;