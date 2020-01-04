import React, { useState } from 'react';
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';
import styles from './nav-bar.module.css';

const NavBarHome = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="container-fluid">
      <header>
        <Navbar className={styles.navbar} expand="md">
          <NavbarBrand href="/"><h3  className="text-white">Wigs</h3></NavbarBrand>
          <NavbarToggler onClick={toggle} />
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Button outline color={styles.navbar} href="/contact"><div className="font-weight-bold text-white">Contact</div></Button>
              </NavItem>                 
            </Nav>          
        </Navbar>
      </header>
    </div>
  );
}

export default NavBarHome;