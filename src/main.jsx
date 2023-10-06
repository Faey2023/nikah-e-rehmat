import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MyRouter from './Router/MyRouter.jsx'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={MyRouter}/>
  </React.StrictMode>,
)
