
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    tasks: []
}

const tasksSlice = createSlice({
    name: "tasksSlice", 
    initialState,
    reducers: {
        increment : (state) => {
            console.log(state)
        }
    }
});

export const {increment} = tasksSlice.actions;

export default tasksSlice.reducer;