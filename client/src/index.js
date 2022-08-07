import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import axios from "axios";
import { ContextProvider } from "./context/Context";
axios.defaults.baseURL = "http://localhost:8000/api/";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);

// ReactDOM.render(
//   <ContextProvider>
//     <App />
//   </ContextProvider>,
//   document.getElementById("root")
// );
