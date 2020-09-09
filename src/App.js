import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Routes from './Routes'

/** Renders the App
 * 
 * Store
 * - products: pulls products from inventory
 * 
 * App -> Navbar, Routes (-> ProductList, ShoppingCart, ProductDetails)
 */

function App() {


  return (
    <div className="App">
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;
