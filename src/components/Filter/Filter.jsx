import PropTypes from 'prop-types';
import { Input } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <Input
      name="name"
      type="text"
      placeholder="find contacts by name"
      value={value}
      onChange={onChange}
    ></Input>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
