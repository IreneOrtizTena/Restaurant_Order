import React, { useContext } from "react";
import { menuContext } from "./App";


function Listdata() {

  const {data} = useContext(menuContext);

  return (
    
    <div className="Menu">

        {data&& data.menu.map((i, j) => <h1 key={j}>{i.name}</h1>)}

           
              {/* <h3>{i.description}</h3>
              <h4>{i.price}</h4>  */}

       {/* {data.orders.map((i) => (
          <div>
            <h1>ORDERS</h1>

            <p>{i.number}</p>
            {i.items.map((a) => (
          
          <div>
            <h4>{a.category[0]}</h4>
              </div>
            ))}
          </div>
        // ))}
       */}
    </div> 
  )
}
export default Listdata;
