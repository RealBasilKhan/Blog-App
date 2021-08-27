import React from "react";
import Homepage from "./Components/Homepage";
import Navbar from "./Components/Navbar";

import "./styling/app.css";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Homepage />
    </div>
  );
};

export default App
