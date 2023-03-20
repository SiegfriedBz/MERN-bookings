import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { PropertyContextProvider } from './contexts/propertyContext'
import App from './App';
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
