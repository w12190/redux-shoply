import React from 'react';
import './App.css';
import ProductList from './ProductList'
import { useSelector, shallowEqual } from 'react-redux'
import Navbar from './Navbar';

/** Renders the App
 * 
 * Store
 * - products: pulls products from inventory
 * 
 * App -> {Navbar, ProductList, ShoppingCart}
 */

function App() {
  // State
  const products = useSelector(store => (store.products))


  return (
    <div className="App">
      <Navbar />
      <main>
        <ProductList products={products} />
      </main>
    </div>
  );
}

export default App;
