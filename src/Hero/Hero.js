/* eslint-disable react/button-has-type */
import React from 'react';

function Hero() {
    return (
        <div className="hero min-h-screen bg-hero">
            <div className="hero min-h-screen rounded-xl bg-gray-700/30">
                <div className="hero-overlay bg-opacity-60" />
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md text-white">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">
                            Welcome to one of the best Furniture Manufacturer site. You will find
                            top class furniture
                        </p>
                        <a href="#products" className="btn btn-primary">
                            Explore
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
