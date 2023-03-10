import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ProductContext } from '../contexts/productContext';

//Pages
import ProductOverview from './ProductOverview';
import ProductTable from './ProductTable';
import ProductForm from './ProductForm';

// Data
import { list } from "../data/data";

const Home = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [productList, setProductList] = useState(list);
    const [show, setShow] = useState(false);

    const value = { selectedProduct, setSelectedProduct };

    return (
        <ProductContext.Provider value={value}>
            <Routes>
                <Route path="/" element={<ProductTable list={productList} show={show} setShow={setShow} />} />
                <Route path="/form" element={<ProductForm productList={productList} setProductList={setProductList} setShow={setShow} />} />
                <Route path="/overview" element={<ProductOverview />} />
            </Routes>
        </ProductContext.Provider>
    );
}

export default Home;