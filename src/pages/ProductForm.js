import React, { useState } from "react";
import { Container, Button, Form, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faPlus, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from 'uuid';

// Data
import { presetWebs, presetFiles, presetLanguages } from "../data/data";

const ProductForm = (props) => {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    // Image
    const [image, setImage] = useState("");

    // Code
    const [code, setCode] = useState("");

    // Name
    const [name, setName] = useState("");

    // Category
    const [category, setCategory] = useState("");

    // Webs
    const [chosenWebs, setChosenWebs] = useState([]);
    const [showWebsList, setShowWebsList] = useState(false);
    // - Form's web buttons
    const websToChoose = presetWebs.filter((web) => !chosenWebs.includes(web));
    const handleAddWeb = (web) => {
        setChosenWebs([...chosenWebs, web]);
        setShowWebsList(false);
    };
    const handleRemoveWeb = (index) => {
        const newWebs = [...chosenWebs];
        newWebs.splice(index, 1);
        setChosenWebs(newWebs);
    };
    const handleAddNewWeb = () => {
        setShowWebsList(true);
    };
    const handleCancelNewWeb = () => {
        setShowWebsList(false);
    };

    // Files
    const [chosenFiles, setChosenFiles] = useState([]);
    const [showFilesList, setShowFilesList] = useState(false);
    // - Form's file buttons
    const filesToChoose = presetFiles.filter((file) => !chosenFiles.includes(file));
    const handleAddFile = (file) => {
        setChosenFiles([...chosenFiles, file]);
        setShowFilesList(false);
    };
    const handleRemoveFile = (index) => {
        const newFiles = [...chosenFiles];
        newFiles.splice(index, 1);
        setChosenFiles(newFiles);
    };
    const handleAddNewFile = () => {
        setShowFilesList(true);
    };
    const handleCancelNewFile = () => {
        setShowFilesList(false);
    };

    // Languages
    const [chosenLanguages, setChosenLanguages] = useState([]);
    const [showLanguagesList, setShowLanguagesList] = useState(false);
    // - Form's language buttons
    const languagesToChoose = presetLanguages.filter((name) => !chosenLanguages.includes(name));
    const handleAddLanguage = (name) => {
        setChosenLanguages([...chosenLanguages, name]);
        setShowLanguagesList(false);
    };
    const handleRemoveLanguage = (index) => {
        const newLanguages = [...chosenLanguages];
        newLanguages.splice(index, 1);
        setChosenLanguages(newLanguages);
    };
    const handleAddNewLanguage = () => {
        setShowLanguagesList(true);
    };
    const handleCancelNewLanguage = () => {
        setShowLanguagesList(false);
    };

    // Sets the text to be displayed in the label
    const text = (text, chosen) => {
        if (chosen.length <= 1) {
            return <Form.Label>{text}: </Form.Label>;
        } else {
            return <Form.Label>{text}s: </Form.Label>;
        }
    };
    const handleClose = () => setShow(false);
    const handleAddProduct = (e) => {
        e.preventDefault();
        const newProduct = {
            id: uuidv4(),
            img: image,
            code: code,
            name: name,
            category: category,
            webs: chosenWebs,
            files: chosenFiles,
            languages: chosenLanguages,
        };
        props.setProductList([...props.productList, newProduct]);
        setImage("");
        setCode("");
        setName("");
        setCategory("");
        setChosenWebs([]);
        setChosenFiles([]);
        setChosenLanguages([]);
        props.setM(props.m + 1);
        setShow(true);
        setTimeout(() => {
            handleClose();
            navigate(-1);
        }, 1500);
    };

    return (
        <main>
            <Modal show={show} onHide={handleClose} backdrop={false} >
                <Modal.Body>Product added successfully!</Modal.Body>
            </Modal>
            <Container fluid className="pt-2">

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
                    <div className="mb-4 mt-4">
                        <h2 className="h2">Nuevo producto</h2>
                    </div>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Código:</Form.Label>
                            <Form.Control type="text" value={code} onChange={(e) => setCode(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Nombre:</Form.Label>
                            <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Categoría:</Form.Label>
                            <Form.Control type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>URL de la imagen:</Form.Label>
                            <Form.Control type="text" value={image} onChange={(e) => setImage(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            {text("Web", chosenWebs)}
                            <div >
                                {chosenWebs.length > 0 && (
                                    <div xs="6">
                                        {chosenWebs.map((name, index) => (
                                            <Button
                                                variant="info"
                                                className="m-1"
                                                key={name}
                                                onClick={() => handleRemoveWeb(index)}
                                                style={{ position: "relative" }}
                                            >
                                                {name}{" "}
                                                <FontAwesomeIcon icon={faCircleXmark} style={{ position: "absolute", top: "1px", right: "1px" }} />
                                            </Button>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div >
                                {!showWebsList &&
                                    (websToChoose.length < 1 ? (
                                        ""
                                    ) : (
                                        <Button
                                            size="sm"
                                            className="m-1"
                                            style={{ position: "relative", boxShadow: "none" }}
                                            onClick={handleAddNewWeb}
                                            variant="outline-primary"
                                        >
                                            <FontAwesomeIcon icon={faPlus} /> Añadir web
                                        </Button>
                                    ))}
                            </div>
                            {showWebsList && (
                                <div >
                                    {websToChoose.map((name) => (
                                        <Button
                                            className="m-1"
                                            key={name}
                                            onClick={() => handleAddWeb(name)}
                                        >
                                            {name}
                                        </Button>
                                    ))}
                                    <Button variant="outline-primary" size="sm" onClick={handleCancelNewWeb}>
                                        Cancelar
                                    </Button>
                                </div>
                            )}

                        </Form.Group>
                        <Form.Group className="mb-3">
                            {text("File", chosenFiles)}
                            <div >
                                <div >
                                    {chosenFiles.length > 0 && (
                                        <div xs="6">
                                            {chosenFiles.map((name, index) => (
                                                <Button
                                                    variant="success"
                                                    className="m-1"
                                                    key={name}
                                                    onClick={() => handleRemoveFile(index)}
                                                    style={{ position: "relative" }}
                                                >
                                                    {name}{" "}
                                                    <FontAwesomeIcon icon={faCircleXmark} style={{ position: "absolute", top: "1px", right: "1px" }} />
                                                </Button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <div >
                                    {!showFilesList &&
                                        (filesToChoose.length < 1 ? (
                                            ""
                                        ) : (
                                            <Button
                                                size="sm"
                                                variant="outline-primary"
                                                className="m-1"
                                                style={{ position: "relative" }}
                                                onClick={handleAddNewFile}
                                            >
                                                <FontAwesomeIcon icon={faPlus} /> Añadir ficha
                                            </Button>
                                        ))}
                                </div>
                                {showFilesList && (
                                    <div >
                                        {filesToChoose.map((name) => (
                                            <Button
                                                className="m-1"
                                                key={name}
                                                onClick={() => handleAddFile(name)}
                                            >
                                                {name}
                                            </Button>
                                        ))}
                                        <Button variant="outline-primary" size="sm" onClick={handleCancelNewFile}>
                                            Cancelar
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            {text("Idioma", chosenLanguages)}
                            <div xs="6"></div>
                            {chosenLanguages.length > 0 && (
                                <div >
                                    {chosenLanguages.map((name, index) => (
                                        <Button
                                            style={{ border: "none", padding: "0", marginRight: "20px", boxShadow: "none" }}
                                            key={name}
                                            variant="lighter"
                                            onClick={() => handleRemoveLanguage(index)}
                                        >
                                            <img
                                                style={{ position: "relative" }}
                                                src={`https://www.countryflagicons.com/FLAT/64/${name.toUpperCase()}.png`}
                                                alt="..."
                                            />
                                            <FontAwesomeIcon icon={faCircleXmark} style={{ position: "absolute" }} />
                                        </Button>
                                    ))}
                                </div>
                            )}
                            <div >
                                {!showLanguagesList &&
                                    (languagesToChoose.length < 1 ? (
                                        ""
                                    ) : (
                                        <Button
                                            size="sm"
                                            variant="outline-primary"
                                            className="m-1"
                                            onClick={handleAddNewLanguage}
                                        >
                                            <FontAwesomeIcon icon={faPlus} /> Añadir idioma
                                        </Button>
                                    ))}
                            </div>
                            {showLanguagesList && (
                                <div >
                                    {languagesToChoose.map((name) => (
                                        <Button
                                            style={{ border: "none", padding: "0", marginRight: "20px", boxShadow: "none" }}
                                            variant="lighter"
                                            key={name}
                                            onClick={() => handleAddLanguage(name)}
                                        >
                                            <img
                                                src={`https://www.countryflagicons.com/FLAT/64/${name.toUpperCase()}.png`}
                                                alt="..."
                                            />
                                        </Button>
                                    ))}
                                    <Button
                                        variant="outline-primary"
                                        color="dark"
                                        size="sm"
                                        onClick={handleCancelNewLanguage}
                                    >
                                        Cancelar
                                    </Button>
                                </div>
                            )}
                        </Form.Group>
                        <Button variant="dark" className="float-end mb-4" onClick={handleAddProduct}>
                            <FontAwesomeIcon icon={faPlus} /> Aceptar
                        </Button>
                    </Form>
                </Container>
            </Container>
        </main>
    );
}

export default ProductForm;