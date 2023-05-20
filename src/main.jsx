import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'
import Provaides from './AuthProvaider/Provaides.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
   
    <Provaides>
      <RouterProvider router={router}></RouterProvider>
    </Provaides>

  </React.StrictMode>,

)
