import Card from "./Card"

function ItemListContainer(props) {
    return ( 
    <>
    <h1 className="text-white text-center text-5xl p-4 mb-6">{props.greetings}</h1>
    <div className= "w-full mx-auto flex flex-wrap justify-center gap-10">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
    </>
  )
}

export default ItemListContainer