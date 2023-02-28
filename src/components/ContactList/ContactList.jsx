import { Item } from 'components/ContactListItem/ContactListItem';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { Filter } from 'components/Filter/Filter';
import { Section } from 'components/Section/Section.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const normalizedFilter = filter.toLowerCase();
  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <Section>
      {filterContacts.length > 0 || filter ? (
        <Filter value={filter} />
      ) : (
        <h1>No contacts added</h1>
      )}
      <List>
        {filterContacts.map(({ id, name, number }) => (
          <Item key={id} id={id} name={name} number={number} />
        ))}
      </List>
    </Section>
  );
};
