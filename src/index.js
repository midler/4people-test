import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h1 className="visually-hidden">Logo company's site for sell Fiberglass</h1>
    <App />
  </React.StrictMode>
);
