import {BrowserRouter,Navigate,Route,Routes} from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import { Home } from './pages/Home';
import { Login } from './pages/Login';

const AppRoutes = () => {
  const {auth , loading } = useAuth();
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ auth ? <Home/> : <Navigate to='/login' />} />
          <Route path='/login' element={ !auth ? <Login/> : <Navigate to='/' />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default AppRoutes
