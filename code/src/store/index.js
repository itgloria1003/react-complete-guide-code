import { createStore} from 'redux';
import {  createSlice, configureStore} from '@reduxjs/toolkit';
import {counterReducer} from './counter';
import {authReducer} from './auth';


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
const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});


const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;