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
    Reading_List: {
      list: [],
      storiesCount: 0,
    },
  },
  reducers: {
    addToReadingList(state, action) {
      const listName = action.payload.listName;

      const currentList = state[listName] || {
        storiesCount: 0,
        list: [],
      };

      return {
        ...state,
        [listName]: {
          ...currentList,
          storiesCount: currentList.storiesCount + 1,
          list: [...currentList.list, action.payload.obj],
        },
      };
    },

    removeFromReadingList(state, action) {
      let newState = { ...state };

      newState = Object.keys(newState).forEach((key) => {
        newState[key].list = newState[key].list.filter(
          (el) => el.heading !== action.payload.heading
        );

        newState[key].storiesCount =
          newState[key].list.length;
      });

      return newState;
    },
  },
});

//........................................

const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    posts: articlesSlice.reducer,
    users: usersSlice.reducer,
    readingList: readingListSlice.reducer,
  },
});

export const themeActions = themeSlice.actions;
export const postsActions = articlesSlice.actions;
export const userActions = usersSlice.actions;
export const readingListActions = readingListSlice.actions;

export default store;
