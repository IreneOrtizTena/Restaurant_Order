
import "./App.css";
import datajson from './data.json'

const menu = [
  {
    id: "1",
    name: "Fried Calamari",
    description: "Calamari fried in flour and egg.",
    price: "14€",
    category: ["Spanish", "Fish"],
  },

  {
    id: "2",
    name: "Garlic Prawns",
    description: "Prawns with garlic and parsley with olive oil.",
    price: "15€",
    category: ["Spanish", "Fish"],
  },

  {
    id: "3",
    name: "Hake with seafood",
    description: "hake, garlic, peas and white wine.",
    price: "18€",
    category: ["Spanish", "Fish"],
  },

  {
    id: "4",
    name: "Sirloin with Whisky",
    description: "Sirloin, Whisky, garlic with olive oil.",
    price: "16€",
    category: ["Spanish", "Meat"],
  },

  {
    id: "5",
    name: "Meatballs with Tomato and fried potatoes",
    description:
      "Beef meat, white wine, garlic, parsley, spanish tomatoes with olive oil.",
    price: "14€",
    category: ["Spanish", "Meat"],
  },

  {
    id: "6",
    name: "Serranito Sandwich",
    description:
      "Bread with pork steak, spanish ham, fresh tomatoes, fried green pepper with fried potatoes",
    price: "17€",
    category: ["Spanish", "Meat"],
  },

  {
    id: "7",
    name: "Tortilla de Patatas",
    description: "Spanish tipical Omelette",
    price: "10€",
    category: ["Spanish", "Vegetarian"],
  },

  {
    id: "8",
    name: "Fried Eggplants",
    description: "battered eggplant with Honey ",
    price: "8€",
    category: ["Spanish", "Vegetarian"],
  },

  {
    id: "9",
    name: "Aioli Potatoes",
    description: "Boils Potatoes with Aioli ",
    price: "8€",
    category: ["Spanish", "Vegetarian"],
  },
];

const order = [
  {
    number: "1259",
    delivery: "Restaurant",
    totalPrice: "89€",
    totalItems: "5",
    items: [
      {
        id: "8",
        name: "Fried Eggplants",
        description: "battered eggplant with Honey ",
        price: "8€",
        category: ["Spanish", "Vegetarian"],
      },
      {
        id: "9",
        name: "Aioli Potatoes",
        description: "Boils Potatoes with Aioli ",
        price: "8€",
        category: ["Spanish", "Vegetarian"],
      },
    ],
  },

  {
    number: "1286",
    delivery: "Address",
    totalPrice: "64€",
    totalItems: "6",
    items: [
      {
        id: "3",
        name: "Hake with seafood",
        description: "hake, garlic, peas and white wine.",
        price: "18€",
        category: ["Spanish", "Fish"],
      },
      {
        name: "Sirloin with Whisky",
        description: "Sirloin, Whisky, garlic with olive oil.",
        price: "16€",
        category: ["Spanish", "Meat"],
      },
    ],
  },
];

function App() {

  return (
    <div className="App"> 

          {datajson && datajson.menu.map((i, j) => <h1 key={j}>(i.name)</h1>)}
       
          {/* <h2>{i.name}</h2>
          <h3>{i.description}</h3>
          <h4>{i.price}</h4> */}

        </div>
  );
}
     

     {order.map (i =>
       <div><h1>ORDERS</h1>
        <p>{i.number}</p>
      {i.items.map(a => <div><h4>{a.category[0]}</h4></div>)}
    
       </div>
      )
    } 
     



  
export default App;

