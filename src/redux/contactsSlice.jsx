import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const firstData = [
  { id: nanoid(4), name: 'Rosie Simpson', number: '459-12-56' },
  { id: nanoid(4), name: 'Hermione Kline', number: '443-89-12' },
  { id: nanoid(4), name: 'Eden Clements', number: '645-17-79' },
  { id: nanoid(4), name: 'Annie Copeland', number: '227-91-26' },
];
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: firstData,
    filter: '',
  },
  reducers: {
    addContact(state, action) {
      if (
        state.contacts.some(
          ({ name }) => name.toLowerCase() === action.payload.name.toLowerCase()
        )
      ) {
        alert(`${action.payload.name} is already in contacts`);
      } else {
        const newContact = {
          id: nanoid(4),
          name: action.payload.name,
          number: action.payload.number,
        };
        state.contacts.push(newContact);
      }
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(({ id }) => id !== action.payload);
    },
    filterChange: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, filterChange } =
  contactsSlice.actions;

export default contactsSlice.reducer;
