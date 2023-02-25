import PropTypes from 'prop-types';
import { ContactItem } from './ContactListItem.styled';

export const Item = ({ id, name, number, deleteContact }) => {
  return (
    <ContactItem>
      <span>
        {name} : {number}
      </span>

      <button type="button" onClick={() => deleteContact(id)}>
        Delete contact
      </button>
    </ContactItem>
  );
};

Item.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
