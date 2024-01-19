import React from 'react'
import Sidebar from '../components/molecules/Sidebar'

function Empleados() {
  const usuario = 'Fernando'
  const rol = 'Admin'
  return (
    <div>
      <Sidebar usuario={usuario} rol={rol} />
      <div className="content">
        {/* Contenido principal de la aplicación */}
        <h1>Empleados</h1>
      </div>
    </div>
  )
}

export default Empleados
