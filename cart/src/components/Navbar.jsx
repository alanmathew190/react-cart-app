import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/userSlice";

function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);
  const user = useSelector((state) => state.user.loggedInUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    alert("Logged out successfully!");
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-xl font-bold">🛍️ MyCart</h1>

      <div className="flex items-center gap-5">
        <p>Cart: {cartItems.length}</p>
        {user ? (
          <>
            <p>{user.email}</p>
            <button
              onClick={handleLogout}
              className="bg-red-500 px-3 py-1 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <p className="text-gray-300">Not Logged In</p>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
