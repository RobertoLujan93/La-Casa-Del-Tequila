import { useState } from "react"

const ItemCount = ({stock, initial}) => {
  const [count, setCount] = useState(Number(initial))
	const resHandler = () => {
    if(count > initial){
      setCount(count - 1)
    }
  }
  const addHandler = () => {
    if (count < stock){
      setCount(count + 1)
    }
  }

	return (
		<div>
		<div className="flex justify-evenly mt-2 bg-gray-200 rounded-xl p-4">
			<button onClick={resHandler}>-</button>
			<span>{count}</span>
			<button onClick={addHandler}>+</button>
		</div>
			<button className="btn btn-primary mx-32 mt-4">Comprar</button>
		</div>
	)
}


export default ItemCount