import Item from "./Item"
import ItemList from "./ItemList"

function ItemListContainer(props) {
    return ( 
    <>
    <h1 className="text-white text-center text-5xl p-4 mb-6">{props.greetings}</h1>
    <ItemList/>
    </>
  )
}

export default ItemListContainer