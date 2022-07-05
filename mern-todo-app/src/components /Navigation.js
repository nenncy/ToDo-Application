import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Navbar, Nav ,NavItem,Form,FormControl,Button, NavDropdown,Offcanvas,Container} from 'react-bootstrap';
import { LinkContainer } from 'react-router-dom';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

function NavigationBar() {
return (
//     <div>
//     <div>
//       <Navbar>
//         <Navbar.Brand as={Link} to="/" >TO DO APPLICATION</Navbar.Brand>
//         <Navbar.Collapse>
//           <Nav className="mr-auto">
//             <NavItem eventkey={1} href="/create">
//               <Nav.Link as={Link} to="/create" >Create</Nav.Link>
//             </NavItem>
//             <NavItem eventkey={1} href="/edit/:id">
//               <Nav.Link as={Link} to="/edit/:id" >Edit</Nav.Link>
//             </NavItem>
//           </Nav>
        
//         </Navbar.Collapse>
//       </Navbar>
//     </div>
    
//   </div>
<>
  <Navbar collapseOnSelect  expand='sm' bg='dark' variant='dark'>
    <Container>
    <Navbar.Brand href="/">To Do Application</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
            <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav>
               
                    
                    <Nav.Link href='/create'>
                      Create

                    </Nav.Link>
                    {/* <Nav.Link href='/edit/:id'>
                       Edit

                    </Nav.Link> */}
                </Nav>

            </Navbar.Collapse>

    </Container>

  </Navbar>

</>
);
}
export default NavigationBar;