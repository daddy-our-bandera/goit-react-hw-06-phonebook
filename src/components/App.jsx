import { useSelector } from 'react-redux';

import AddForm from 'components/AddForm/AddForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Section } from './Section/Section.styled';
import { getContacts, getFilter } from 'redux/selectors';

function App() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const normalizedFilter = filter.toLowerCase();
  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <div>
      <Section>
        <h1>Phonebook</h1>
        <AddForm />
      </Section>

      <Section>
        <h2>Contacts</h2>

        {filterContacts.length > 0 || filter ? (
          <Filter value={filter} />
        ) : (
          <h1>No contacts added</h1>
        )}

        <ContactList contacts={filterContacts} />
      </Section>
    </div>
  );
}

export { App };
