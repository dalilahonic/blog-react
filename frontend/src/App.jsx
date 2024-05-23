import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Home from './pages/Home';
import Article from './pages/Article';

import Posts from './pages/Posts';
import Speaking from './pages/Speaking';
import Tags from './pages/Tags';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import Speech from './pages/Speech';
import Verify from './components/Register/Verify';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  { path: '/posts', element: <Posts /> },
  { path: '/posts/:articleTitle', element: <Article /> },
  { path: '/speaking', element: <Speaking /> },
  { path: '/speaking/:speakingTitle', element: <Speech /> },
  { path: 'tags/:tagId', element: <Tags /> },
  { path: '/signin', element: <RegisterPage /> },
  { path: '/signup', element: <RegisterPage /> },
  { path: '/:username', element: <ProfilePage /> },
  { path: '/verify', element: <Verify /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
