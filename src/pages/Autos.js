import React from 'react'
import Sidebar from '../components/molecules/Sidebar'

function Autos() {
  const usuario = 'Fernando'
  const rol = 'Admin'
  return (
    <div>
      <Sidebar usuario={usuario} rol={rol} />
      <div className="content">
        {/* Contenido principal de la aplicación */}
        <h1>Autos</h1>
      </div>
    </div>
  )
}

export default Autos
