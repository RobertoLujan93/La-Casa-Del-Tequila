import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Item from "./Item";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemList = () => {
  const {categoryId} = useParams()
  const [tequilas, setTequilas] = useState([]);

  useEffect(() => {
    const db = getFirestore()
    const itemsCollection = collection(db, "items")

    getDocs (itemsCollection).then (snapshot => {
      const tequilasList = []
      snapshot.docs.forEach (s => {
        tequilasList.push ({id:s.id, ...s.data()})
      })
      if (!categoryId) {
      setTequilas (tequilasList)
      } else {
        setTequilas(tequilasList.filter((t) => t.category === categoryId));
      }
    })
  }, [categoryId])

  return (
    <div className="w-full mx-auto flex flex-wrap justify-center gap-10">
      {tequilas.map ( i => <Item key={i.id} item={i} /> )}
    </div>
  );
};

export default ItemList;
