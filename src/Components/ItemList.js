import { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import Item from "./Item";
import { tequilasData } from "../data/tequilasData";

const ItemList = () => {

  const {categoryId} = useParams()
  const [tequilas, setTequilas] = useState([]);

  useEffect(() => {
    getFilteredList();
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

  const getFilteredList = () => {
    if (!categoryId) {
      return tequilas;
    }
    return tequilasData.filter((t) => t.category === categoryId);
  }
  let filteredList = useMemo(getFilteredList, [categoryId, tequilas]);


  return (
    <div className="w-full mx-auto flex flex-wrap justify-center gap-10">
      {filteredList.map ( i => <Item key={i.id} item={i} /> )}
    </div>
  );
};

export default ItemList;
