import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  return (
    <div>
      <h2>Phonebook</h2>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};