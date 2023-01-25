import { itMatchesOne } from "daisyui/src/lib/postcss-prefixer/utils";
import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { menuContext } from "./App";
import cc from "../src/components/images/credit-card.png";
import { Link } from "react-router-dom";

function Uorder() {
  const ordersList = [];
  const {
    total,
    settotal,
    order,
    orders,
    setOrders,
    categories,
    setCategories,
    dishes,
    setDishes,
    dish_id,
    quantity,
    price,
  } = useContext(menuContext);

  function collectingPrice() {
    let result = 0;
    order.forEach((element) => {
      let dish = dishes.find((i) => i.id == element.item_id);
      result += Number(element.quantity) * Number(dish.price);
    });
    settotal(result);
  }

  const [inputValue, setInputValue] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    collectingPrice();
  }, []);

  return (
    <div>
      <div className="card w-auto bg-neutral text-neutral-content text-2xl" data-theme="autumn">
        <div className="card-body items-center text-left">
          <h2 className="card-title text-2xl">Your Order!!</h2>

          {order.map((i) => (
            <>
              <p>
                <span>{dishes.find((j) => j.id == i.item_id).name}</span>{" "}
                ........ Price: {dishes.find((k) => k.id == i.item_id).price}€ *
                {i.quantity} ={" "}
                {Number(i.quantity) *
                  Number(dishes.find((k) => k.id == i.item_id).price)}
                €
              </p>
            </>
          ))}
          <h1>Order total is: {total && total}€</h1>

          <div className="card-actions justify-end"></div>

          <div className="card-actions justify-end"></div>
        </div>
      </div>
      <div className="card-actions justify-center">
        <label
          htmlFor="my-modal-6"
          className="btn mt-6 text-zinc-800 space-x-10 text-2xl"
        >
          BUY
        </label>
      </div>

      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <form className="form-style space-y-4" onSubmit={handleSubmit}>
          <label>
            Name and Surname:
            <input
              class="w-96 rounded-lg border-gray-200 p-3 text-sm"
              type="text"
              placeholder="Name and Surname"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <img src={cc} className="" />
            Credit Card Number:
            <input
              class="w-96 rounded-lg border-gray-200 p-3 text-sm"
              type="text"
              placeholder="Number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <form className="form-style space-y-4" onSubmit={handleSubmit}>
              <label>
                Expiration Date:
                <input
                  class="w-96 rounded-lg border-gray-200 p-3 text-sm"
                  type="/"
                  placeholder="Date"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <div className="modal-action">
                  <div className="modal-box relative">
                    <label htmlFor="my-modal-6" className="">
                      <a>
                        <Link
                          to={"/"}
                          className="btn btn-sm btn-circle absolute right-2 top-2 mt-6"
                        >
                          ✕
                        </Link>
                      </a>
                    </label>
                    <h3 className="text-lg font-bold w-30">Thank you!</h3>
                  </div>
                </div>
              </label>
            </form>
          </label>
        </form>
      </div>
    </div>
  );
}

export default Uorder;
