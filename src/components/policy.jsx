import React from 'react';
import {Event} from '../tracking';

const Policy = () => {
    return (
        <div>
            Policy
            <button onClick={() => Event("PRODUCT", "Product added to cart", "PRODUCT_PAGE")}>
                Add to Cart
            </button>
        </div>
    );
};

export default Policy;