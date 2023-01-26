import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { menuContext } from "./App";

function Spanishdishes() {
  const {
    order,
    setOrder,
    orders,
    setOrders,
    categories,
    setCategories,
    dishes,
    setDishes,
    addItem,
    price,
  } = useContext(menuContext);

  useEffect(() => {}, []);

  return (
    <div className="card m-5 w-96 bg-base-100 shadow-xl justify-between text-xl">
      {dishes
        .filter((item) => item.category_id == 1)
        .map((i) => (
          <div>
            <div className="card-body">
              <img src={i.photo} alt="" />
              <h2 className="card-title text-2xl">{i.name} </h2>
              <p>{i.description} </p>
              <h3>Price: {i.price}€ </h3>
              <div className="card-actions justify-end ">
                <form onSubmit={addItem} className="card-actions justify-end ">
                  <input
                    type="number"
                    placeholder="Type here"
                    min="1"
                    defaultValue={1}
                    
                    name="quantity"
                    className="input input-bordered "
                  />

                  <button
                    name="itemId"
                    value={i.id}
                    className="btn btn-primary"
                  >
                    ADD
                    
                  </button>
                  
                </form>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Spanishdishes;
