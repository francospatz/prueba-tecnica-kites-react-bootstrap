
import React from "react";
import { Row, Col, Card } from 'react-bootstrap';

const Footer = (props) => {

  return (
    <div>
      <footer className="footer section py-5">
        <Row>
          <Col xs={12} lg={6} className="mb-4 mb-lg-0">
            <p className="mb-0 text-center text-xl-left">
              Copyright © 2023 {" "}
              <Card.Link href="https://www.regarsa.com/" target="_blank" className="text-blue text-decoration-none fw-normal">
                Regarsa
              </Card.Link>
            </p>
          </Col>
          <Col xs={12} lg={6}>
            <ul className="list-inline list-group-flush list-group-borderless text-center text-xl-right mb-0">
              <li className="list-inline-item px-0 px-sm-2">
                <Card.Link href="https://www.regarsa.com/aviso-legal" target="_blank">
                  Aviso Legal
                </Card.Link>
              </li>
              <li className="list-inline-item px-0 px-sm-2">
                <Card.Link href="https://www.regarsa.com/politica-de-privacidad" target="_blank">
                  Política de privacidad
                </Card.Link>
              </li>
              <li className="list-inline-item px-0 px-sm-2">
                <Card.Link href="https://www.regarsa.com/politica-de-cookies" target="_blank">
                  Política de cookies
                </Card.Link>
              </li>
            </ul>
          </Col>
        </Row>
      </footer>
    </div>
  );
};

export default Footer;
