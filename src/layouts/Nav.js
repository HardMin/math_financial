import { StrictMode, useState } from "react";
import { Link } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";
import { ScrollTopPag } from "../components";
import { InteresCompuestoPath, InteresSimplePath } from "../router/router";
import "../style/css/nav.css";


export const NavBarPage = () => {
    const [menu, setMenu] = useState({ class: "navbar-menu", active: "false" });
    const [menuList, setMenuList] = useState({ active: "false" });

    const handleToggleMenu = () => {
        setMenu((previousState) => {
            if (menu.active == "false") {
                return { ...previousState, active: "true" };
            } else {
                return { ...previousState, active: "false" };
            }
        });
    };
    const handleToggleMenuList = () => {
        setMenuList((previousState) => {
            if (menuList.active == "false") {
                return { ...previousState, active: "true" };
            } else {
                return { ...previousState, active: "false" };
            }
        });
    };
    const handleToggleOutMenu = () => {
        handleToggleMenu();
        ScrollTopPag();
    };

    

    let Menu_Phone_Handle = menu.active;

    return (
        <StrictMode>
            <header className="navbar nabvar-dark bg-dark">
                <nav>
                    <div class="container-fluid navbar_phone">
                        <Link class="navbar-brand" to="/">
                            Matemática Financiera
                        </Link>

                        <div
                            onClick={handleToggleMenu}
                            className={menu.class}
                            active={menu.active}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                        <div className="navVertical-Menu_Phone">
                            <Nav
                                vertical
                                className="navVertical-Nav"
                                active={Menu_Phone_Handle}
                            >
                                <NavItem className="navVertical-navitem">
                                    <Link onClick={handleToggleMenu} to="/">
                                        Home
                                    </Link>
                                </NavItem>
                                <NavItem className="navVertical-navitem">
                                    <NavItem
                                        className="list"
                                        onClick={handleToggleMenuList}
                                    >
                                        Categoría
                                    </NavItem>
                                    <div
                                        className="list_content"
                                        active={menuList.active}
                                    >
                                        <NavItem className="navVertical-navitem navitem_list">
                                            <Link
                                                className="disabled"
                                                // onClick={handleToggleOutMenu}
                                                // to={InteresSimplePath.path}
                                                to="#"
                                            >
                                                Interés Simple
                                            </Link>
                                        </NavItem>
                                        <NavItem className="navVertical-navitem navitem_list">
                                            <Link
                                                onClick={handleToggleOutMenu}
                                                to={InteresCompuestoPath.path}
                                            >
                                                Interés Compuesto
                                            </Link>
                                        </NavItem>
                                        {/* <NavItem className="navVertical-navitem navitem_list">
                                            <Link
                                                className="disabled"
                                                // onClick={handleToggleOutMenu}
                                                to="#"
                                            >
                                                Descuento Simple
                                            </Link>
                                        </NavItem>
                                        <NavItem className="navVertical-navitem navitem_list">
                                            <Link
                                                className="disabled"
                                                // onClick={handleToggleOutMenu}
                                                to="#"
                                            >
                                                Descuento Compuesto
                                            </Link>
                                        </NavItem> */}
                                    </div>
                                </NavItem>
                                <div
                                    className="navVertical-bgToggle"
                                    onClick={handleToggleOutMenu}
                                ></div>
                            </Nav>
                        </div>
                    </div>
                </nav>
            </header>
        </StrictMode>
    );
};
