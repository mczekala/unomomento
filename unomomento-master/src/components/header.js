import React, { Component } from 'react';
import logo from '../img/2.png';
import '../style/Header.css';
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
        <header>
            <Link to='/'>
              <img src={logo} className="App-logo" alt="logo" />
            </Link>
        </header>
    );
  }
}

export default Header;