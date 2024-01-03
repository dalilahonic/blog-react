import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Writing from './pages/Writing';
import Speaking from './pages/Speaking';
import Post from './pages/Post';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  { path: '/writing', element: <Writing /> },
  { path: '/speaking', element: <Speaking /> },
  { path: '/spking/:id', element: <Post /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
