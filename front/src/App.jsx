<<<<<<< HEAD
=======
import AppRoutes from './AppRoutes';
import { Button } from './components/Button';
>>>>>>> f4b985122f87d99ef7f5fdb3023461d42088c8cc
import './global/styles.css';

import { BrowserRouter } from 'react-router-dom'
import { Layout } from './containers/Layout';
import { MainRoutes } from './routes';

<<<<<<< HEAD

export default function App() {
  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
=======
  return (
    <div>
      {/* aqui pode por o component de navbar se quiser  */}
      <AppRoutes/>
    </div>
>>>>>>> f4b985122f87d99ef7f5fdb3023461d42088c8cc
  )
}


