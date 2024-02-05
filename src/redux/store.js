import { configureStore } from '@reduxjs/toolkit';
import toggleBarReducer from "./features/toggleBar/toggleBarSlice.js";

export const store = configureStore({
    reducer: {
        isOpen: toggleBarReducer,
    }   
});

