import React, { useState } from "react";
import { Link } from "react-router-dom";
import Ordernow from "./Uorder";

function Hero() {
  return (
    <div
      className="hero min-h-screen "
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1517926967795-31943e805dae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80/1000/800/arch")`,
      }}
    >
      <div className="hero-overlay bg-opacity-45 "></div>
      <div className="hero-content text-center text-neutral-content ">
        <div className="max-w-md ">
          <h1 className="mb-5 text-5xl font-bold ">DEAR GUEST</h1>
          <p className="mb-5 text-2xl">
            In the heart of Munich, we take you on a gastronomic journey to
            Spain and Italy and enchant your taste buds. On our menu you will
            find a wide variety of starters and typical Spanish and Italian
            dishes, which we will be happy to prepare for you. Whether fish,
            meat or vegetarian specialities, we have something for every dish.
          </p>

          
        </div>
      </div>
    </div>
  );
}

export default Hero;
