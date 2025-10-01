import { useState } from 'react'

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
