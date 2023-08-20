import { createSlice } from '@reduxjs/toolkit';

export const filterContactSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContact(state, action) {
      return (state = action.payload);
    },
  },
});

export const filterForContacts = state => state.filter;
export const { filterContact } = filterContactSlice.actions;
