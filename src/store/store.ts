import { configureStore } from "@reduxjs/toolkit";
import { productsService } from "../services/productsService";
import { authService } from "../services/authService";
import authReducer from "./authSlice";


export const store = configureStore({
  reducer: {
    [productsService.reducerPath]: productsService.reducer,
    [authService.reducerPath]: authService.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsService.middleware, authService.middleware)
})
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>