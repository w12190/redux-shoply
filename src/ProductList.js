import React from 'react'
import ProductCard from './ProductCard'

/** Renders a list of all products from store
 * 
 * Props
 * - list of products from store {{},{},....}
 * 
 *  App -> ProductList -> ProductCard
 */
function ProductList({ products }){

  // double mapping
  const productsArray = []

  for (let key in products){
    productsArray.push({...products[key], key})
  }

  console.log("productsArray", productsArray);

  return (
    <div>
      {productsArray.map(product => <ProductCard 
                                      name={product.name} 
                                      price={product.price} 
                                      key={product.key} 
                                      id={product.key}/>)}
    </div>
  )
}

export default ProductList