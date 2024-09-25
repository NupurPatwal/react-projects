import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import './App.css';  // Import custom CSS globally


import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
