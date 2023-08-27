import { configureStore } from '@reduxjs/toolkit';
import { contactSlice } from './contactSlice';
import { filterContactSlice } from './filterContactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactSlice.reducer,
    filter: filterContactSlice.reducer,
  },
});
