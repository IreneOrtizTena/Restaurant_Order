import { itMatchesOne } from "daisyui/src/lib/postcss-prefixer/utils";
import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { menuContext } from "./App";


function Uorder() {
  const ordersList = []
  const { order, orders, setOrders, categories, setCategories, dishes, setDishes, dish_id, quantity } =
    useContext(menuContext);
    

  // const { newOrder, setNewOrder } = useContext(menuContext);

  // const { addOrder, setAddOrder } = useState();

  // const { counter, setCounter } = useState();

  useEffect(() => {}, []);
  
  

  // console.log(orders);
  // let result
  // result = orders.map(i=> {i})
  // console.log(result);

  // function Orderhandler(e) {
  //   let item = addOrder((i) => i.id === e.target.value);
  //   if (item) {
  //     setAddOrder((i) => [...i, item]);
  //   }
  // }

  // function MenuList({ items, onAdd }) {
  //   return (
  //     <ul>
  //       {items.map((i) => (
  //         <li key={i.id}>
  //           <label>
  //             {i.name} - quantity: {i.quantity}{" "}
  //             <button
  //               onClick={(e) => {
  //                 onAdd(i.id);
  //               }}
  //             >
  //               Add
  //             </button>
  //           </label>
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }

  // const deleteHandler = (e) => {
  //   setNewOrder(newOrder.filter((i) => i.id != e.target.value));
  // };

  return (
    <div>
      

      
      {orders && orders.map((i) => <h1>{i.data}</h1>)}
      {/* <>  
          <MenuList> items={items.menu} onAdd={Orderhandler} </MenuList>
          </>  */}

      <div className="card w-auto bg-neutral text-neutral-content">
        <div className="card-body items-center text-left">
        <h2 className="card-title">Your Order!!</h2>
        {order.map(i => <>
        <p><span>Name: {dishes.find(j=> j.id == i.item_id).name}</span> | Quantity: {i.quantity}</p>
      </>)}
       
          

          {/* <button onClick={Orderhandler}></button> */}

          <div className="card-actions justify-end"></div>

          
          <h2 className="card-title">{orders && orders.map((i) => <h1>{i.data}</h1>)} </h2>
          
          <div className="card-actions justify-end">
            
          </div>
        </div>
        
        {/* HERE IS THE BUTTON DELETE */}
        {/* {newOrder.map((i) => (
            <>
              <h1>{i.name}</h1>

              <h2> {i.description}</h2>
              <h3>{i.price}</h3>
              <button
                className="btn btn-primary "
                value={i.id}
                onClick={deleteHandler}
              >
                Delete
              </button>
              <br />
            </>
          ))} */}
        <div className="card-actions justify-end">
          <button className="btn btn-ghost mt-6" >+</button>
          <button className="btn btn-ghost mt-6 ">-</button>
        </div>
      </div>
      <div className="card-actions justify-end">
      {/* here is the button for the pop-up */}
      <label htmlFor="my-modal-3" className="btn mt-6 text-zinc-800 space-x-10 ">
        BUY
      </label>
     </div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2 mt-6"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            Congratulations your order is done!
          </h3>
          <p className="py-4">We are working in your order</p>
        </div>
      </div>
       


         </div>

         
         
  );
}

export default Uorder;
