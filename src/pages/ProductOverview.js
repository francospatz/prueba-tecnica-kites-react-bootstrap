import React, { useContext } from "react";
import { Container, Button, Image, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { ProductContext } from "../contexts/productContext";

const ProductOverview = () => {
    const { selectedProduct } = useContext(ProductContext);
    const navigate = useNavigate();

    return (
        <main>
            <Container fluid className="p-2">

                <Button
                    variant="outline-primary"
                    size="sm"
                    className="btn-icon-only btn-circle"
                    type="button"
                    onClick={() => navigate(-1)}
                >
                    <FontAwesomeIcon icon={faAngleLeft} />
                </Button>
                <Container>
                    <Row>
                        <Col className="pt-4">
                            <Image src={selectedProduct.img} alt="..." className="w-100 h-auto" style={{ minWidth: "300px" }} />
                        </Col>
                        <Col className="pt-4">
                            <div className="">
                                <h3 className="text-bolder">{selectedProduct.name}</h3>
                                <p className="text-muted">{selectedProduct.code}</p>
                                <p className="text-bold">{selectedProduct.category}</p>
                                <div className="d-flex flex-wrap">
                                    {selectedProduct.webs.map((web, i) => (
                                        <Button key={i} className='m-1' variant="info" size="xs" style={{ pointerEvents: "none" }}>
                                            {web}
                                        </Button>
                                    ))}
                                </div>
                                <div className="d-flex flex-wrap py-2">
                                    {selectedProduct.files.map((file, i) => (
                                        <Button key={i} variant="tertiary" size="xs" className='m-1' style={{ pointerEvents: "none" }}>
                                            {file}
                                        </Button>
                                    ))}
                                </div>
                                <div className="d-flex flex-wrap py-2">
                                    {selectedProduct.languages.map((flag, i) => (
                                        <Image
                                            key={i}
                                            alt="..."
                                            style={{ maxWidth: "40px", padding: "2px" }}
                                            src={`https://www.countryflagicons.com/FLAT/64/${flag.toUpperCase()}.png`}
                                        />
                                    ))}
                                </div>
                            </div>




                        </Col>
                    </Row>
                </Container>

            </Container>
        </main>
    );
}

export default ProductOverview;