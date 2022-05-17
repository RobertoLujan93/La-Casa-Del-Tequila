import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Item from "./Item";
import { tequilasData } from "../data/tequilasData";

const ItemList = () => {

  const {categoryId} = useParams()
  const [tequilas, setTequilas] = useState([]);

  useEffect(() => {
    getTequilas()
  }, [categoryId]);

  const getTequilas = () => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        resolve(tequilasData);
      }, 2000);
    });

    promesa.then((tequilasPromise) => {
      if (!categoryId) {
        setTequilas(tequilasPromise);
      } else {
      setTequilas(tequilasPromise.filter((t) => t.category === categoryId));
      }
    });
  }

  return (
    <div className="w-full mx-auto flex flex-wrap justify-center gap-10">
      {tequilas.map ( i => <Item key={i.id} item={i} /> )}
    </div>
  );
};

export default ItemList;
