/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */

import { useEffect, useState } from 'react';
import Hero from '../../Hero/Hero';
import Loading from '../Loading/Loading';
import SingleProduct from './SingleProduct';

function Product({ cart, setCart }) {
    const [loading, setLoading] = useState(true);

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://dry-dusk-31189.herokuapp.com/inventory')
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .then(() => setLoading(false));
    }, []);

    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(cart));
    }, [cart]);

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            <Hero />
            <div id="products" className="bg-gray-100 pb-6 pt-12">
                <div className="container mx-auto">
                    <h1 className="text-center text-4xl">Our stock</h1>
                    <div className="mb-4 w-full">
                        <div className="mx-auto my-0 h-1 w-48 rounded-t bg-gradient-to-r from-sky-500 to-white py-0 " />
                    </div>
                    <div>
                        <div className="align-center mx-auto flex max-w-[1368px] flex-wrap justify-center">
                            {products.map((product) => (
                                <SingleProduct
                                    setCart={setCart}
                                    cart={cart}
                                    key={product._id}
                                    product={product}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Product;
