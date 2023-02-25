import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form } from './AddForm.styled';

const AddForm = ({ onSubmit }) => {
  const [inputValues, setInputValues] = useState({
    name: '',
    number: '',
  });

  const handleOnChange = event => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit(inputValues);
    setInputValues({ name: '', number: '' });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={inputValues.name}
          onChange={handleOnChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        <input
          type="tel"
          name="number"
          placeholder="number"
          value={inputValues.number}
          onChange={handleOnChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">add contact</button>
    </Form>
  );
};

AddForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default AddForm;
