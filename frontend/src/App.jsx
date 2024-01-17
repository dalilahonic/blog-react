import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Home from './pages/Home';
import Article from './pages/Article';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  postsActions,
  speakingActions,
  userActions,
} from './store';
import Posts from './pages/Posts';
import Speaking from './pages/Speaking';
import Tags from './pages/Tags';
import RegisterPage from './pages/RegisterPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  { path: '/posts', element: <Posts /> },
  { path: '/posts/:articleId', element: <Article /> },
  { path: '/speaking', element: <Speaking /> },
  { path: 'tags/:tagId', element: <Tags /> },
  { path: '/signin', element: <RegisterPage /> },
  { path: '/signup', element: <RegisterPage /> },
]);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('http://localhost:1337/api/posts?populate=deep')
      .then((res) => res.json())
      .then((data) => {
        dispatch(postsActions.addData(data.data));
      });

    fetch('http://localhost:1337/api/speakings')
      .then((res) => res.json())
      .then((data) => {
        dispatch(speakingActions.addData(data.data));
      });

    fetch(
      'https://blog-36b42-default-rtdb.firebaseio.com/users.json'
    )
      .then((res) => res.json())
      .then((data) => dispatch(userActions.addData(data)));
  }, [dispatch]);

  return <RouterProvider router={router} />;
}

export default App;
