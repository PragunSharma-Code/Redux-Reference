import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
}

export const CounterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {

        increment: (state) => {
            state.value  += 1
        },

        decrement: (state) => {
            state.value -= 1
        }
    }
});

//Whenever we take any functionality from the reducers, the following is the syntax .
export const { increment, decrement } = CounterSlice.actions;
export default CounterSlice.reducer;