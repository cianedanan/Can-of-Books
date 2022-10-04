import React from 'react';
import {Navbar, NavItem} from 'react-bootstrap';
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>Code Fellows</Navbar.Brand>
        <NavItem><Link to="/">Home</Link></NavItem>
        <NavItem><Link to="/about">About</Link></NavItem>
      </Navbar>
    )
  }
}

export default Footer;
