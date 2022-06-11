import ItemList from "./ItemList";

function ItemListContainer(props) {
  return (
    <>
      {/* Mensaje inicio */}
      <div className="my-10">
        <hr className="border-white w-3/4 mx-auto neon" />
        <h1 className="text-white text-center text-xl sm:text-2xl md:text-2xl lg:text-3xl my-8 mx-auto w-3/4 font-fredericka animate">
          La Casa del Tequila. El mejor lugar para disfrutar de un buen tequila !
        </h1>
        <hr className="border-white w-3/4 mx-auto neon" />
      </div>
      <ItemList />
    </>
  );
}

export default ItemListContainer;
