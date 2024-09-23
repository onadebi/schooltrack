import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "react-calendar/dist/Calendar.css";
import "./index.css";
import { StoreContext, appServices } from "./app/services/appservices.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StoreContext.Provider value={appServices}>
      <App />
    </StoreContext.Provider>
  </StrictMode>
);
