import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { ContactItem } from './ContactListItem.styled';

export const Item = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };
  return (
    <ContactItem>
      <span>
        {name} : {number}
      </span>

      <button type="button" onClick={() => handleDelete(id)}>
        Delete contact
      </button>
    </ContactItem>
  );
};

Item.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
