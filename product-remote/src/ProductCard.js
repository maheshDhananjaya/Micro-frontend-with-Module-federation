import React from 'react'

const ProductCard = () => {
    return (
        <div style={{ width: 200, height: 200, border: "1px solid black", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h4 style={{ alignItems: "center", flexWrap: "nowrap" }}>Product name : Mango</h4>
            <h5>Price : $50</h5>
        </div>
    )
}

export default ProductCard