import React, { useContext } from 'react'
import { ProductContext } from '../contexts/productContext'
import { Image, Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";

const TableRow = (props) => {
    const { img, code, name, category, webs, files, languages } = props;

    const selectedProduct = {
        img: img,
        code: code,
        name: name,
        category: category,
        webs: webs,
        files: files,
        languages: languages
    }
    const { setSelectedProduct } = useContext(ProductContext);
    const navigate = useNavigate();

    const handleSelect = () => {
        setSelectedProduct(selectedProduct);
        navigate('/overview');

    };

    const webPrinter = (webs) => {
        if (webs.length < 3) {
            return (
                <>
                    {webs.map((web, i) => (
                        <Button key={i} className='m-1' variant="info" size="xs" style={{ pointerEvents: "none" }}>
                            {web}
                        </Button>
                    ))}
                </>
            );
        } else {
            return (
                <>
                    <Button className='m-1' variant="info" size="xs" style={{ pointerEvents: "none" }}>
                        {webs[0]}
                    </Button>
                    <Button className='m-1' variant="info" size="xs" style={{ pointerEvents: "none" }}>
                        {webs[1]}
                    </Button>
                    <Button className='m-1' variant="info" size="xs" style={{ pointerEvents: "none" }}>
                        + {webs.length - 2}
                    </Button>
                </>
            );
        }
    };



    return (
        <tr onClick={() => handleSelect()} style={{ cursor: "pointer" }}>
            <td className='td-image p-2'>
                <Image fluid src={img} alt="..." onError={(e) => { e.target.onerror = null; e.target.src = "https://picsum.photos/200" }} />
            </td>
            <td>
                <span className="fw-normal">
                    {code.toUpperCase()}
                </span>
            </td>
            <td>
                <span className="fw-normal">
                    {name.toUpperCase()}
                </span>
            </td>
            <td>
                <span className="fw-normal">
                    {category.toUpperCase()}
                </span>
            </td>
            <td>
                <span className="fw-normal">
                    {webPrinter(webs)}
                </span>
            </td>
            <td>
                <span className="fw-normal">
                    {files.map((file, i) => (
                        <Button key={i} variant="tertiary" size="xs" className='m-1' style={{ pointerEvents: "none" }}>
                            {file}
                        </Button>
                    ))}
                </span>
            </td>
            <td>
                <span className="fw-normal">
                    {languages.map((flag, i) => (
                        <Image
                            key={i}
                            alt="..."
                            style={{ maxWidth: "40px", padding: "2px" }}
                            src={`https://www.countryflagicons.com/FLAT/64/${flag.toUpperCase()}.png`}
                        />
                    ))}
                </span>
            </td>
        </tr>
    );
};

export default TableRow