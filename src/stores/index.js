// src/store/index.js

import { configureStore } from '@reduxjs/toolkit';
import fileReducer from './reducers/file';

const store = configureStore({
  reducer: {
    products: fileReducer,
  },
});

export default store;
