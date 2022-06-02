/* eslint-disable no-underscore-dangle */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import SingleItem from './SingleItem';

function Cart({ cart }) {
    return (
        <div className="bg-gray-100">
            <div className="container mx-auto mt-10">
                <div className="my-10 flex flex-col shadow-md md:flex-row">
                    <div className="bg-white px-10 py-10 md:w-3/4">
                        <div className="flex justify-between border-b pb-8">
                            <h1 className="text-2xl font-semibold">Shopping Cart</h1>
                            <h2 className="text-2xl font-semibold">{cart.length} Items</h2>
                        </div>
                        <div className="mt-10 mb-5 flex">
                            <h3 className="w-2/5 text-xs font-semibold uppercase text-gray-600">
                                Product Details
                            </h3>
                            <h3 className="w-1/5 text-center text-xs font-semibold uppercase text-gray-600">
                                Quantity
                            </h3>
                            <h3 className="w-1/5  text-center text-xs font-semibold uppercase text-gray-600">
                                Price
                            </h3>
                            <h3 className="w-1/5 text-center text-xs font-semibold uppercase text-gray-600">
                                Total
                            </h3>
                        </div>

                        {/* Single Product */}
                        {cart.map((product) => (
                            <SingleItem key={product._id} product={product} />
                        ))}
                        <a href="#" className="mt-10 flex text-sm font-semibold text-indigo-600">
                            <svg
                                className="mr-2 w-4 fill-current text-indigo-600"
                                viewBox="0 0 448 512"
                            >
                                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                            </svg>
                            Continue Shopping
                        </a>
                    </div>

                    <div id="summary" className=" px-8 py-10 md:w-1/4">
                        <h1 className="border-b pb-8 text-2xl font-semibold">Order Summary</h1>
                        <div className="mt-10 mb-5 flex justify-between">
                            <span className="text-sm font-semibold uppercase">Items 3</span>
                            <span className="text-sm font-semibold">590$</span>
                        </div>
                        <div>
                            <label className="mb-3 inline-block text-sm font-medium uppercase">
                                Shipping
                            </label>
                            <select className="block w-full p-2 text-sm text-gray-600">
                                <option>Standard shipping - $10.00</option>
                            </select>
                        </div>
                        <div className="py-10">
                            <label
                                htmlFor="promo"
                                className="mb-3 inline-block text-sm font-semibold uppercase"
                            >
                                Promo Code
                            </label>
                            <input
                                type="text"
                                id="promo"
                                placeholder="Enter your code"
                                className="w-full p-2 text-sm"
                            />
                        </div>
                        <button className="bg-red-500 px-5 py-2 text-sm uppercase text-white hover:bg-red-600">
                            Apply
                        </button>
                        <div className="mt-8 border-t">
                            <div className="flex justify-between py-6 text-sm font-semibold uppercase">
                                <span>Total cost</span>
                                <span>$600</span>
                            </div>
                            <button className="w-full bg-indigo-500 py-3 text-sm font-semibold uppercase text-white hover:bg-indigo-600">
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
