import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
       <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                 <a class="navbar-brand" href="/">Navbar</a>
                 
                 <div class="collapse navbar-collapse" id="navbarNav">
                      <ul class="navbar-nav">
                           <li class="nav-item active">
                                <Link to={"/home"} className='nav-link'>Home</Link>
                           </li>
                           <li class="nav-item">
                                <Link to={"/product"} className='nav-link'>Product</Link>
                           </li>
                           <li class="nav-item">
                                <Link to={"/about"} className='nav-link'>About</Link>
                           </li>
                           
                      </ul>
                 </div>
            </nav>
       </>
  )
}

export default Navbar