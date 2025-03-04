import React from "react";


import Sidebar from "./component/Sidebar";

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <h2>Welcome to Dashboard</h2>
      </div>
    </div>
  );
}

export default App;

