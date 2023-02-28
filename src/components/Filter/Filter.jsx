import { useDispatch, useSelector } from 'react-redux';

import { filterChange } from 'redux/contactsSlice';
import { getFilter } from 'redux/selectors';
import { Input } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleFilter = event => {
    dispatch(filterChange(event.currentTarget.value));
  };
  return (
    <Input
      name="name"
      type="text"
      placeholder="find contacts by name"
      value={filter}
      onChange={handleFilter}
    ></Input>
  );
};
