import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "@/redux/reducers";

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export type AppStore = ReturnType<typeof configureStore>;
export type AppState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
