import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import {doc, getDoc, getFirestore} from "firebase/firestore"

const ItemDetailContainer = () => {

  const [tequila, setTequila] = useState({});
  const {tequilaId} = useParams();

  useEffect(() => {
    const db = getFirestore()

    const item = doc(db, "items", tequilaId)
    getDoc(item).then (snapshot => {
      if (snapshot.exists()) {
        setTequila ({id:snapshot.id, ...snapshot.data()})
      }
    })
  }, [tequilaId])

	return (
    <div className="w-full mx-auto flex flex-wrap justify-center gap-10">
      <ItemDetail tequila={tequila} />
    </div>
  );
};

export default ItemDetailContainer;