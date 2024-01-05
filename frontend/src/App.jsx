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
  return <RouterProvider router={router} />;
}

export default App;
