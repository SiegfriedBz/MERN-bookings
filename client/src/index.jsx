import React from 'react';
import ReactDOM from 'react-dom/client';
import { PropertyContextProvider } from './contexts/propertyContext'
import App from './App';
import * as bootstrap from 'bootstrap';
import './assets/scss/main.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <PropertyContextProvider>
            <App />
        </PropertyContextProvider>
  </React.StrictMode>
);
