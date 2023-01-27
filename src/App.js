import "./App.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Ordernow from "./Uorder";
import Menu from "./Menu";
import json from "./data.json";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { createContext } from "react";
import About from "./About";
import Spanishdishes from "./Spanishdishes";
import Italiandishes from "./Italiandishes";
import Booknow from "./Booknow";
import Uorder from "./Uorder";
import axios from "axios";
import Contact from "./Contact";

export const menuContext = createContext();

function App() {
  const [dishes, setDishes] = useState();
  const [categories, setCategories] = useState();
  const [orders, setOrders] = useState();
  const [spanish, setSpanish] = useState();
  const [order, setOrder] = useState([]);
  const [total, settotal] = useState(0);

  function addItem(e) {
    e.preventDefault();
    let orderItem = {
      item_id: e.target.itemId.value,
      quantity: e.target.quantity.value,
    };
    setOrder((i) => [...i, orderItem]);
  }

  // const [newOrder, setNewOrder] = useState([])
  async function fetching() {
    axios("https://restaurant-order-api.onrender.com/dishes").then((i) =>
      setDishes(i.data)
    );

    axios("https://restaurant-order-api.onrender.com/categories").then((i) =>
      setCategories(i.data)
    );
    axios("https://restaurant-order-api.onrender.com/orders").then((i) =>
      setOrders(i.data)
    );
  }

  useEffect(() => {
    fetching();
  }, []);

  return (
    <>
      <BrowserRouter>
        <menuContext.Provider
          value={{
            total,
            settotal,
            addItem,
            order,
            setOrder,
            spanish,
            orders,
            setOrders,
            categories,
            setCategories,
            dishes,
            setDishes,
          }}
        >
          <div
            className="flex justify-between flex-col min-h-screen items-center bg-accent font-bold"
            data-theme="autumn"
          >
            <Navbar />
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/ordernow" element={<Ordernow />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/spanishdishes" element={<Spanishdishes />} />
              <Route path="/italiandishes" element={<Italiandishes />} />
              <Route path="/booknow" element={<Booknow />} />
              <Route path="/uorder" element={<Uorder />} />
            </Routes>

            <Footer />
          </div>
        </menuContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
