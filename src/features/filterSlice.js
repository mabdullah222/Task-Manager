import { createSlice } from '@reduxjs/toolkit';

const initialState = 'all';

// Create the filter slice
const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action) => action.payload,
  },
});

export const { setFilter } = filterSlice.actions;


export default filterSlice.reducer;
