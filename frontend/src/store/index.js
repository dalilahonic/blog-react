import {
  configureStore,
  createSlice,
} from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'blog',
  initialState: {},
  reducer: {},
});

const store = configureStore({
  blog: slice.reducer,
});

export const sliceActions = slice.actions;

export default store;
