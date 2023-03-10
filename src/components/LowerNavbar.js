
import React from "react";
import { Nav, Image, Navbar, Container } from 'react-bootstrap';

const LowerNavbar = () => {
  return (
    <Navbar sticky="top" variant="primary" expanded className="ps-0 pe-2 pb-0 navbar-theme-white hide border-under">
      <Container fluid className="px-0">
        <div className="d-flex justify-content-end w-100">
          <Nav className="align-items-center p-3">
            <div className="media d-flex align-items-center" style={{ cursor: "pointer" }}>
              <div className="media-body text-light align-items-center d-none d-lg-block">
                <span className="mb-0 font-small fw-bold text-primary" style={{ paddingRight: 10 }}>Camilo Sesto</span>
              </div>
              <Image src="https://100k-faces.glitch.me/random-image" className="user-avatar md-avatar rounded-circle" />
            </div>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
};

export default LowerNavbar;