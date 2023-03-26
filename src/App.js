import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Feed from "./Feed.js";
import Widgets from "./Widget.js";

const App = () => {
  return (
    <div className="app">
      {/* sidebar */}
      <Sidebar />
      {/* feed */}
      <Feed />
      {/* widget */}
      <Widgets />
    </div>
  );
};

export default App;
