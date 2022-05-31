/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable react/button-has-type */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

function Header() {
    const [user, loading] = useAuthState(auth);

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
                            CARPENCO
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
                        <ul className="nav-link menu menu-horizontal   cursor-pointer p-0 uppercase">
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
                        {/* search button */}
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
                        {/* notification button */}
                        <button className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                </svg>
                                <span className="badge indicator-item badge-xs badge-primary">
                                    3
                                </span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;
