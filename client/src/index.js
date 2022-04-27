import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './pages/home/item_list_grid/ItemListGrid';
import Checkout from './pages/checkout/Checkout';
import Register from './pages/register/registration_form/Register';
import Login from './pages/login/Login';
import ItemTemplate from './pages/item/ItemTemplate';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/checkout' element={<Checkout />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/item/:id' element={<ItemTemplate />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
