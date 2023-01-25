import React from "react";
import logo from "../src/components/images/logojpg.jpg";
import { Link } from "react-router-dom";
import OrderNow from "./Uorder";

function Navbar() {
  return (
    <div className="navbar bg-amber-50 py-2.5 mx-5 min-h-4 text-red-900 text-xl ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 "
          >
            <li tabIndex={0}>
              <a className="justify-between ">
                Menu
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                    <Link to={"/Spanishdishes"} className="">
                  <button>
                      Spanish
                  </button>
                    </Link>
                </li>
                <li>
                    <Link to={"/Italiandishes"} className="">
                  <button>
                      Italian
                  </button>
                    </Link>
                </li>
                <li>
                    <Link to={"/Menu"} className="">
                  <button>
                      Drinks and Desserts
                  </button>
                    </Link>
                </li>
              </ul>

                <Link to={"/Uorder"} className="">
              <button>
                  Your Order
              </button>
                </Link>
            </li>
          </ul>
        </div>
        <img src={logo} className="rounded w-36 h-26 my-6 nav m-10" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/Spanishdishes"} className="">
              <button>Spanish Dishes</button>
            </Link>
          </li>

          <li>
            <Link to={"/Italiandishes"} className="">
              <button>Italian Dishes</button>
            </Link>
          </li>

          <li>
            <Link to={"/Menu"} className="">
              <button>Drinks and Desserts</button>
            </Link>
          </li>

          <li>
            <Link to={"./Uorder"} className="">
              <button>Your Order</button>
            </Link>
          </li>

          <li>
            <Link to={"./Booknow"} className="">
              <button>Book Now</button>
            </Link>{" "}
          </li>

          <li>
            <a>Location</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a>
          <Link to={"./"} className="btn text-xl m-10">
            HOME
          </Link>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
