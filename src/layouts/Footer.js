import { StrictMode } from "react";
import { Link } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";
import { Hr } from ".";

export const Footer = () => {
    
    return (
        <StrictMode>
            <footer>
                <div className="footer-brand container-fluid">
                    <Link className="navbar-brand" to="/about">Diego Aldana</Link>
                </div>
                <div className="footer-url">
                    <p>Guia</p>
                    <Nav vertical>
                        <NavItem className="nav-title">
                            Guía
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to="/interes-simple">
                                Interés Simple
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to="/interes-compuesto">
                                Interés Compuesto
                            </Link>
                        </NavItem>
                        <Hr/>
                        <NavItem>
                            <Link className="nav-link" to="/descuento-simple">
                                Descuento Simple
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to="/descuento-compuesto">
                                Descuento Compuesto
                            </Link>
                        </NavItem>
                    </Nav>
                </div>
            </footer>
        </StrictMode>
    );
};
