import React from 'react';
import { Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Nav.css';

function NavbarView() {

  return (
    <Navbar expand="lg" className="navbar-container">
      <Container className='nav-container'>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav style={{ marginInline: 'auto' }}>
            <Nav.Link className='link' as={Link} to="/comics">Comics</Nav.Link>
            <Nav.Link className='link' as={Link} to="/figuras">Figures</Nav.Link>
            <Nav.Link className='link' as={Link} to="/funkos">Funko Pops</Nav.Link>
            <Nav.Link className='link' as={Link} to="/posters">Posters</Nav.Link>
            <Nav.Link className='link' as={Link} to="/shirts">Shirts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarView;



