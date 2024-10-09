import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/UserSlice/UserSlice";
import counterReducer from "./slices/CounterSlice/CounterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
