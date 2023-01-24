import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { menuContext } from "./App";

function Menu() {
  const { order, setOrder, orders, setOrders, categories, setCategories, dishes, setDishes, addItem, } = useContext(menuContext);

  // const drinkis = data.menu.filter((i) => i.category.includes("Drinks"));

  // const [drinks, setDrinks] = useState(drinkis);
  // const [showDrinks, setShowDrinks] = useState(false);

  // const postres = data.menu.filter((i) => i.category.includes("Desserts"));

  // const [desserts, setDesserts] = useState(postres);
  // const [showDesserts, setShowDesserts] = useState(false);

  function orderHandler(e) {
    

    }
    useEffect(() => {

    },[])

 

  return (
    <div className="card w-96 bg-base-100 shadow-xl justify-between flex">
      
      {dishes.filter(item => item.category_id == 3).map(i => (  
  
          <div>
            <div className="card-body">
              <img src={i.photo} />
              <h2 className="card-title">{i.name} </h2>
              <p>{i.description} </p>
              <h3>Price: {i.price} </h3>
              <div className="card-actions justify-end">
              <form onSubmit={addItem} className="card-actions justify-end">
                <input type="number" min="1" name="quantity" />
                <button name="itemId" value={i.id} className="btn btn-primary">
                  ADD
                </button>
              </form>
              </div>
            </div>
          </div>
        ))}

      {/* <button onClick={() => setShowDrinks(!showDrinks)} className="btn">
        {" "}
        Drinks
      </button>
      
      <button onClick={() => setShowDesserts(!showDesserts)} className="btn">
        Desserts
      </button> */}

      {dishes.filter(item => item.category_id == 4).map(i => (  
          <div>
            <div className="card-body">
              <img src={i.photo} />
              <h2 className="card-title">{i.name} </h2>
              <p>{i.description} </p>
              <h3>Price: {i.price} </h3>
              <div className="card-actions justify-end">
              <form onSubmit={addItem} className="card-actions justify-end">
                <input type="number" min="1" name="quantity" />
                <button name="itemId" value={i.id} className="btn btn-primary">
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
export default Menu;
