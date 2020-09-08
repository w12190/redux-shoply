import React from 'react';
import './App.css';
import ProductList from './ProductList'
import { useSelector } from 'react-redux'

// State
const products = useSelector(store => store.products)

function App() {
  return (
    <div className="App">
      <ProductList products={products}/>
    </div>
  );
}

export default App;
