import React from "react";
import "./App.scss";
import Header from "./components/Header";
import ColumesWrapper from "./components/ColumesWrapper";

function App() {
  return (
    <div className="App">
      <Header value="Should i eat at McDonalds?" />
      <ColumesWrapper />
    </div>
  );
}

export default App;
