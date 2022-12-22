import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import CleintPages from './pages/client/router'
import AdminPages from './pages/admin/router'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CleintPages />} />
        <Route path="/admin" element={<AdminPages />} />
      </Routes>
    </Router>
  )
}
