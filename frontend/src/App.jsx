import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Home from './pages/Home';
import Article from './pages/Article';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { postsActions, speakingActions } from './store';
import Posts from './pages/Posts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  { path: '/posts', element: <Posts /> },
  { path: '/posts/:articleId', element: <Article /> },
]);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('http://localhost:1337/api/posts')
      .then((res) => res.json())
      .then((data) => {
        dispatch(postsActions.addData(data.data));
        console.log(data);
      });

    fetch('http://localhost:1337/api/speakings')
      .then((res) => res.json())
      .then((data) => {
        dispatch(speakingActions.addData(data.data));
      });
  }, [dispatch]);

  return <RouterProvider router={router} />;
}

export default App;
