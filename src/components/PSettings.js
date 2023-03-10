import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPlus, faSliders } from '@fortawesome/free-solid-svg-icons';
import { Form, Button, InputGroup, Dropdown, Container, Collapse } from 'react-bootstrap';

const PSettings = (props) => {
    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(false);

    const windowSize = useRef(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            windowSize.current = window.innerWidth;
            /* setCurrentWidth(windowSize.current); */
            if (windowSize.current > 768) {
                setShow(false);
                setOpen(false)
            } else {
                setShow(true);
            }
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const { handleAddProduct, entries, setEntries, searchTerm, handleSearchChange } = props;

    return (
        <Container fluid className="position-relative">
            <div className="d-flex flex-row align-center">
                <h4 className="m-3">Productos</h4>
                {!show &&
                    <Button
                        size="sm"
                        variant="primary"
                        className="text-light m-3"
                        style={{ whiteSpace: "nowrap" }}
                        onClick={() => handleAddProduct()}
                    >
                        <FontAwesomeIcon icon={faPlus} /> Añadir producto
                    </Button>
                }
            </div>
            {!show &&
                <div className="d-flex flex-row justify-content-between">
                    <Dropdown className="m-3">
                        <Dropdown.Toggle>Entries: {entries}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => { setEntries(5) }}>5</Dropdown.Item>
                            <Dropdown.Item onClick={() => { setEntries(10) }}>10</Dropdown.Item>
                            <Dropdown.Item onClick={() => { setEntries(25) }}>25</Dropdown.Item>
                            <Dropdown.Item onClick={() => { setEntries(50) }}>50</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <InputGroup className="m-3" style={{ maxWidth: "20%" }}>
                        <InputGroup.Text >
                            <FontAwesomeIcon icon={faSearch} />
                        </InputGroup.Text>
                        <Form.Control type="text" placeholder="Search..." value={searchTerm} onChange={handleSearchChange} />
                    </InputGroup>
                </div>
            }

            {show && open ?
                <Collapse in={open}>

                    <div id="collapse" className="d-flex flex-row justify-content-between p-2">

                        <>
                            <Button
                                size="sm"
                                variant="primary"
                                className="text-light"
                                style={{ whiteSpace: "nowrap" }}
                                onClick={() => handleAddProduct()}
                            >
                                <FontAwesomeIcon icon={faPlus} /> Añadir producto
                            </Button>
                            <Dropdown>
                                <Dropdown.Toggle size="sm">Entries: {entries}</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => { setEntries(5) }}>5</Dropdown.Item>
                                    <Dropdown.Item onClick={() => { setEntries(10) }}>10</Dropdown.Item>
                                    <Dropdown.Item onClick={() => { setEntries(25) }}>25</Dropdown.Item>
                                    <Dropdown.Item onClick={() => { setEntries(50) }}>50</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </>

                    </div>

                </Collapse>
                : ''}


            {show &&
                <div className="d-flex flex-row">
                    <Button
                        variant="lighter"
                        style={{ boxShadow: "none", border: "none" }}
                        onClick={() => setOpen(!open)}
                        aria-controls="collapse"
                        aria-expanded={open}
                        className="m-3"
                    >
                        <FontAwesomeIcon aria-controls="settings" icon={faSliders} className="text-primary" size="lg" style={{ cursor: "pointer" }} />
                    </Button>
                    <InputGroup className="p-2" style={{ maxHeight: "70%" }}>
                        <InputGroup.Text >
                            <FontAwesomeIcon icon={faSearch} />
                        </InputGroup.Text>
                        <Form.Control type="text" placeholder="Search..." value={searchTerm} onChange={handleSearchChange} />
                    </InputGroup>
                </div>
            }
        </Container>
    )
};

export default PSettings;