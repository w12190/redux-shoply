import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ShoppingCart from './ShoppingCart'
import ProductList from './ProductList'
import { useSelector } from 'react-redux'
import ProductDetails from './ProductDetails'

/** Maps URL's to components
 * Store
 * - products
 * 
 * App -> Navbar, Routes (-> ProductList, ShoppingCart, ProductDetails)
*/

function Routes() {
  // Store
  const products = useSelector(store => (store.products))

  return (
    <div className="Routes">
      <Switch>
        <Route exact path="/shoppingcart">
          <ShoppingCart />
        </Route>

        <Route exact path="/products/:id">
          <ProductDetails />
        </Route>

        <Route>
          <ProductList products={products} />
        </Route>
      </Switch>
    </div>
  )
}

export default Routes