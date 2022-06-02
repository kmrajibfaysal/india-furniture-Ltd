import React from 'react';

function SingleItem({ product }) {
    return (
        <div className="-mx-8 flex items-center px-6 py-5 hover:bg-gray-100">
            <div className="flex w-2/5">
                <div className="w-20">
                    <img className="h-24" src={product.img} alt="" />
                </div>
                <div className="ml-4 flex flex-grow flex-col justify-between">
                    <span className="text-sm font-bold">{product.name}</span>
                    <span className="text-xs text-red-500">{product.supplier}</span>
                    <a href="/" className="text-xs font-semibold text-gray-500 hover:text-red-500">
                        Remove
                    </a>
                </div>
            </div>
            <div className="flex w-1/5 justify-center">
                <svg className="w-3 fill-current text-gray-600" viewBox="0 0 448 512">
                    <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg>

                <input className="mx-2 w-8 border text-center" type="text" value="1" />

                <svg className="w-3 fill-current text-gray-600" viewBox="0 0 448 512">
                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg>
            </div>
            <span className="w-1/5 text-center text-sm font-semibold">T {product.price}.00</span>
            <span className="w-1/5 text-center text-sm font-semibold">T {product.price}.00</span>
        </div>
    );
}

export default SingleItem;
