/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function SingleItem({ product, setCart, cart }) {
    const { _id, name, seller, description, price, quantity, supplier, img } = product;

    // const handleAddToCart = async () => {
    //     localStorage.setItem('product', JSON.stringify(product);
    // };

    return (
        <div>
            <div className="mx-3 my-3 max-h-[600px] max-w-xs rounded-lg border border-gray-200 bg-white shadow-md ">
                <a href="#">
                    <img
                        className="mx-auto max-h-[250px] rounded-t-lg pt-2 transition-all duration-200 hover:scale-105"
                        src={img}
                        alt=""
                    />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {name}
                        </h5>
                    </a>
                    <div className="mb-3 font-normal text-gray-900 dark:text-gray-400">
                        <p className=" text-gray-600"> {`${description.slice(0, 55)}...`} </p>{' '}
                        <br />
                        <span>Price: ৳.{price} </span> <br />
                        <span>Quantity: {quantity}</span> <br />
                        <span>Supplier: {supplier}</span> <br />
                    </div>
                    <button
                        onClick={() => {
                            setCart([...cart, product]);
                            console.log(cart.length);
                        }}
                        type="button"
                        className="inline-flex items-center rounded-lg bg-sky-700 py-2 px-5 text-center text-sm font-medium text-white hover:bg-sky-800 focus:outline-none "
                    >
                        Add to cart
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
    );
}

export default SingleItem;
