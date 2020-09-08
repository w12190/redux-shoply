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

  const productsArray = []


  for (let key in products){
    productsArray.push({...products[key], key})
  }
  console.log("productsArray", productsArray);

  return (
    <div>
      {productsArray.map(product => <ProductCard name={product.name} price={product.price} key={product.key}/>)}
    </div>
  )
}
// product = {
//   "47314fa1-ae56-4eae-80be-af6691145951": {
//     "name": "tv",
//     "price": 219.99,
//     "description": "A beautiful, big-screen TV. Because hey, Netflix isn't going to watch itself.",
//     "image_url": "https://images.samsung.com/is/image/samsung/latin_en-hd-j4300ah-un32j4300ahxpa-001-front-indigo-blue"
//   }
// product[Object.keys(product)[0]]
export default ProductList