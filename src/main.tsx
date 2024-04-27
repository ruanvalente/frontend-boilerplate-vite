import React from "react";
import ReactDOM from "react-dom/client";

// CSS styles
import "@/lib/primereact";
import "@/theme/tailwindcss";
import { PrimeReactProvider } from "primereact/api";

// Layouts
import { Layouts } from "@/shared/layouts";

// Application
import { App } from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PrimeReactProvider value={{ unstyled: true, pt: {} }}>
      <Layouts>
        <App />
      </Layouts>
    </PrimeReactProvider>
  </React.StrictMode>,
);
