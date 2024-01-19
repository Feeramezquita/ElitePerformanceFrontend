// Sidebar.js
import React from 'react'
import { Link } from 'react-router-dom';
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
        <Link to="/Home" className="nav-link" activeClassName="active">
          Inicio
        </Link>
        <Link to="/Empleados" className="nav-link" activeClassName="active">
          Empleados
        </Link>
        <NavLink to="/Clientes" activeClassName="active">
          Clientes
        </NavLink>
        <Link to="/Autos" className="nav-link" activeClassName="active">
          Autos
        </Link>
        <Link to="/Servicios" className="nav-link" activeClassName="active">
          Servicios
        </Link>
        <Link to="/Llantas" className="nav-link" activeClassName="active">
          Llantas
        </Link>
        <Link to="/OrdenServicio" className="nav-link" activeClassName="active">
          Orden Serivicio
        </Link>
      </Nav>
      <div>
        <Button className="logout-button btn-link">Cerrar Sesión</Button>
      </div>
    </div>
  )
}

export default Sidebar
