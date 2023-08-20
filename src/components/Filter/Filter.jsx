import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/filterContactsSlice';

import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleInputChange = e => {
    dispatch(filterContact(e.target.value));
  };

  return (
    <div>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        name="filter"
        onChange={handleInputChange}
        className={css.input}
      ></input>
    </div>
  );
};