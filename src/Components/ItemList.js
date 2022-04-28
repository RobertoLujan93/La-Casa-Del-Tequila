import { useState, useEffect } from "react";
import Item from "./Item";
import { tequilasData } from "../data/tequilasData";

const ItemList = () => {

  const [tequilas, setTequilas] = useState([]);

  useEffect(() => {
    getTequilas()
  }, []);

  const getTequilas = () => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        resolve(tequilasData);
      }, 2000);
    });

    promesa.then((data) => {
      setTequilas(data);
    });
  }

  return (
    <div className="w-full mx-auto flex flex-wrap justify-center gap-10">
      {tequilas.map ( i => <Item key={i.id} item={i} /> )}
    </div>
  );
};

export default ItemList;
