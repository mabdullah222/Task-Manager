import { createSlice } from '@reduxjs/toolkit';

const preferencesSlice = createSlice({
  name: 'preferences',
  initialState: { theme: 'light', language: 'en' },
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { toggleTheme, setLanguage } = preferencesSlice.actions;
export default preferencesSlice.reducer;
