import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { tequilasData } from "../data/tequilasData";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

  const [tequila, setTequila] = useState({});
  const {tequilaId} = useParams();

  useEffect(() => {
    getTequilas()
  }, [tequilaId]);

  const getTequilas = () => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        resolve(tequilasData);
      }, 2000);
    });

    promesa.then((data) => {
      setTequila(data.find((t) => t.id == tequilaId));
    });
  }

	return (
    <div className="w-full mx-auto flex flex-wrap justify-center gap-10">
      <ItemDetail tequila={tequila} />
    </div>
  );
};

export default ItemDetailContainer;