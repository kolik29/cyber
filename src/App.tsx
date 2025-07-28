import { useState } from 'react'
import './App.sass'
import { Header } from './comonents/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
    </>
  )
}

export default App
