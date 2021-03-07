import React from 'react';
import '../stylesheets/Header.scss';
import logo from '../images/logo.png';

function Header() {
  return (

    <header className="header">
      <img className="logo" src={logo} alt="Rick and Morty logo" />
    </header>
  )
}

export default Header;