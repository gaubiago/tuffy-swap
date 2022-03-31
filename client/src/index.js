import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./pages/home/item_list_grid/ItemList";
import Item from "./pages/item/Item";
import Checkout from "./pages/checkout/Checkout";
import Register from "./pages/register/registeration_form/Register";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/item" element={<Item />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
