import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Components
import Sidebar from "../components/Sidebar";
import LowerNavbar from "../components/LowerNavbar";
import Footer from "../components/Footer";
import PTable from "../components/PTable";
import PSettings from "../components/PSettings";


const ProductTable = (props) => {
    const [products, setProducts] = useState(props.list);
    const [entries, setEntries] = useState(10);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOrder, setSortOrder] = useState("desc");
    // React router history
    const navigate = useNavigate();

    const handleAddProduct = () => {
        navigate("/form");
    };

    // Handles the search input change
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // Sorts the product list based on the code
    const sortList = () => {
        const sortedList = [...products].sort((a, b) => {
            if (sortOrder === "asc") {
                return a.code.localeCompare(b.code);
            } else {
                return b.code.localeCompare(a.code);
            }
        })
        setProducts(sortedList);
        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    }
    // Filters the product list based on the search term
    const filteredProducts = products.filter((product) => (
        product.code.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
        product.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
        product.category.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    ));

    return (
        <>
            <Sidebar />
            <main className="content">

                <LowerNavbar />
                <PSettings
                    handleAddProduct={handleAddProduct}
                    entries={entries}
                    setEntries={setEntries}
                    searchTerm={searchTerm}
                    handleSearchChange={handleSearchChange}
                />
                {/* Product list */}
                <PTable
                    sortOrder={sortOrder}
                    sortList={sortList}
                    filteredProducts={filteredProducts.slice(0, entries)}
                />
                <Footer />
            </main>
        </>
    );
}

export default ProductTable;



