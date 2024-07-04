import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import View from './Components/View'
//import Add from './Components/Add'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import View1 from './Components/View1'
import Login from './Components/Login'
import View from './Components/View'
import Add from './Components/Add'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Routes>
      <Route path='/'element={<View1/>}></Route>
      <Route path='/log'element={<Login/>}></Route>

     </Routes>
    </>
  )
}

export default App
