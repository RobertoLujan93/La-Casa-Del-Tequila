import imagen1 from "./imagenes/tequila-milagro.webp"
import ItemCount from "./ItemCount";

function onAdd (count) {
    alert (`Se agregaron ${count} productos al carrito`)
  };

function Card() {
  return (
<div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={imagen1} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="text-center font-bold text-xl">Tequila Milagro Reposado</h2>
    <ItemCount stock = {10} initial = {1} onAdd= {onAdd}/>
  </div>
</div>
  );
}
export default Card;

