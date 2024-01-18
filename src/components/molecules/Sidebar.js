// Sidebar.js
import React, { useState, useEffect } from 'react'
import { Nav, NavLink, Button } from 'reactstrap'
import './Sidebar.css'
import logo from './assets/Logo.png'

const Sidebar = ({ usuario, rol }) => {
  return (
    <div className={'sidebar'}>
      <div className="user-info">
      <img src={logo} alt="Logo" className="logo" />
        {/* <p className="user-name">{usuario}</p> */}
        <p className="user-role">{rol}</p>
      </div>
      <Nav vertical>
        <NavLink to="/" activeClassName="active">
          Inicio
        </NavLink>
        <NavLink to="/" activeClassName="active">
          Empleados
        </NavLink>
        <NavLink to="/" activeClassName="active">
          Clientes
        </NavLink>
        <NavLink to="/" activeClassName="active">
          Autos
        </NavLink>
        <NavLink to="/" activeClassName="active">
          Servicios
        </NavLink>
        <NavLink to="/" activeClassName="active">
          Llantas
        </NavLink>
        <NavLink to="/" activeClassName="active">
          Orden Servicio
        </NavLink>
      </Nav>
      <div>
        <Button className="logout-button btn-link">Cerrar Sesión</Button>
      </div>
    </div>
  )
}

export default Sidebar
