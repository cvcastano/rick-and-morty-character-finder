import React from 'react';
import '../stylesheets/index.scss';
import logo from '../images/logo.png';

function Header() {
    return (

        <header>
        <div className="header-top">
          <img className="logo" src={logo} alt="Rick and Morty logo" />
        </div>
        <div className="stripe">character finder</div>
      </header>
    )
}

export default Header;