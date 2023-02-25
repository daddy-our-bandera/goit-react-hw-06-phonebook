import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import AddForm from 'components/AddForm/AddForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Section } from './Section/Section.styled';

const firstData = [
  { id: nanoid(4), name: 'Arnold Schwarzenegger', number: '5558801' },
  { id: nanoid(4), name: 'Sylvester Stallone', number: '5558802' },
  { id: nanoid(4), name: 'Bruce Willis', number: '5558803' },
  { id: nanoid(4), name: 'Jason Statham', number: '5558804' },
];
const savedData = JSON.parse(localStorage.getItem('phonebook'));

function App() {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(
    savedData ? [...savedData] : firstData
  );

  useEffect(() => {
    localStorage.setItem('phonebook', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = data => {
    if (
      contacts.some(
        ({ name }) => name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      alert(`${data.name} is already in contacts`);
    } else {
      const newContact = {
        id: nanoid(4),
        name: data.name,
        number: data.number,
      };

      setContacts([...contacts, newContact]);
    }
  };

  const normalizedFilter = filter.toLowerCase();
  const filterContacts = contacts.filter(el =>
    el.name.toLowerCase().includes(normalizedFilter)
  );
  const deleteContact = contactID => {
    setContacts(contacts.filter(contact => contact.id !== contactID));
  };

  const filterChange = event => {
    setFilter(event.currentTarget.value);
  };

  return (
    <div>
      <Section>
        <h1>Phonebook</h1>
        <AddForm onSubmit={addContact} />
      </Section>

      <Section>
        <h2>Contacts</h2>

        {filterContacts.length > 0 || filter ? (
          <Filter value={filter} onChange={filterChange} />
        ) : (
          <h1>No contacts added</h1>
        )}

        <ContactList contacts={filterContacts} deleteContact={deleteContact} />
      </Section>
    </div>
  );
}

export { App };
