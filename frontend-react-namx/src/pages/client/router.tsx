import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from '../../home/appBar/appBar.home'
import Footer from '../../home/footer/appFooter.home'
import Home from './pageHome'
import Tour from './3D-tour'
import Profile from './Profile'
import Login from '../client/Login'
import Register from '../client/Register'
import ProtectedRoute from '../../utils/RequireAuth'
import { defaultProtectedRouteProps } from '../../context/LoginContext'

export default function router() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute
              {...defaultProtectedRouteProps}
              outlet={<Profile />}
            />
          }
        />
        <Route path="/3D-tour" element={<Tour />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  )
}
