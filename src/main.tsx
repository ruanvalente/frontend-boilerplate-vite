import React from 'react';
import ReactDOM from 'react-dom/client';

// CSS styles
import { PrimeReactProvider } from 'primereact/api';
import './main.css';

import { App } from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PrimeReactProvider value={{ unstyled: false }}>
      <App />
    </PrimeReactProvider>
  </React.StrictMode>
);
