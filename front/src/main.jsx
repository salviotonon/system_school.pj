import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

<<<<<<< HEAD
ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
=======
import {Provider} from 'react-redux'
import {store} from './Store'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider store={store}>
    <App/>
   </Provider>
  </React.StrictMode>
>>>>>>> f4b985122f87d99ef7f5fdb3023461d42088c8cc
)
