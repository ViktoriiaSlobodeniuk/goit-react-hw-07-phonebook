import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState.filter,
  reducers: {
    filterValue(state, action) {
      return action.payload;
    },
  },
});

export const { filterValue } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
