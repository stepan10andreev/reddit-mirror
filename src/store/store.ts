import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from './token/token';

export const store = configureStore({
  reducer: {
    token: tokenReducer,
  }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
