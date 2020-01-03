import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const NavBarHome = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="container-fluid">
      <header>
        <Navbar color="#FFFFFF" light expand="md">
          <NavbarBrand href="/"><h3>Wigs</h3></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/contact"><div className="d-inline font-weight-bold text">Contact</div></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </header>
    </div>
  );
}

export default NavBarHome;