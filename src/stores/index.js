import { configureStore } from '@reduxjs/toolkit';
import appSettingsReducer from './reducers/app';
import fileReducer from './reducers/file';
import proccessReducer from './reducers/process.ts';
import alertReducer from './reducers/alert';

const store = configureStore({
  reducer: {
    settings: appSettingsReducer,
    file: fileReducer,
    process: proccessReducer,
    alert: alertReducer
  },
});

export default store;
