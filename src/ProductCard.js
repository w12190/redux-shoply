import React from 'react'
import { useDispatch } from "react-redux"
import { addItem, removeItem } from "./actions"
import { Card, CardBody, CardTitle } from "reactstrap";
import { NavLink } from "react-router-dom"

/** Renders a component for each product in inventory
 * 
 * Props
 * - name
 * - price
 * - id 
 * 
 * App -> Navbar, Routes (-> ProductList, ShoppingCart, ProductDetails)
 */

function ProductCard({ name, price, id }) {

  const dispatch = useDispatch()


  return (
    <div>
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <p>Name: {name}</p>
            <p>Price: {price}</p> <br />
            {<NavLink to={`products/${id}`}> Product Details</NavLink>}
          </CardTitle>
          <button onClick={() => dispatch(addItem(id))}>Add</button>
          <button onClick={() => dispatch(removeItem(id))}>Remove</button>
        </CardBody>
      </Card>
    </div>
  )
}
//TODO: change id to something else if uuid doesn't work

export default ProductCard