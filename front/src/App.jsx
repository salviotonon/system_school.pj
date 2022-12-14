import AppRoutes from './AppRoutes';
import { Button } from './components/Button';
import './global/styles.css';
import { HomeLogout } from './pages/HomeLogout';
import { Login } from './pages/Login';


function App() {

  return (
    <div>
      {/* aqui pode por o component de navbar se quiser  */}
      <AppRoutes/>
    </div>
  )
}

export default App
