import {  createSlice} from '@reduxjs/toolkit';

//1) slice (initialState, reducers , actions)
// counter state 
const initialCounterState = {
  counter: 0,
  showCounter: true,
  byamount: 12
};
const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    // only used within redux toolkit since its immutable 
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload.byamount;
    },
    toogle(state) {
      state.showCounter = !state.showCounter;
    }
  }
});


export const counterReducer = counterSlice.reducer; 
export const counterActions = counterSlice.actions; 
