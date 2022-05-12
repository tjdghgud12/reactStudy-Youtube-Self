import React, { useState }from 'react'
import { Navbar, NavbarBrand, NavItem, NavLink, Nav, Collapse, NavbarToggler } from 'reactstrap';



function NavBar() {
    return (
        <div>
            <Navbar color='dark' expand="md" light dark >
                <NavbarBrand href="/">
                    ReactStudy
                </NavbarBrand>
                <Collapse navbar>
                    <Nav navbar className="me-auto">
                        <NavItem>
                            <NavLink href='/'>
                                Home
                            </NavLink>
                        </NavItem>

                    </Nav>
                    <Nav navbar>
                    <NavItem>
                            <NavLink href='/login'>
                                Sign In
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='/register'>
                                Sign Up
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar


/* 
    reactStrap 관련 메모
    Collapse: 펼치고 접는 기능. Show()와 hide()와 다르게 애니메이션처럼 스르륵 펼치고 접히는걸 볼 수 있다.
               
 */