

import React from "react";

const Header = ({ handleLogout }) => {
  const user = localStorage.getItem("loggedInUser");

  return (
    <header className="p-4 bg-blue-500 text-white flex justify-between items-center">
      <h1 className="text-xl">
  {user ? `Welcome,  ${user}` : "Please log in"}
</h1>

      <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded">
        Logout
      </button>
    </header>
  );
};

export default Header;

