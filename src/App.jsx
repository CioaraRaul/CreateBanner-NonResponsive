// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import CreatePage from "./components/CreatePage";
import FromSelect from "./components/FromSelect";
import Main from "./components/Main";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/search" element={<SearchBar />} />
        <Route path="/CreatePage" element={<CreatePage />} />
        <Route path="/FromSelect" element={<FromSelect />} />
      </Routes>
    </div>
  );
}

export default App;
