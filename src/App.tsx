import './App.sass'
import 'photoswipe/style.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Components } from './pages/components/components'
import { Main } from './pages/main/main'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/components" element={<Components />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
