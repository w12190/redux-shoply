import React from 'react'
import { useDispatch } from "react-redux"
import { addItem, removeItem } from "./actions"
import { Card, CardBody, CardTitle } from "reactstrap";


/** Renders a component for each product in inventory
 * 
 * Props
 * - name
 * - price
 * - id 
 * 
 * ProductList -> ProductCard
 */

function ProductCard({ name, price, id }) {

  const dispatch = useDispatch()

  function fireAddAction() {
    dispatch(addItem(id))
  }

  function fireRemoveAction(){
    dispatch(removeItem(id))
  }

  return (
    <div>
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <p>Name:{name}</p>
            <p>Price:{price}</p> <br />
          </CardTitle>
      <button onClick={fireAddAction}>Add</button>
      <button onClick={fireRemoveAction}>Remove</button>
        </CardBody>
      </Card>
    </div>
  )
}

export default ProductCard