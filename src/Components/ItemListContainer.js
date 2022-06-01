import ItemList from "./ItemList"

function ItemListContainer(props) {
    return ( 
    <>
    <div className="banner">
      <img 
        src={process.env.PUBLIC_URL+"./imagenes/banner.jpg"} alt="imagen banner">
      </img>
      <h1>
        LA CASA DEL TEQUILA
      </h1>
      <h3>
        Las mejores historias comienzan con una botella de tequila
      </h3>
    </div>
    <ItemList/>
    </>
  )
}

export default ItemListContainer