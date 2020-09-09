import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addItem, removeItem } from './actions' 


/** Renders shopping cart
 * Store
 * - products
 * - cart
 * - cartTotal
 * 
 * App -> Navbar, Routes (-> ProductList, ShoppingCart, ProductDetails)
 */
function ShoppingCart() {

  // Store
  const { products, cart, cartTotal } = useSelector(store => store)

  const productsInCart = []
  const dispatch = useDispatch()

  //Collect shopping cart data
  for (let key in cart) {
    productsInCart.push({
      "id": key,
      "name": products[key].name,
      "quantity": cart[key],
      "price": products[key].price
    })
  }

  //Construct shopping cart listings
  let results = productsInCart.map(product => (
    <li>
      {product.name} - {product.quantity}
      <br />
      <button onClick={() => dispatch(addItem(product.id))}>Add 1</button> &nbsp;
      <button onClick={() => dispatch(removeItem(product.id))}>Remove 1</button>
      <p />
    </li>
  ))

  return (
    <div>
      {results}
      <p>Total: ${cartTotal}</p>
    </div>
  )
}

export default ShoppingCart