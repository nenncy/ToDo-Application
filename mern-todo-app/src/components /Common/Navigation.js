import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, Form, FormControl, Button, NavDropdown, Offcanvas, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-dom';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

function NavigationBar() {

  return (
    <>
      <Navbar collapseOnSelect expand='sm' bg='dark' variant='dark' fixed="top">
        <Container>
          <Navbar.Brand > <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            GETSET
          </Link></Navbar.Brand>

          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className="me-auto">

              <Link to="/lists" style={{ textDecoration: 'none', color: 'white', margin: '8px' }}>
                Lists
              </Link>


              <Link to="/create" style={{ textDecoration: 'none', color: 'white', margin: '8px' }}>
                Create
              </Link>


              <Link to="/today" style={{ textDecoration: 'none', color: 'white', margin: '8px' }}>
                Today
              </Link>
            </Nav>
            <Nav>
              {/* <Nav.Link href="#deets">More deets</Nav.Link> */}
              <Button variant="outline-primary">LOGIN</Button>{' '}
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default NavigationBar;