import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink 
                        activeClassName = "active"
                        isActive={() => window.location.pathname === "/about"}
                        to = "/about"
                    >
                    About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        activeClassName = "active"
                        isActive ={() => window.location.pathname === "/projects"}
                        to = "/projects"
                    >
                    Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        activeClassName = "active"
                        isActive ={() => window.location.pathname === "/contact"}
                        to = "/contacts"
                    >
                    Contact
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        activeClassName = "active"
                        isActive ={() => window.location.pathname === "/resume"}
                        to = "/resume"
                    >
                    Resume
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;