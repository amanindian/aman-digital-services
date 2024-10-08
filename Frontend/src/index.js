import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ProjectInfo from "./Context/ProjectInfo";
import ProductsDataProvider from "./Context/ProductsProvider";
import StateProvider from "./Context/StateProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProjectInfo>
      <ProductsDataProvider>
        <StateProvider>
          <App />
        </StateProvider>
      </ProductsDataProvider>
    </ProjectInfo>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
