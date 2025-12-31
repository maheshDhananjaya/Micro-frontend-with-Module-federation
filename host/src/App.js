import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProductPage from "./ProductPage";
const ProductList = React.lazy(() => import("productApp/ProductList"));


const App = () => {
    return (
        <div style={{ padding: "20px" }}>
            <h1>Host App</h1>
            <BrowserRouter>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<ProductList />} />
                        <Route path="/product" element={<ProductPage />} />
                        <Route path="/*" element={<ProductList />} />
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </div>
    );
};

export default App;
