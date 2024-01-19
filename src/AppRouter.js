import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Empleados from './pages/Empleados'
import Clientes from './pages/Clientes'
import Autos from './pages/Autos'
import Servicios from './pages/Servicios'
import Llantas from './pages/Llantas'
import OrdenServicio from './pages/OrdenServicio'
import './App.css'

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Empleados" element={<Empleados />}></Route>
          <Route path="/Clientes" element={<Clientes />}></Route>
          <Route path="/Autos" element={<Autos />}></Route>
          <Route path="/Servicios" element={<Servicios />}></Route>
          <Route path="/Llantas" element={<Llantas />}></Route>
          <Route path="/OrdenServicio" element={<OrdenServicio />}></Route>
        </Routes>
      </Router>
  )
}

export default App
