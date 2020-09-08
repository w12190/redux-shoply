import React from 'react'
import { NavLink} from 'react-router-dom'
import { useSelector } from 'react-redux'

/**Renders Navbar
 * 
 * App -> Navbar
 */

function Navbar(){

  const cartTotal = useSelector(store => store.cartTotal)

  return (
    <div>
      <nav>
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/cart"> Cart (${cartTotal})</NavLink>
      </nav>
    </div>
  )
}

export default Navbar