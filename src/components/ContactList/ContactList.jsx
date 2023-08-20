import { nanoid } from 'nanoid';
import css from './ContactList.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, getContacts } from 'redux/addContactSlice';
import { filterForContacts } from 'redux/filterContactsSlice';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(filterForContacts);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {filteredContacts.map(({ name, number, id }) => (
        <li key={nanoid()} className={css.contactList}>
          <div className={css.contact}>
            <p>
              {name}: {number}
            </p>
            <button
              type="button"
              onClick={() => dispatch(deleteContact(id))}
              className={css.btnDelete}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};