import './global/styles.css';


import { Home } from './pages/Home';
import { HomeLogout } from './pages/HomeLogout';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';

import { Routes, Route, Navigate } from 'react-router-dom'
import { ErrorPage } from './pages/ErrorPages';


export default function App() {
  return (
    <Routes>
      <Route path='/' element={<HomeLogout />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/home' element={<Home />} />
      <Route path="/404" element={<ErrorPage />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  )
}

