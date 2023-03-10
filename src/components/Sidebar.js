import React, { useState } from "react";
import SimpleBar from 'simplebar-react';
import { useLocation } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { Nav, Badge, Image, Button, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();
    const { pathname } = location;
    const [show, setShow] = useState(false);
    const showClass = show ? "show" : "";

    const onCollapse = () => setShow(!show);

    const NavItem = (props) => {
        const { title, link, external, target, badgeText, badgeBg = "secondary", badgeColor = "primary" } = props;
        const classNames = badgeText ? "d-flex justify-content-start align-items-center justify-content-between" : "";
        const navItemClassName = link === pathname ? "active" : "";
        const linkProps = external ? { href: link } : { as: Link, to: link };

        return (
            <Nav.Item className={navItemClassName} onClick={() => setShow(false)}>
                <Nav.Link {...linkProps} target={target} className={classNames}>
                    <span className="sidebar-text">{title}</span>
                    {badgeText ? (
                        <Badge pill bg={badgeBg} text={badgeColor} className="badge-md notification-count ms-2">{badgeText}</Badge>
                    ) : null}
                </Nav.Link>
            </Nav.Item>
        );
    };

    return (
        <>
            <Navbar expand={false} collapseOnSelect variant="primary" className="navbar-theme-white px-4 d-lg-none">
                <Navbar.Brand className="me-lg-5" as={Link} to="#">
                    <h2 className="px-2 text-bolder">regarsa</h2>
                </Navbar.Brand>
                <FontAwesomeIcon icon={faBars} size="xl" aria-controls="main-navbar" className="text-primary" onClick={onCollapse} style={{ cursor: "pointer" }} />
            </Navbar>
            <CSSTransition timeout={300} in={show} classNames="sidebar-transition">
                <SimpleBar className={`collapse ${showClass} sidebar d-lg-block bg-white text-primary`}>
                    <div className="sidebar-inner">
                        <div className="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center" style={{ borderWidth: "0.17rem" }}>
                            <div className="d-flex align-items-center m-4">
                                <div className="user-avatar lg-avatar me-4">
                                    <Image src="https://100k-faces.glitch.me/random-image" className="card-img-top rounded-circle border-white" />
                                </div>
                                <div className="d-block">
                                    <h6>Hola Camilo!</h6>
                                    <Button as={Link} variant="primary" size="xs" to="#" className="text-white">
                                        <FontAwesomeIcon icon={faSignOutAlt} className="me-2" /> Sign Out
                                    </Button>
                                </div>
                            </div>
                            <Nav.Link className="collapse-close d-md-none" onClick={onCollapse}>
                                <FontAwesomeIcon icon={faTimes} size="xl" />
                            </Nav.Link>
                        </div>
                        <Nav className="flex-column pt-md-0" activeKey="/">
                            <Navbar.Brand className="py-3 border-under" style={{ paddingLeft: "3rem" }} as={Link} to="#">
                                <h2 className="m-0 text-bolder" style={{ fontSize: "31px" }}>regarsa</h2>
                            </Navbar.Brand>
                            <NavItem title="Productos" link="/" className="text-primary" />
                            <NavItem title="Webs" link="#" className="text-primary" />
                            <NavItem title="Fichas" link="#" className="text-primary" />
                            <NavItem title="Documentos" link="#" className="text-primary" />

                        </Nav>
                    </div>
                </SimpleBar>
            </CSSTransition>
        </>
    );
};

export default Sidebar;