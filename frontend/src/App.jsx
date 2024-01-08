import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Writing from './pages/Writing';
import Speaking from './pages/Speaking';
import Post from './pages/Post';
import Home from './pages/Home';
import Article from './components/Main Page/Writing Section/Article';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postsActions } from './store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  { path: '/writing', element: <Writing /> },
  { path: '/speaking', element: <Speaking /> },
  { path: '/speaking/:id', element: <Post /> },
  { path: ':articleId', element: <Article /> },
]);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('http://localhost:1337/api/posts')
      .then((res) => res.json())
      .then((data) => {
        dispatch(postsActions.addData(data.data));
      });
  }, [dispatch]);


  return <RouterProvider router={router} />;
}

export default App;
