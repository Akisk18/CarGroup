import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import CarContextProvider from "./context/CarContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CarContextProvider>
        <App />
      </CarContextProvider>
    </BrowserRouter>
  </StrictMode>
);
