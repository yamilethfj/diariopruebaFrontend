import React from 'react'

//Css
import './components.css';

//Assets
import HeaderLogo from "./../assets/img/logo.png";

const Header = () => {
  return (
    <div className='body-header'>
        <img  src={HeaderLogo} alt="React Logo"  className='logo'/>
    </div>
  )
}

export default Header;