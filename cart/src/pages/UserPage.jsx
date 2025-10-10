import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../features/cartSlice";
import { login } from "../features/userSlice";

function UserPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [products] = useState([
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Phone", price: 20000 },
    { id: 3, name: "Headphones", price: 3000 },
  ]);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.loggedInUser);
  const cart = useSelector((state) => state.cart.items);

  const handleLogin = (e) => {
    e.preventDefault();
    const userData = { email, password };
    dispatch(login(userData));
    alert("Logged in successfully!");
  };

  return (
    <div className="p-6">
      {!user ? (
        <form
          onSubmit={handleLogin}
          className="flex flex-col gap-3 w-72 mx-auto mt-10"
        >
          <h2 className="text-xl font-bold text-center">Login</h2>
          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="bg-blue-500 text-white py-2 rounded">Login</button>
        </form>
      ) : (
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-5">Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {products.map((item) => (
              <div
                key={item.id}
                className="border p-4 rounded-lg shadow hover:shadow-lg"
              >
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p>₹{item.price}</p>
                <button
                  onClick={() => dispatch(addToCart(item))}
                  className="bg-green-500 text-white px-3 py-1 rounded mt-2"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-10">🛒 Your Cart</h2>
          {cart.length === 0 ? (
            <p>No items in cart</p>
          ) : (
            <ul className="mt-4">
              {cart.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center border-b py-2"
                >
                  <span>
                    {item.name} - ₹{item.price}
                  </span>
                  <button
                    onClick={() => dispatch(removeFromCart(index))}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default UserPage;
