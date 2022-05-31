/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */

import { useEffect, useState } from 'react';
import Loading from './Loading';
import SingleProduct from './SingleProduct';

function Product() {
    const [loading, setLoading] = useState(true);

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://dry-dusk-31189.herokuapp.com/inventory')
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .then(() => setLoading(false));
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="bg-gray-100 pb-6 pt-12">
            <div className="container mx-auto">
                <h1 className="text-center text-4xl">Our stock</h1>
                <div className="mb-4 w-full">
                    <div className="mx-auto my-0 h-1 w-48 rounded-t bg-gradient-to-r from-sky-500 to-white py-0 " />
                </div>
                <div>
                    <div className="align-center mx-auto flex max-w-[1368px] flex-wrap justify-center">
                        {products.map((product) => (
                            <SingleProduct key={product._id} product={product} />
                        ))}
                    </div>
                    <div className="mt-5 flex items-center justify-center">
                        <button
                            type="button"
                            className="mb-4 inline-flex items-center rounded-lg bg-sky-700 py-2 px-5 text-center text-sm font-medium text-white hover:bg-sky-800 focus:outline-none focus:ring-4 focus:ring-sky-300 "
                        >
                            Manage Inventory
                            <svg
                                className="ml-2 -mr-1 h-4 w-4"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
