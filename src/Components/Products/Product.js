/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */

import { useEffect, useState } from 'react';
import Loading from '../Loading/Loading';
import SingleProduct from './SingleProduct';

function Product({ cart, setCart }) {
    const [loading, setLoading] = useState(true);
    const [selected, setSelected] = useState('');

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://dry-dusk-31189.herokuapp.com/inventory')
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .then(() => setLoading(false));
    }, [selected]);

    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(cart));
    }, [cart]);

    const handleFilter = async (event) => {
        await setSelected(event.target.value);
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <div id="products" className="bg-gray-100 pb-6 pt-12">
            <div className="container mx-auto">
                <div className="flex justify-around">
                    <div className="ml-6">
                        <h1 className="text-center text-4xl">Our stock</h1>
                        <div className="mb-4 w-full">
                            <div className="mx-auto my-0 h-1 w-48 rounded-t bg-gradient-to-r from-sky-500 to-white py-0 " />
                        </div>
                    </div>
                    <select
                        defaultValue={selected}
                        onChange={handleFilter}
                        className="select select-bordered max-w-xs"
                    >
                        <option disabled selected>
                            Filters
                        </option>
                        <option>bed</option>
                        <option>wardrobe</option>
                        <option>chair</option>
                        <option>sofa</option>
                    </select>
                </div>

                <div>
                    <div className="align-center mx-auto flex max-w-[1368px] flex-wrap justify-center">
                        {products
                            .filter((product) =>
                                selected ? product.category === selected : product.category !== ''
                            )
                            .map((product) => (
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
    );
}

export default Product;
