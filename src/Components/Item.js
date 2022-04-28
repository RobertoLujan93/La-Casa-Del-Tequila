import ItemCount from "./ItemCount";

function onAdd (count) {
    alert (`Se agregaron ${count} productos al carrito`)
  };

const Item = (props) => {
  const {title,price,pictureUrl,stock} = props.item
  return (
  <div className="card card-compact w-96 bg-base-100 shadow-xl">
    <figure><img src={pictureUrl} alt="Imagen de Tequila" /></figure>
    <div className="card-body">
      <h2 className="text-center text-xl">{title}</h2>
      <h4 className="text-center font-bold text-xl">{price}</h4>
      <ItemCount stock = {stock} initial = {1} onAdd= {onAdd}/>
    </div>
  </div>
  )}
export default Item;

