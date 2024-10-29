// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import api from './components/PlayersApi'; // Adjust the import based on your file structure

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
