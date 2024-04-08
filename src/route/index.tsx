import App from '@/App'
import React, { lazy } from 'react'
// import About from '@/views/About'
import Home from '@/views/Home'
import Page1 from '@/views/Page1'
import Page2 from '@/views/Page2'

const About = lazy(() => import('../views/About'))
// const Home = lazy(() => import('../views/Home'))
function suspend(el: JSX.Element) {
  return (
    <React.Suspense fallback={<div>小心我恶心你哦!</div>}>
      {el}
    </React.Suspense>
  )
}
import {
  Navigate,
  createBrowserRouter,
} from "react-router-dom";

export default createBrowserRouter([
  {
    path: "/",
    // element: <App />,
    element: <Navigate to='/page1'></Navigate>,//导航定向

  },
  {
    path: "/",
    // element: <App />,
    element: <Home />,
    children: [
      {
        path: "/page1",
        element: <Page1></Page1>
      }, {
        path: "/page2",
        element: <Page2></Page2>
      }]

  },
])