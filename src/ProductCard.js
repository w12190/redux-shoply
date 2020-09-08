import React from 'react'
import { useDispatch } from "react-redux"
import { addItem, removeItem } from "./actions"

function ProductCard({ name, price }) {

  const dispatch = useDispatch()

  function fireAddAction() {
    dispatch(addItem(id))
  }

  function fireRemoveAction(){
    dispatch(removeItem(id))
  }

  return (
    <div>
      <p>Name:{name}</p>
      <p>Price:{price}</p> <br />
      <button onClick={fireAddAction}>Add</button>
      <button onClick={fireRemoveAction}>Remove</button>
    </div>
  )
}

export default ProductCard