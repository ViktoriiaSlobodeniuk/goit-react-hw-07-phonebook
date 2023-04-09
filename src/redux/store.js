import { contactsReduser } from './contactsSlice';
import { filterReducer } from './filterSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    contacts: contactsReduser,
    filter: filterReducer,
  },
});
