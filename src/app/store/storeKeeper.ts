import { configureStore } from "@reduxjs/toolkit";
import { RootReducer } from "./RootReducer";
import appsettings from "../../config/appsettings";

const storeKeeper = configureStore({
    reducer: RootReducer,
    devTools: appsettings.env.includes('dev'),
});

export default storeKeeper;