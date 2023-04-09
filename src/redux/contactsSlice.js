import { combineReducers, createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { filterReducer } from './filterSlice';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState.contacts,
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

const rootReducers = combineReducers({
  contacts: contactsSlice.reducer,
  filter: filterReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducers);

export const { addContact, deleteContact } = contactsSlice.actions;
