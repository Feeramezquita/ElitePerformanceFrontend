import React from 'react'
import Sidebar from './components/molecules/Sidebar.js'
import './App.css'


const App = () => {
  const usuario = 'Fernando';
  const rol = 'Admin';
  return (
    <div className="App">
      <Sidebar usuario = {usuario} rol={rol}/>
      <div className="content">
        {/* Contenido principal de la aplicación */}
        <h1>Contenido Principal</h1>
      </div>
    </div>
  )
}

export default App
