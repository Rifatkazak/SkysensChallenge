import React, {useState} from "react";
import { Hamburger, Logo, Nav, Menu, MenuLink } from "./NavbarStle";

const Navbar  = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Nav>
            <Logo to="/">
                <i>{"<SKYSENS/>"}</i><span></span>
            </Logo>
            <Hamburger onClick={() => setIsOpen(!isOpen)}>
                <span />
                <span />
                <span />
            </Hamburger>
               <Menu isOpen ={isOpen}>
                <MenuLink 
                to={{pathname : 'https://www.skysens.io/company'}}
                target ="_blank"
                rel ="noopener noreferre"
                >
                    About</MenuLink>
                <MenuLink to="/Login">Logout</MenuLink>
            </Menu>
        </Nav>
    )
}
export default Navbar;