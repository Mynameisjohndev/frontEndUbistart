import {
  BrowserRouter, Routes, Route, Navigate, Outlet,
} from 'react-router-dom';

import Signup from '../pages/signup';
import Signin from '../pages/signin';
import Todos from '../pages/todos';
import NotFound from '../pages/notfound';
import { useContextApp } from '../context';

const AppRoutes = () => {
  const { user } = useContextApp();
  console.log(user);
  let logado = user;
  const PrivateRoute = ({ redirectTo }) => {
    const isAuthenticated = logado;
    return isAuthenticated ? <Outlet/> : <Navigate to={redirectTo} />;
  };

  const Public = ({ redirectTo }) => {
    const isAuthenticated = user;
    return !isAuthenticated ? <Outlet/> : <Navigate to={redirectTo} />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute redirectTo="/"/>}>
            <Route path="/todos"element={<Todos />}/>
        </Route>
        <Route element={<Public redirectTo="/todos"/>}>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;