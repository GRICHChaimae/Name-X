import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Profile from './pages/Profile'
import 'react-toastify/dist/ReactToastify.css'
import ProtectedRoute from './utils/RequireAuth'
import { defaultProtectedRouteProps } from './context/LoginContext'


export default function App() {

  return (
    <Router>
      <Routes>
        <Route path='/profile' element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<Profile />} />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  )

}

