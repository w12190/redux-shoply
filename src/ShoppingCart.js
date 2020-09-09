import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addItem, removeItem } from './actions'

import { Table } from 'reactstrap';


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
  // Don't use quotes around keys; bad style

  //Construct shopping cart listings
  let results = productsInCart.map(product => (
    <tr key={product.id}>
      <td>{product.name}</td>
      <td>{product.quantity} </td>
      <td>
        <button onClick={() => dispatch(addItem(product.id))}>Add 1</button> &nbsp;
        <button onClick={() => dispatch(removeItem(product.id))}>Remove 1</button>
      </td>
    </tr>
  ))

  return (
    <div>
      {/* {results}
      <p>Total: ${cartTotal}</p> */}
      <Table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {results}
        </tbody>
        <tfoot>
          <tr>
            <th> <b>Total </b></th>
            <th> <b>$ {cartTotal} </b></th>

          </tr>
        </tfoot>
      </Table>

    </div>
  )
}

export default ShoppingCart


  // < Table >
  // <thead>
  //   <tr>
  //     <th>#</th>
  //     <th>First Name</th>
  //     <th>Last Name</th>
  //     <th>Username</th>
  //   </tr>
  // </thead>
  // <tbody>
  //   <tr>
  //     <th scope="row">1</th>
  //     <td>Mark</td>
  //     <td>Otto</td>
  //     <td>@mdo</td>
  //   </tr>
  //   <tr>
  //     <th scope="row">2</th>
  //     <td>Jacob</td>
  //     <td>Thornton</td>
  //     <td>@fat</td>
  //   </tr>
  //   <tr>
  //     <th scope="row">3</th>
  //     <td>Larry</td>
  //     <td>the Bird</td>
  //     <td>@twitter</td>
  //   </tr>
  // </tbody>
  //   </Table >