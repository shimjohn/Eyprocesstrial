import { createBrowserRouter } from 'react-router';
import Login from './components/Login';
import Products from './components/Products';
import ProtectedRoute from './components/ProtectedRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/products',
    element: (
      <ProtectedRoute>
        <Products />
      </ProtectedRoute>
    ),
  },
  {
    path: '*',
    element: <Login />,
  },
]);
