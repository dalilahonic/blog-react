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
    addData(_, action) {
      return action.payload;
    },
    saveArticle(state, action) {
      const targetIndex = state.findIndex(
        (obj) =>
          obj.attributes.heading === action.payload.heading
      );
      state[targetIndex].attributes.saved = true;
      return state;
    },

    removeFromSaved(state, action) {
      const targetIndex = state.findIndex(
        (obj) =>
          obj.attributes.heading === action.payload.heading
      );
      state[targetIndex].attributes.saved = false;
      return state;
    },
  },
});

const speakingSlice = createSlice({
  name: 'speaking',
  initialState: null,
  reducers: {
    addData(_, action) {
      return action.payload;
    },
  },
});

//................................................

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    isUserLoggedIn: false,
    userInformation: {
      email: '',
      password: '',
    },
  },
  reducers: {
    addData(state, action) {
      return {
        ...state,
        users: action.payload,
      };
    },
    signIn(state) {
      localStorage.setItem('isUserLoggedIn', true);
      return {
        ...state,
        isUserLoggedIn: true,
      };
    },
  },
});

//....................................

const readingListSlice = createSlice({
  name: 'readingList',
  initialState: {
    readingList: [],
    storiesCount: 0,
  },
  reducers: {
    addToReadingList(state, action) {
      return {
        ...state,
        storiesCount: state.storiesCount + 1,
        readingList: [...state.readingList, action.payload],
      };
    },
    removeFromReadingList(state, action) {
      return {
        ...state,
        storiesCount: state.storiesCount - 1,
        readingList: state.readingList.filter(
          (item) => item.heading !== action.payload
        ),
      };
    },
  },
});

//........................................

const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    posts: articlesSlice.reducer,
    speaking: speakingSlice.reducer,
    users: usersSlice.reducer,
    readingList: readingListSlice.reducer,
  },
});

export const themeActions = themeSlice.actions;
export const postsActions = articlesSlice.actions;
export const speakingActions = speakingSlice.actions;
export const userActions = usersSlice.actions;
export const readingListActions = readingListSlice.actions;

export default store;
