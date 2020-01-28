import React from "react";
import Movies from "./components/movies";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="row m-4">
        <Movies />
      </div>
    </div>
  );
}

export default App;
