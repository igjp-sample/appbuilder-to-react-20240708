import { redirect } from 'react-router-dom';
import GridCRUD from './grid-crud/grid-crud';
import Card from './card/card';
import Login from './login/login';
import LoginSuccess from './login-success/login-success';
import Stteper from './stteper/stteper';
export const routes = [
  { index: true, loader: () => redirect('grid-crud') },
  { path: 'grid-crud', element: <GridCRUD />, text: 'Grid CRUD' },
  { path: 'card', element: <Card />, text: 'Card' },
  { path: 'login', element: <Login />, text: 'Login' },
  { path: 'login-success', element: <LoginSuccess />, text: 'Login Success' },
  { path: 'stteper', element: <Stteper />, text: 'Stteper' }
];
