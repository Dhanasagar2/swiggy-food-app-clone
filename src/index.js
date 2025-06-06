// src/index.js
import React from "react";
import ReactDOM from "react-dom/client"; // for React 18 and onwards
import App from './App'; // Import the main App component
import './index.css'; // Import your CSS file (ensure this file exists or remove this line if not needed)

const root = ReactDOM.createRoot(document.getElementById("root")); // Get the root DOM element
root.render(
  <React.StrictMode>
    <App /> {/* Main App component */}
  </React.StrictMode>
);
