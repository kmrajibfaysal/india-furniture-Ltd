/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable react/button-has-type */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

function Header({ cart, setCart }) {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    const [currentCart, setCurrentCart] = useState([]);

    const logOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <nav className="sticky top-0 z-50 bg-[rgba(255,255,255,0.93)]  py-3">
            <div className="container  mx-auto">
                <div className="navbar font-josefin font-extrabold">
                    <div className="navbar-start hidden md:block">
                        <ul className="nav-link menu menu-horizontal p-0 uppercase">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/">Shop</Link>
                            </li>
                            <li>
                                <Link to="/blog">Blog</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="navbar-center mx-auto">
                        <Link
                            to="/"
                            className="cursor-pointer text-3xl font-bold normal-case  text-primary outline-none"
                        >
                            India Furniture Ltd.
                        </Link>
                    </div>
                    <div className="navbar-end md:hidden">
                        <div className="dropdown-end dropdown">
                            <label tabIndex="0" className="btn btn-ghost btn-circle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h7"
                                    />
                                </svg>
                            </label>
                            <ul
                                tabIndex="0"
                                className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
                            >
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/shop">Shop</Link>
                                </li>
                                <li>
                                    <Link to="/blog">Blog</Link>
                                </li>
                                <li>
                                    <Link to="/portfolio">Portfolio</Link>
                                </li>

                                <li>
                                    {!user ? (
                                        <Link to="/login">Login</Link>
                                    ) : (
                                        <button
                                            type="button"
                                            className="text-sm font-semibold hover:bg-transparent hover:text-primary"
                                            onClick={logOut}
                                        >
                                            Sign out
                                        </button>
                                    )}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="navbar-end hidden md:flex">
                        <button className="btn btn-ghost btn-circle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </button>
                        {/* cart */}
                        <div className="dropdown-end dropdown">
                            <label tabIndex="0" className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                        />
                                    </svg>
                                    <span className="badge indicator-item badge-sm text-primary">
                                        {cart.length}
                                    </span>
                                </div>
                            </label>
                            <div
                                tabIndex="0"
                                className="card dropdown-content card-compact mt-3 w-52 bg-base-100 shadow"
                            >
                                <div className="card-body">
                                    <span className="text-lg font-bold">8 Items</span>
                                    <span className="text-info">Subtotal: $999</span>
                                    <div className="card-actions">
                                        <button
                                            onClick={() => navigate('/cart')}
                                            className="btn btn-primary btn-block"
                                        >
                                            View cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dropdown-end dropdown">
                            <label tabIndex="0" className="avatar btn btn-ghost btn-circle">
                                <div className="w-10 rounded-full">
                                    <img
                                        src={
                                            user?.photoURL
                                                ? user.photoURL
                                                : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
                                        }
                                    />
                                </div>
                            </label>
                            <ul
                                tabIndex="0"
                                className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
                            >
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li>
                                    <a>Settings</a>
                                </li>
                                <li>
                                    {!user ? (
                                        <Link to="/login">Login</Link>
                                    ) : (
                                        <button
                                            type="button"
                                            className="text-sm font-semibold uppercase hover:bg-transparent hover:text-primary"
                                            onClick={logOut}
                                        >
                                            Sign out
                                        </button>
                                    )}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;
