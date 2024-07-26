import React from 'react'

const Navbar = ({setsearch}) => {
  return (
    <div className='navbar'>
      <div class="navbar-container">
      <div>
          <a href="#" class="navbar-logo">GameWars</a>
      </div>
      
      <ul class="navbar-menu">
        <li class="navbar-item"><a href="#">Home</a></li>
        
        <li class="navbar-item"><a href="#">Categories</a></li>
        <li class="navbar-item"><a href="#">About Us</a></li>
        <li class="navbar-item"><a href="#">Contact</a></li>
      </ul>
      <div class="navbar-search">
        <input onChange={(e)=>setsearch(e.target.value)} type="text" placeholder="Search..."/>
        <button>Search</button>
      </div>
      
    </div>
    </div>
  )
}

export default Navbar
