import React, { Suspense } from "react";

const ProductCard = React.lazy(() =>
    import("productApp/ProductCard")
);

export default function ProductPage() {
    return (
        <div>
            <h2>Product Page</h2>

            <Suspense fallback={<div>Loading product...</div>}>
                <ProductCard />
            </Suspense>
        </div>
    );
}
