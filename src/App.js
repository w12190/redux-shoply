import React from 'react';
import './App.css';
import ProductList from './ProductList'
import { useSelector } from 'react-redux'
import Navbar from './Navbar';

/** Renders the App
 * 
 * Store
 * - products: pulls products from inventory
 * 
 * App -> ProductList
 */

function App() {
  // State
  const products = useSelector(store => store.products)
  
  return (
    <div className="App">
      <Navbar />
      <ProductList products={products}/>
    </div>
  );
}

export default App;
