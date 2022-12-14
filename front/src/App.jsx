import AppRoutes from './AppRoutes';
import { Button } from './components/Button';
import './global/styles.css';

import { BrowserRouter } from 'react-router-dom'
import { Layout } from './containers/Layout';
import { MainRoutes } from './routes';


export default function App() {
  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  )
}


