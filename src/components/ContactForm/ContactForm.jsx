import { nanoid } from 'nanoid';
import { useState } from 'react';
import css from './ContactForm.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { addContact, getContacts } from 'redux/addContactSlice';

export const ContactForm = () => {
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = e => {
    const name = e.target.name;
    switch (name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;

      default:
        break;
    }
  };

  const newContact = { name: name, number: number, id: nanoid() };

  const handleSubmit = e => {
    e.preventDefault(e);
    contacts.find(contact => contact.name === name)
      ? alert(`${name} is already in contacts`)
      : dispatch(addContact(newContact));

    setName('');
    setNumber('');
  };

  const nameInputId = nanoid();
  const numberImputId = nanoid();
  return (
    <div>
      <form onSubmit={handleSubmit} className={css.form}>
        <div className={css.nameInput}>
          <label htmlFor={nameInputId} className={css.label}>
            Name
          </label>
          <input
            id={nameInputId}
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
            className={css.input}
          />
        </div>
        <div className={css.numberInput}>
          <label htmlFor={numberImputId} className={css.label}>
            Number
          </label>
          <input
            id={numberImputId}
            type="tel"
            name="number"
            value={number}
            onChange={handleInputChange}
            pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            className={css.input}
          />
        </div>

        <button type="submit" className={css.btnAddContact}>
          Add contact
        </button>
      </form>
    </div>
  );
};