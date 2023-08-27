import axios from 'axios';

axios.defaults.baseURL = 'https://64e636fd09e64530d17fbea2.mockapi.io';

export const fetchContacts = async () => {
  const data = await axios.get('/contacts');
  return data;
};

export const addContact = async contact => {
  const res = await axios.post('/contacts', contact);
  return res;
};

export const deleteContact = async id => {
  const res = await axios.delete(`/contacts/${id}`);
  return res;
};