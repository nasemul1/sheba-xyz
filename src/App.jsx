import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Services from './pages/services/Services'
import Staffs from './pages/staffs/Staffs'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'

function App() {
    return (
      <>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/services' element={<Services />}></Route>
          <Route path='/staffs' element={<Staffs />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
        </Routes>
      </>
    )
}

export default App
