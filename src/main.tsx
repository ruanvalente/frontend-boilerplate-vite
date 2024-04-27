import React from 'react';
import ReactDOM from 'react-dom/client';

// CSS styles
import '@/lib/primereact';
import '@/theme/tailwindcss';
import { PrimeReactProvider } from 'primereact/api';

import { App } from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PrimeReactProvider value={{ unstyled: true, pt: {} }}>
      <App />
    </PrimeReactProvider>
  </React.StrictMode>
);
