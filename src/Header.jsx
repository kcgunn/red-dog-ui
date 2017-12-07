import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



class Header extends Component {


  render() {
    return (
      <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Red Dog</a>
      </Navbar.Brand>
    </Navbar.Header>

  </Navbar>
    );
  }
}

export default Header;