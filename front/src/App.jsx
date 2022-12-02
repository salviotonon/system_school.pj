import './global/styles.css';

import { BrowserRouter } from 'react-router-dom'
import { Layout } from './containers/Layout';
import { MainRoutes } from './routes';


export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <MainRoutes />
      </Layout>
    </BrowserRouter>
  )
}

{/* <Routes>
  <Route path='/' element={<HomeLogout />} />
  <Route path='/login' element={<Login />} />
  <Route path='/signup' element={<Signup />} />
  <Route path='/home' element={<Home />} />
  <Route path="/404" element={<ErrorPage />} />
  <Route path="*" element={<Navigate to="/404" replace />} />
</Routes> */}

