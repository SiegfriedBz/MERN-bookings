import React from 'react';
import ReactDOM from 'react-dom/client';
import { PropertyContextProvider } from './contexts/propertyContext'
import App from './App';
import * as bootstrap from 'bootstrap';
import './scss/main.scss'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <PropertyContextProvider>
            <App />
        </PropertyContextProvider>
  </React.StrictMode>
);

reportWebVitals();
