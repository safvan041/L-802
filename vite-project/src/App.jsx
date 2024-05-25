import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FunctionalComponent from './components/functionalComponents'
import ClassComponent from './components/ClassComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FunctionalComponent />
      <ClassComponent />
      <count />
    </>
  )
}

export default App
