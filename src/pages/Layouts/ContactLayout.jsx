import React from 'react'
import {Link, Outlet} from "react-router-dom";

const ContactLayout = () => {
  return (
    <>
    <h1>Contact Layout</h1>
   
    <div>
    <nav>
       <ul>
         <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/products'>Products</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/service'>Service</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    <Outlet />
  </div> </>
  )

}

export default ContactLayout