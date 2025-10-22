// import { StrictMode } from 'react'import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { BrowserRouter } from 'react-router-dom'
// import ReactDom from 'react-dom/client'

// ReactDom.createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//     < React.StrictMode>
//       <App />
//     </React.StrictMode>,
//   </BrowserRouter>
// )

// index.jsx (or main.jsx depending on your setup)
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import { CartProvider } from './stores/components/context/CartContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <CartProvider>
        <App />
      </CartProvider>
    </React.StrictMode>
  </BrowserRouter>
);
