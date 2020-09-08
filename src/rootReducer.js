import { ADD_ITEM, REMOVE_ITEM } from './actionTypes'
import data from './data'


function rootReducer(state=data, action){
  switch (action.type){
    case ADD_ITEM:
      //do stuff
      break;
    case REMOVE_ITEM:
      //do stuff
      break;
    default:
      return state
  }
}

// //delete me
// export function test(){
//   console.log(products)
// }

export default rootReducer