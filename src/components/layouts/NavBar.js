import React from 'react'
import {BiCameraMovie} from "react-icons/bi"
import {RiMenu3Fill} from "react-icons/ri"
import "./style/NavBar.css"
import { useState } from 'react'




const NavBar = () => {
    const [showNavbar, setShowNavbar] = useState(false)
  
    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar)
    }
  
    return (
      <nav className="navbar">
        <div className="subNavbar marginLR">
          <div className="logo">
            <BiCameraMovie/>
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
          <RiMenu3Fill/>
          </div>
          <div className={`nav-elements  ${showNavbar && 'active'} `}>
            <ul>
              <li className='pullDown'>
                <a href='/'>Home</a>
              </li>
              <li>
              <a href='/'>Categories</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
  
  export default NavBar

// function NavBar() {
//   return (
//     <header>
//         <div><BiCameraMovie/></div>
//         <ul>
//             <li></li>
//             <li></li>
//             <li></li>
            
//         </ul>
//         <div className='searchInput'></div>    
//     </header>
//   )
// }

// export default NavBar