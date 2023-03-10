import React, {Component} from "react";
import { NavLink } from "react-router-dom";
import {Navbar, Nav} from 'react-bootstrap';


function Navigation() {
    return (
        <Navbar bg="dark" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <NavLink className="d-inline p-2 bg-dark text-white" to="/">C1129</NavLink>
                    <NavLink className="d-inline p-2 bg-dark text-white" to="/C2129">C2129</NavLink>
                </Nav>

            </Navbar.Collapse>

        </Navbar>
    );
}

export default Navigation;