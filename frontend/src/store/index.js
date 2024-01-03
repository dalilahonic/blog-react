import {
  configureStore,
  createSlice,
} from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: { darkTheme: true },
  reducers: {
    toggleTheme(state) {
      state.darkTheme = !state.darkTheme;
    },
  },
});

const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
  },
});

export const themeActions = themeSlice.actions;

export default store;
