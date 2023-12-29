import './App.css';
import HeaderMain from './components/Main Page/HeaderMain';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Writing from './pages/Writing';
import Speaking from './pages/Speaking';
import Post from './pages/Post';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HeaderMain />,
  },
  { path: '/writing', element: <Writing /> },
  { path: '/speaking', element: <Speaking /> },
  { path: '/spking/:id', element: <Post /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
