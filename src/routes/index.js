import {
  BrowserRouter, Routes, Route, Navigate, Outlet,
} from 'react-router-dom';

import Signup from '../pages/signup';
import Signin from '../pages/signin';
import Todos from '../pages/todos';
import NotFound from '../pages/notfound';

const AppRoutes = () => {
  const { user } = true;

  const PrivateRoute = ({ redirectTo }) => {
    const isAuthenticated = localStorage.getItem('token') !== null && user;
    return isAuthenticated ? <Outlet/> : <Navigate to={redirectTo} />;
  };

  const Public = ({ redirectTo }) => {
    const isAuthenticated = localStorage.getItem('token') !== null && user;
    return !isAuthenticated ? <Outlet/> : <Navigate to={redirectTo} />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute redirectTo="/"/>}>
            <Route path="/todos"element={<Todos />}/>
        </Route>
        <Route element={<Public redirectTo="/dashboard"/>}>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;