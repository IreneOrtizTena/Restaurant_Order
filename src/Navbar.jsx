import React from "react";
import logo from "../src/components/images/logojpg.jpg";
import { Link } from "react-router-dom";
import OrderNow from "./Uorder";

function Navbar() {
  return (
    <div className="navbar bg-base-100 py-2.5 mx-5 min-h-4 ">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li tabIndex={0}>
              <a className="justify-between">
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
                  <button>
                    <Link to={"/Spanishdishes"} className="">
                      Spanish
                    </Link>
                  </button>
                </li>
                <li>
                  <button>
                    <Link to={"/Italiandishess"} className="">
                      Italian
                    </Link>
                  </button>
                </li>
                <li>
                  <button>
                    <Link to={"/Menu"} className="">
                      Drinks
                    </Link>
                  </button>
                </li>
                <li>
                  <button>
                    <Link to={"/Menu"} className="">
                      Desserts
                    </Link>
                  </button>
                </li>
              </ul>
            </li>
            <li>
              <a>Order</a>
            </li>
            <li>
              <a>Your Order</a>
            </li>
          </ul>
        </div>
        <img src={logo} className="rounded w-20 h-20 my-6 nav" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <button>
              <Link to={"/Spanishdishes"} className="">
                Spanish Dishes
              </Link>
            </button>
          </li>
          <li>
            <button>
              <Link to={"/Italiandishes"} className="">
                Italian Dishes
              </Link>
            </button>
          </li>

          <li tabIndex={0}>
            <a className="justify-between">
              Drinks and Desserts
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2">
              <li>
                <button>
                  <Link to={"/Menu"} className="">
                    Drinks
                  </Link>
                </button>
              </li>
              <li>
                <button>
                  <Link to={"/Menu"} className="">
                    Desserts
                  </Link>
                </button>
              </li>
            </ul>
          </li>
          <li>
            <a>
              <Link to={"./Uorder"} className="">
                Your Order
              </Link>
            </a>
          </li>
          <li>
            <a>
              <Link to={"./Booknow"} className="">
                Book Now
              </Link>{" "}
            </a>
          </li>

          <li>
            <a>Location</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a>
          <Link to={"./"} className="btn">
            HOME
          </Link>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
