import { configureStore } from "@reduxjs/toolkit";
import { data } from "../api/dataApi";

export const store = configureStore({
    reducer: {
        [data.reducerPath]: data.reducer,
    },
    middleware: (defaultMiddleware) =>
        defaultMiddleware().concat(data.middleware),
});
