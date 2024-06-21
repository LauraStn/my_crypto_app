"use client";
import { isAdmin } from "@/Utils/isAdmin";
import { isConnected } from "@/Utils/isConnected";
import { useAuth } from "@/context/authcontext";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

type Props = {
  isLogged: boolean;
};

const Header = (props: Props) => {
  // const { push } = useRouter();

  // const [loggedIn, setLoggedIn] = useState(false);

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const jwt = window.localStorage.getItem("token");
  //     const x = jwt !== null ? true : false;
  //     setLoggedIn(x);
  //     console.log(loggedIn);
  //   }
  // }, [loggedIn]);

  // const handleLogout = () => {
  //   window.localStorage.removeItem("token");
  //   setLoggedIn(false);
  //   redirect("/");
  // };
  const role = isAdmin();
  isAdmin();

  const { loggedIn, logout } = useAuth();
  return (
    <header className="sticky z-20 top-0">
      <nav className="bg-gray-200 text-gray-600 border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link href="/" className="flex items-center">
            <img
              src="https://cdn.pixabay.com/photo/2019/04/15/20/42/bitcoin-4130299_1280.png"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowra">
              CrypToo
            </span>
          </Link>
          <div className="flex items-center lg:order-2">
            {loggedIn ? (
              <button
                className=" bg-blue-700 text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={logout}
              >
                Log Out
              </button>
            ) : (
              <div>
                <Link
                  href="/login"
                  className="text-gray-700 hover:bg-gray-300 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none "
                >
                  Log in
                </Link>
                <Link
                  href="/register"
                  className=" bg-blue-700 text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Get started
                </Link>
              </div>
            )}

            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            {" "}
            {loggedIn ? (
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <Link
                    href="/"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-700 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0  lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    href="/crypto"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-700 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0  lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Crypto
                  </Link>
                </li>
                <li>
                  <Link
                    href="/offer"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-700 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0  lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Offers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/userDashboard"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-700 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0  lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Profil
                  </Link>
                </li>
                {role ? (
                  <li>
                    <Link
                      href="/adminDashboard"
                      className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-700 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0  lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Admin
                    </Link>
                  </li>
                ) : (
                  <span></span>
                )}
              </ul>
            ) : (
              <span className="self-center text-xl font-semibold whitespace-nowra">
                Welcome to our crypto website
              </span>
            )}
          </div>
        </div>
      </nav>{" "}
      <script src="https://unpkg.com/flowbite@1.4.7/dist/flowbite.js"></script>
    </header>
  );
};

export default Header;
