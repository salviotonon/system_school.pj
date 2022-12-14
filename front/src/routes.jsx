import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import { HomeLogout } from './pages/HomeLogout'
import { Login } from './pages/Login'
import { Signup } from './pages/Signup'
import { ErrorPage } from './pages/ErrorPages';
import { Home } from './pages/Home'
import { Layout } from './containers/Layout';
import { SectionHome } from './containers/SectionHome/SectionHome'
import { Perfil } from './containers/SectionHome/Perfil'
import { Disciplinas } from './containers/SectionHome/Disciplinas';
import { Mensagens } from './containers/SectionHome/Mensagens';
import { Horarios } from './containers/SectionHome/Horarios';
import { Fotos } from './containers/SectionHome/Fotos';
import { ClassRoom } from './containers/SectionHome/ClassRoom';


export const MainRoutes = () => (
  <Routes>
    <Route path='/' element={<Layout />}>

      <Route path='/' element={<HomeLogout />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/404' element={<ErrorPage />} />
      <Route path='*' element={<Navigate to='/404' />} />


      {/* childrens routes of home page */}

      <Route path='/home' element={<Home />}>
        <Route path='/home' element={<SectionHome />} />
        <Route path='perfil' element={<Perfil />} />
        <Route path='disciplinas' element={<Disciplinas />} />
        <Route path='mensagens' element={<Mensagens />} />
        <Route path='horarios' element={<Horarios />} />
        <Route path='fotos' element={<Fotos />} />
        <Route path='classroom' element={<ClassRoom />} />
      </Route>

    </Route>
  </Routes>

);
