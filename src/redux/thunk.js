import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsAPI from '../utils/contactsAPI';

export const getContactsThunk = createAsyncThunk(
  'contacts/get',
  async (_, thunkAPI) => {
    try {
      const data = await contactsAPI.fetchContacts();
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addContactsThunk = createAsyncThunk(
  'contacts/add',
  async (data, thunkAPI) => {
    try {
      const res = await contactsAPI.addContact(data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteContactsThunk = createAsyncThunk(
  'contacts/delete',
  async (id, thunkAPI) => {
    try {
      const res = await contactsAPI.deleteContact(id);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);