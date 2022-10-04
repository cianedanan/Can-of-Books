import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>Code Fellows</Navbar.Brand>
        <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link>
      </nav>
      </Navbar>
    )
  }
}

export default Footer;
