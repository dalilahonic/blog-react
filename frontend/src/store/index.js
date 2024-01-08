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

//...............................................................

const articlesSlice = createSlice({
  name: 'articles',
  initialState: null,
  reducers: {
    addData(state, action) {
      return action.payload;
    },
  },
});

//................................................

const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    posts: articlesSlice.reducer,
  },
});

export const themeActions = themeSlice.actions;
export const postsActions = articlesSlice.actions;

export default store;
