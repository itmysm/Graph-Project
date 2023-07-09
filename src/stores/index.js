import { configureStore } from '@reduxjs/toolkit';
import fileReducer from './reducers/file';
import proccessReducer from './reducers/process';
import alertReducer from './reducers/alert';


const store = configureStore({
  reducer: {
    file: fileReducer,
    process: proccessReducer,
    alert: alertReducer
  },
});

export default store;
