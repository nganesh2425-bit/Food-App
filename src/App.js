import React, { useState } from "react";
import "./App.css";

const foodItems = [
  { id: 1, name: "Burger", price: 120 },
  { id: 2, name: "Pizza", price: 250 },
  { id: 3, name: "Biryani", price: 180 },
  { id: 4, name: "Sandwich", price: 90 },
  { id: 5, name: "French Fries", price: 70 },
];

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="container">
      <h1>🍔 Food Delivery App</h1>

      <h2>Menu</h2>
      <div className="menu">
        {foodItems.map((item) => (
          <div className="card" key={item.id}>
            <h3>{item.name}</h3>
            <p>Price: ₹{item.price}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <h2>🛒 Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - ₹{item.price}
            </li>
          ))}
        </ul>
      )}

      <h3>Total: ₹{totalPrice}</h3>
    </div>
  );
}

export default App;

