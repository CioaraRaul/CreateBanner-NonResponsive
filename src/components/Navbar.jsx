import React from "react";

import "tailwindcss/tailwind.css";

function Navbar() {
  // Now you can use history.push("/your-path") or other navigation methods

  return (
    <div>
      <header>
        <div
          className="flex justify-between bg-gray-400 px-3 py-2 "
          id="header-creatopy"
        >
          <a href="/search">
            <p className="text-2xl text-gray-700 cursor-pointer">
              Preview ANIMATED BANNERS using React
            </p>
          </a>

          <a href="/">
            <p className="text-2xl text-gray-700 cursor-pointer">Creatopy</p>
          </a>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
