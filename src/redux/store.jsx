import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "./features/counter/counterSlice.jsx";
// import loggerMiddleware from './middleware/logger'
import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    counter: counterReducer 
  },
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(logger),
})