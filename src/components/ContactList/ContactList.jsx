import css from './ContactList.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { filterForContacts } from 'redux/filterContactsSlice';
import { getContactsThunk, deleteContactsThunk } from 'redux/thunk';
import { useEffect } from 'react';
import { Spinner } from 'components/Loader/Loader';

export const ContactList = () => {
  const { contacts, error, isLoading} = useSelector(state => state.contacts);
  const filter = useSelector(filterForContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>{isLoading&&<Spinner/>}
      {error && <p>error</p>}
      {filteredContacts && (
        <ul className={css.list}>
          {filteredContacts.map(({ name, phone, id }) => (
            <li key={id} className={css.contactList}>
              <div className={css.contact}>
                <p>
                  {name}: {phone}
                </p>
                <button
                  type="button"
                  onClick={() => dispatch(deleteContactsThunk(id))}
                  className={css.btnDelete}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};