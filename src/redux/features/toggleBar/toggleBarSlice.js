import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isOpen: false
}

const tasksSlice = createSlice({
    name: "isOpen", 
    initialState,
    reducers: {
        openCloseFunc : (state) => {
            if(state.isOpen) {
                state.isOpen = false;
            } else {
                state.isOpen = true;
            }
        },
        openCloseWithValue: (state, condition) => {
            state.isOpen = condition.payload;
        }
    }
});

export const {openCloseFunc, openCloseWithValue} = tasksSlice.actions;

export default tasksSlice.reducer;