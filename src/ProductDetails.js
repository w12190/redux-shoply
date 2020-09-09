import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addItem, removeItem } from "./actions"
import './ProductDetails.css'

/** Renders product details
 * Store
 * - products
 * 
 * App -> Navbar, Routes (-> ProductList, ShoppingCart, ProductDetails)
 */

function ProductDetails() {
  const dispatch = useDispatch()

  // Grab URL param
  const { id } = useParams()

  // Import store
  const products = useSelector(store => store.products)

  return (
    <div className="ProductDetails">
      <img className="ProductDetails-image"
           src={products[id].image_url}
           alt={products[id].name} />
      <p>{products[id].description}</p>
      <button onClick={() => dispatch(addItem(id))}>Add</button>
      <button onClick={() => dispatch(removeItem(id))}>Remove</button>
    </div>
  )
}

export default ProductDetails