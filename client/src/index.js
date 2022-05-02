import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './pages/home/item_list_grid/ItemListGrid';
import ItemTemplate from './pages/item/ItemTemplate';
import Checkout from './pages/checkout/Checkout';
import Profile from './pages/profile/Profile'
import Register from './pages/register/registration_form/Register';
import Login from './pages/login/Login';
import ResetPassword from './pages/reset_password/ResetPassword';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/item/:id' element={<ItemTemplate />} />
      <Route path='/checkout' element={<Checkout />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/reset_password' element={<ResetPassword />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();