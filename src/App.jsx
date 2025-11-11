import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const saludMensaje = "kpedo a todos"

  return (
    <>
      <div>
        Saludos Cordiales
      </div>
      <div>
        {saludMensaje}
      </div>
    </>
  )
}

export default App
