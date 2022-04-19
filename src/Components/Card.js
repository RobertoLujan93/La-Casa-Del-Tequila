import imagen1 from "./imagenes/tequila-milagro.webp"

function Card() {
  return (
<div class="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={imagen1} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Tequila Milagro Reposado</h2>
    <p></p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Comprar</button>
    </div>
  </div>
</div>
  );
}
export default Card;

