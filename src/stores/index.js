import { configureStore } from '@reduxjs/toolkit';
import { fileReducer } from './reducers/file';

const store = configureStore({
  reducer: {
    file: fileReducer,
  },
});

export default store;
