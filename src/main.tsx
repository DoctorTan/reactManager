import React from 'react'
import ReactDOM from 'react-dom/client'
import 'reset-css'//初始化的东西要放在开头哦,然后自己的样式可以覆盖他
//然后再是框架样式,组件样式
import '@/assets/style/global.scss'
// import { Suspense } from 'react'
import router from '@/route'
import {
  RouterProvider,
} from "react-router-dom";
ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>

)
