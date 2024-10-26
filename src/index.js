import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // You can remove this line if you don't have an index.css file
import App from './App.jsx'; // Assumes you have an App.js file in the src folder

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
