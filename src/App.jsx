import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css' 

import './components/layout/navbar'
import Navbar from './components/layout/navbar'
import ItemListContainer from './components/containers/ItemListContainer'


function App() {

  const saludMensaje = "Saludos a todos"

  return (
    <>
      <body>
        <Navbar /> 
        <ItemListContainer texto = {saludMensaje}/>
      </body>
    </>
  )
}

export default App
