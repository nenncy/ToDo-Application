import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, Form, FormControl, Button, NavDropdown, Offcanvas, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-dom';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

function NavigationBar() {

  return (
    <>
      <Navbar collapseOnSelect expand='sm' bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand > <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            GETSET
          </Link></Navbar.Brand>

          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav>
             
                <Link to="/lists" style={{ textDecoration: 'none', color: 'white' , margin:'8px'}}>
                  Lists
                </Link>
             
              
                <Link to="/create" style={{ textDecoration: 'none', color: 'white',margin:'8px' }}>
                  Create
                </Link>
              
         
                <Link to="/today" style={{ textDecoration: 'none', color: 'white' ,margin:'8px'}}>
                  Today
                </Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default NavigationBar;