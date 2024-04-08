
import { Outlet, Link, useRoutes, Navigate } from "react-router-dom";
import About from '@/views/About'
import Home from '@/views/Home'

function App() {
  //路由表相当于 outlet

  return (

    <div className="App">


      <Outlet></Outlet>


    </div>
  )
}

export default App
