import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import { MainRouter } from './router/MainRouter.jsx'
import { store } from './redux/store.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={MainRouter}></RouterProvider>
    </Provider>
  </React.StrictMode>
)
