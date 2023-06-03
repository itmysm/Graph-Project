import { configureStore } from '@reduxjs/toolkit';
import fileReducer from './reducers/file';
import proccessReducer from './reducers/process';

const store = configureStore({
  reducer: {
    file: fileReducer,
    process: proccessReducer
  },
});

export default store;
