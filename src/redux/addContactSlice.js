import { createSlice } from '@reduxjs/toolkit';

export const addContactSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const getContacts = state => state.contacts;
export const { addContact } = addContactSlice.actions;
export const { deleteContact } = addContactSlice.actions;
