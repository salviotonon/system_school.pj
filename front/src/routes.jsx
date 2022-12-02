import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import { HomeLogout } from './pages/HomeLogout'
import { Login } from './pages/Login'
import { Signup } from './pages/Signup'
import { ErrorPage } from './pages/ErrorPages';



export const MainRoutes = () => (
  <Routes>
    <Route
      path="/"
      element={(<HomeLogout />)}
    />
    <Route
      path="/login"
      element={(<Login />)}
    />
    <Route
      path="/signup"
      element={(<Signup />)}

    />
    <Route
      path="/404"
      element={(<ErrorPage />)}

    />
    <Route
      path="*"
      element={(<Navigate to='/404' replace />)}
    />
  </Routes>
);

