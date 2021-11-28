import React from 'react'
import { FaBars } from "react-icons/fa";

import logo from "../../logoL-01.svg";


const NavbarToogle = ({toggleLinks}) => {
    return (
        <div className='nav-header'>
        <img src={logo} className='logo' alt='logo' />
        <button className='nav-toggle' onClick={toggleLinks}>
          <FaBars />
        </button>
      </div>
    )
}

export default NavbarToogle
