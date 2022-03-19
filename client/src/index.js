import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from './Button';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



ReactDOM.render(
  // <Router>
  //   <Routes>
  //     <Route path="/" element={<Button />} />
  //   </Routes>
  // </Router>,
  <React.StrictMode>
    <Button />
  </React.StrictMode>,
  document.getElementById('root')
);