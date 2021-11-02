import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import ScrollToTop from './ScrollToTop.jsx';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
        <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
