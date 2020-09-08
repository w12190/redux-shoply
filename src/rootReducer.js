import { ADD_ITEM, REMOVE_ITEM } from './actionTypes'
import products from './data'

const data = { ...products, cart: {}, cartTotal: 0 }
function rootReducer(state = data, action) {
  // function rootReducer(state=products, action){

  let productID;
  let price;

  switch (action.type) {

    case ADD_ITEM: { // adding curlybraces allows use to destructure from payload
      console.log("ADD_ITEM run by reducer. action is:  ", action)
      
      // payload should contain product id
      productID = action.payload
      price = state.products[productID].price;

    // let count = state.cart[productID] || 0
    // let count = 1 || state.cart[productID] + 1 
    // let newCount = state.cart[productID] ? 1: state.cart[productID] + 1 ;

      if (state.cart[productID]) {

        state.cart[productID]++
        // add price to cart
        state.cartTotal = state.cartTotal + price;
      } else {

        state.cart[productID] = 1;
        // add price to cart
        state.cartTotal = state.cartTotal + price;
      }


      return { ...state, cart: state.cart }
    }
    case REMOVE_ITEM:
      console.log("REMOVE_ITEM run by reducer.  action is: ", action)

      // payload should contain product id
      productID = action.payload
      price = state.products[productID].price;

      if (state.cart[productID] > 1) {

        state.cart[productID]--;

        // remove price from cart
        state.cartTotal = state.cartTotal - price; 
      } else if (state.cart[productID] === 1) {

        delete state.cart[productID]
        state.cartTotal = state.cartTotal - price;
      } else {

        delete state.cart[productID]
      }

      // CODEREIVEW: plan to program defensively and validate when there is an absense of things that might be 0

      return { ...state, cart: state.cart, cartTotal: state.cartTotal }

    default:
      return state
  }
}


export default rootReducer