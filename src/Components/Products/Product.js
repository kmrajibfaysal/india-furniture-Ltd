/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */

import { useEffect, useState } from 'react';
import Loading from '../Loading/Loading';
import SingleProduct from './SingleProduct';

function Product() {
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState([]);

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
                </div>
            </div>
        </div>
    );
}

export default Product;
