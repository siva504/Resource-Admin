// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';

const rootElement = document.getElementById('root');

const renderApp = () => {
  createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

// If you're using React 18 or above, use createRoot
if (rootElement?.hasChildNodes()) {
  renderApp();
} else {
  renderApp();
}


