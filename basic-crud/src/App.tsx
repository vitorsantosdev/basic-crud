import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-white font-sans bg-red-500 p-5'>Olá Mundo</h1>
    </>
  )
}

export default App
