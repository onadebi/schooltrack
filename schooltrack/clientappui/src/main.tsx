import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "react-calendar/dist/Calendar.css";
import "./index.css";
import { StoreContext, appServices } from "./app/services/appservices.ts";
import { Provider } from "react-redux";
import storeKeeper from "./app/store/storeKeeper.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={storeKeeper}>
      <StoreContext.Provider value={appServices}>
        <App />
      </StoreContext.Provider>
    </Provider>
  </StrictMode>
);
