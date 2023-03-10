import React from "react";
import { Card, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

import TableRow from "./TableRow";

const PTable = ({ sortOrder, sortList, filteredProducts }) => {
    return (
        <Card border="gray-200" bg="gray-200" className="table-wrapper table-responsive shadow-sm">
            <Card.Body className="">
                <Table hover className="user-table align-items-center sticky">
                    <thead >
                        <tr>
                            <th className="border-bottom th-img">hardcoded</th>
                            <th className="border-bottom pointer" onClick={sortList}>CÓDIGO {sortOrder === "asc" ? <FontAwesomeIcon icon={faArrowUp} /> : <FontAwesomeIcon icon={faArrowDown} />}</th>
                            <th className="border-bottom">NOMBRE</th>
                            <th className="border-bottom">CATEGORÍA</th>
                            <th className="border-bottom">WEBS</th>
                            <th className="border-bottom">FICHAS</th>
                            <th className="border-bottom">IDIOMAS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredProducts.map(p => <TableRow key={p.id} {...p} />)}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

export default PTable;